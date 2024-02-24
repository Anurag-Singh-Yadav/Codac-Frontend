import React from 'react'
import './style.css'
function GenerateReport({report}) {
    console.log('Reppp' , report);
  return (
    <div className=' card '>
      <div className='text-center pb-3 font-bold text-2xl text-white'>Scan Report </div>
        {
          report &&
            report
              .filter((line) => {
                return (
                  line.startsWith('Scanned directories') ||
                  line.startsWith('Scanned files') ||
                  line.startsWith('Infected files') ||
                  line.startsWith('Data scanned') ||
                  line.startsWith('Data read') ||
                  line.startsWith('Time')
                );
              })
              .map((line, i) => {
                return (
                  <p
                    className={`font-medium text-lg ${
                      line.startsWith('Infected files') ? 'bg-emerald-500 p-2 rounded-md text-black' : 'p-2 text-white'
                    }`}
                    key={i}
                  >
                    {line}
                  </p>
                );
              })
        }
    </div>
  )
}

export default GenerateReport
