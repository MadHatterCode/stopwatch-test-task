import React from 'react';

function BtnComponent({ start, stop, reset, resume, hold, status }) {
  return (
      <div>
          {(status === 0) ?
              <button className="stopwatch-btn stopwatch-btn-blu"
                      onClick={start}>Старт</button> : ""
          }

          {(status === 1) ?
              <div>
                  <button className="stopwatch-btn stopwatch-btn-red"
                          onClick={stop}>Стоп</button>

                  <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={reset}>Сброс</button>

                  <button className="stopwatch-btn stopwatch-btn-green"
                          onClick={hold}>Ждать</button>
              </div> : ""
          }

          {(status === 2) ?
              <div>
                  <button className="stopwatch-btn stopwatch-btn-blu"
                          onClick={start}>Старт</button>
                  <button className="stopwatch-btn stopwatch-btn-yel"
                          onClick={reset}>Сброс</button>
              </div> : ""
          }

      </div>
  );
}

export default BtnComponent;
