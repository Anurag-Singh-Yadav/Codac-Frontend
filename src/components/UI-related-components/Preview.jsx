import React from "react";

function Preview({ preview }) {
  return (
    <div className="bg-white fixed z-50 top-[30vh] w-full justify-center items-center flex flex-col gap-3 ">
        <h1 className="text-2xl font-bold text-center">Preview</h1>
        <div className="flex justify-center items-center">      {
        preview && 
        <table className="table-auto">
          <tbody>
            {preview.map((row , i) => {
              return (
                <tr key={i}>
                  {row.map((col , j) => {
                    return <td key={j} className="border px-4 py-2">{col}</td>
                  })}
                </tr>
              );
            })}
            
          </tbody>
        </table>
      }</div>

    </div>
  )
}

export default Preview;