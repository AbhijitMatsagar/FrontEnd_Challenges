import React, { useEffect, useState } from 'react';

const BoxContainer = ({ boxMatrix }) => {
  const [fillArr, setFillArr] = useState([]);
  const [onesCount, setOnesCount] = useState(0);
  const [fillCount, setFillCount] = useState(0);

  const findInFillArr = (rowIndex, colIndex) => {
    return fillArr.find((pos) => pos[0] === rowIndex && pos[1] === colIndex);
  };

  const handleClick = (rowIndex, colIndex) => {
    if (!findInFillArr(rowIndex, colIndex)) {
      setFillArr([...fillArr, [rowIndex, colIndex]]);
      setFillCount(prev => prev + 1);
    }
  };

  const unfilledBoxes = () => {
    let i = fillArr.length - 1;
    const intervalId = setInterval(() => {
      if (i < 0) {
        clearInterval(intervalId);
      } else {
        setFillArr(prev => prev.slice(0, -1));
        setFillCount(prev => prev - 1)
        i--;
      }
    }, 800);
  };

  useEffect(() => {
    if (fillCount === onesCount) {
      unfilledBoxes();
    }
  }, [fillCount, onesCount]);

  useEffect(() => {
    let count = 0;
    boxMatrix.forEach((row) => {
      row.forEach((e) => {
        if (e === 1) {
          count++;
        }
      });
    });
    setOnesCount(count);
  }, [boxMatrix]);

  return (
    <div style={{ border: '1px solid black', borderRadius: '8px', width: 'max-content', padding: '8px', display: "flex", flexDirection: "column", gap: '30px' }}>
      {boxMatrix?.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', gap: '30px' }}>
          {row?.map((e, colIndex) => (
            e === 1 ?
              <div
                key={colIndex}
                style={{ display: "flex", background: findInFillArr(rowIndex, colIndex) ? '#09f809' : '', alignItems: "center", justifyContent: "center", width: "50px", height: "50px", border: "1px solid black", borderRadius: "8px" }}
                onClick={() => handleClick(rowIndex, colIndex)}
              ></div> :
              <div key={colIndex} style={{ height: "50px", width: "50px" }}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoxContainer;
