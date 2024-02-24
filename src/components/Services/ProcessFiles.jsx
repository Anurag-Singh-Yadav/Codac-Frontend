import React, { Component, useEffect, useState } from "react";
import { vec3 } from "gl-matrix";
import { LuUpload } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaVirusCovid } from "react-icons/fa6";

const progressEvents = [
  {
    event: "Uploading files",
    icon: LuUpload,
  },
  {
    event: "Scanning files",
    icon: FaMagnifyingGlass,
  },
  {
    event: "Running in containerized environment",
    icon: FaVirusCovid,
  },
];

function ProcessFiles({ data }) {
  const [report, setReport] = useState(null);

  useEffect(() => {
    if (data?.clamAVScan) {
      setReport(reportParser(data.clamAVScan));
    }
  }, [data]);

  useEffect(() => {
    var canvas = document.getElementById("canvas");
    var flr = Math.floor;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var halfw = canvas.width / 2,
      halfh = canvas.height / 2,
      step = 2,
      warpZ = 12,
      speed = 0.075;
    var stampedDate = new Date();

    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function rnd(num1, num2) {
      return flr(Math.random() * num2 * 2) + num1;
    }

    function getColor() {
      return "hsla(200,100%, " + rnd(50, 100) + "%, 1)";
    }

    var star = function () {
      var v = vec3.fromValues(
        rnd(0 - halfw, halfw),
        rnd(0 - halfh, halfh),
        rnd(1, warpZ)
      );

      this.x = v[0];
      this.y = v[1];
      this.z = v[2];
      this.color = getColor();

      this.reset = function () {
        v = vec3.fromValues(
          rnd(0 - halfw, halfw),
          rnd(0 - halfh, halfh),
          rnd(1, warpZ)
        );

        this.x = v[0];
        this.y = v[1];
        this.color = getColor();
        vel = this.calcVel();
      };

      this.calcVel = function () {
        return vec3.fromValues(0, 0, 0 - speed);
      };

      var vel = this.calcVel();

      this.draw = function () {
        vel = this.calcVel();
        v = vec3.add(vec3.create(), v, vel);
        var x = v[0] / v[2];
        var y = v[1] / v[2];
        var x2 = v[0] / (v[2] + speed * 0.5);
        var y2 = v[1] / (v[2] + speed * 0.5);

        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        if (x < 0 - halfw || x > halfw || y < 0 - halfh || y > halfh) {
          this.reset();
        }
      };
    };

    var starfield = function () {
      var numOfStars = 250;

      var stars = [];

      function _init() {
        for (var i = 0, len = numOfStars; i < len; i++) {
          stars.push(new star());
        }
      }

      _init();

      this.draw = function () {
        ctx.translate(halfw, halfh);

        for (var i = 0, len = stars.length; i < len; i++) {
          var currentStar = stars[i];

          currentStar.draw();
        }
      };
    };

    var mStarField = new starfield();

    function draw() {
      // make 5 seconds
      var millSeconds = 1000 * 10;

      var currentTime = new Date();

      speed = 0.025;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      mStarField.draw();

      window.requestAnimationFrame(draw);
    }

    draw();

    window.onresize = function () {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      halfw = canvas.width / 2;
      halfh = canvas.height / 2;
    };
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % progressEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const reportParser = (report) => {
    if (!report) {
      throw new Error("No report found");
    }
    const reportData = report.split("\r\n");
    console.log(reportData);
  };

  return (
    <div className="relative h-[88vh] w-full">
      <canvas id="canvas" className="absolute w-full ">
        <p className="text-white font-bold">Hello</p>
      </canvas>
      <div>

        {!report &&
          progressEvents.map((obj, index) => {
            const { icon, event } = obj;
            return (
              <div className="fixed  top-10 h-[100vh] w-[100vw] flex justify-center items-center content-center">
                {currentIndex === index && (
                  <div className="flex flex-col  text-white gap-3 bg-opacity-100 bg-white font-bold text-xl p-5 rounded-full w-72 h-72 items-center justify-center text-center bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-700  via-pink-700  to-blue-700 shadow-inner shadow-slate-950">
                    <ReactIcon icon={icon} className="w-16 h-16" />
                    <p className="justify-center content-center">{event}</p>
                  </div>
                )}
              </div>
            );
          })}
        {report && (
          <div>
            <GenerateReport report={report} />
          </div>
        )}
      </div>
    </div>
  );
}

const ReactIcon = ({ icon }) => {
  const Component = icon;
  return <Component />;
};

export default ProcessFiles;
