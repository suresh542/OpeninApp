// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const ExcelTable = () => {
//   const [excelData, setExcelData] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
    
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         try {
//           const workbook = XLSX.read(e.target.result, { type: 'binary' });
//           const sheetName = workbook.SheetNames[0];
//           const sheet = workbook.Sheets[sheetName];
//           const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          
//           setExcelData(data);
//         } catch (error) {
//           console.error('Error reading Excel file:', error);
//         }
//       };

//       reader.readAsBinaryString(file);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
//       <button onClick={() => setExcelData(excelData)}>Clear Data</button>

//       {excelData && (
//         <table border="1">
//           <thead>
//             <tr>
//               {excelData[0].map((header, index) => (
//                 <th key={index}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {excelData.slice(1).map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {row.map((cell, cellIndex) => (
//                   <td key={cellIndex}>{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ExcelTable;




import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelTable = () => {
  const [excelData, setExcelData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

          setExcelData(jsonData);
        } catch (error) {
          console.error('Error reading Excel file:', error);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={() => setExcelData(null)}>Clear Data</button>

      {excelData && (
        <table border="1">
          <thead>
            <tr>
              {excelData[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExcelTable;
