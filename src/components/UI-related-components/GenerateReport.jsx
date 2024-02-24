import React from 'react'

function GenerateReport({report}) {
    console.log('Reppp' , report);
  return (
    <div className='bg-gradient-to-r from-purple-700 to-blue-500 px-6 py-4 rounded-lg border-4 '>
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
                    className={`font-medium text-xl text-white ${
                      line.startsWith('Infected files') ? 'bg-emerald-300 p-2 rounded-md text-black' : 'p-2'
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
