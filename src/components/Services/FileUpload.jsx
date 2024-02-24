import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import DoorEffect from "../UI-related-components/DoorOpen";
import { CiFileOn } from "react-icons/ci";
import ProcessFiles from "./ProcessFiles";
import Curtains from "../UI-related-components/Curtains";
import { ImArrowDown } from "react-icons/im";
import { LuDelete } from "react-icons/lu";
import axios from "axios";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles((prev) => {
        return [...prev, ...acceptedFiles];
      });
    },
  });

  const [curtains, setCurtains] = useState(false);

  const [data, setData] = useState(null);

  const submitHandler = async () => {
    setCurtains(true);
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("file", file);
    });

    try {
      setTimeout(async () => {
        setProcessing(true);
        setCurtains(false);
      }, 1500);

      const res = await axios.post(
        `http://localhost:4001/codac/get-file-url`,
          formData,
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
      setData("Error");
    }
  };

  const [processing, setProcessing] = useState(false);

  return (
    <div className=" rounded-2xl  flex justify-center bg-primary-bg min-h-[100vh]">
      {!processing && (    
        <div className="flex flex-col items-center p-4 md:p-7 gap-7 w-[90vw] md:w-[50vw] lg:w-[50vw] text-[#8851d9]">
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <p className="text-2xl w-full font-bold text-center ">
              Put your potentially malicious file into this window.
            </p>
            <div>
              <ImArrowDown size={30} />
            </div>
          </div>
          <div
            {...getRootProps()}
            className=" rounded-3xl  h-[40vh] drop-box-container focus:outline-none transition duration-300 ease-in-out cursor-pointer"
          >
            <input {...getInputProps()} />
            <DoorEffect />
          </div>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <div className="flex gap-16  items-center">
                  <div className="relative">
                    <CiFileOn size={80} />
                    <p className="absolute top-[50%] -right-[50%] text-xs bg-blue-500 text-white p-1 rounded-md">
                      {file.type}
                    </p>
                  </div>
                  <p className="font-semibold text-lg">{file.name}</p>
                  <div
                    onClick={() =>
                      setUploadedFiles((prev) => {
                        return prev.filter((f) => f.name !== file.name);
                      })
                    }
                    className="cursor-pointer"
                  >
                    <LuDelete size={30} />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {uploadedFiles.length > 0 && <p>You can add more files</p>}
          {uploadedFiles.length > 0 && (
            <button
              onClick={submitHandler}
              className="font-semibold bg-black text-white px-7 py-2 rounded-full border-[1.5px] border-black hover:text-black hover:bg-white transition duration-300"
            >
              Launch
            </button>
          )}
          {uploadedFiles.length === 0 && (
            <p>
              Click to browse to your files{" "}
              <span className="underline">OR</span> Drag and drop your files
            </p>
          )}
        </div>
      )}

      {processing && (
        <ProcessFiles
          uploadFiles={uploadedFiles}
          setProcessing={setProcessing}
          data={data}
        />
      )}
      {curtains && <Curtains />}
    </div>
  );
};
export default FileUpload;
