import './App.css';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import DisplayComponent from './components/DisplayComponent';
import BtnComponent from './components/BtnComponent';
import useSingleAndDoubleClick from "./components/DoubleClick";

function App() {

  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  const [status, setStatus] = useState(0);
  const [wait, setWait] = useState(false);

  useEffect(() => {

    const unsubscribe = new Subject();
    interval(1000)
        .pipe(takeUntil(unsubscribe))
        .subscribe(() => {
          if (watchOn) {
            setTime(val => val + 100);
          }
        });
    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [watchOn]);


  const handleStart = () => {
    setWatchOn(prevState => !prevState);
    setStatus(1);
  }


  const handleResume = () => {
    if(wait) {
      handleStart();
    }
   setWait(false);
  }


  const handleStop = () => {
    setTime(0);
    setWatchOn(false);
    setStatus(0);
  }

  const handleWait = () => {
    setWait(true);
    if (time !== 0) {
      setWatchOn(false);
    }
  }


  const handleReset = () => {
    setTime(0);
    setWatchOn(false);
    setStatus(0);
    handleStart();
  }

  const handleHold = useSingleAndDoubleClick(handleResume,handleWait,300)



  return (
    <div className="App">
        <div className='main-section'>
          <div className='clock-holder'>
            <div className='app-title'>Stopwatch</div>
            <div className='stopwatch'>
              <DisplayComponent
                  time={time}
              />
              <BtnComponent
                  start={handleStart}
                  stop={handleStop}
                  hold={handleHold}
                  reset={handleReset}
                  resume={handleResume}
                  status={status}
              />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
