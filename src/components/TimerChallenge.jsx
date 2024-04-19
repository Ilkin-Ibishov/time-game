import { useState, useRef } from "react"
import ResultModal from "./ResultModal";
export default function TimerChallenge({title, targetTime}){
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)
    const timerIsActive = 0 < timeRemaining && timeRemaining < targetTime * 1000;
    const timer = useRef();
    const dialog = useRef();

    if(timeRemaining <= 0){
        clearInterval(timer.current)
        dialog.current.showModal()
    }
    function handleStart (){
        timer.current = setInterval(()=>{
            setTimeRemaining(prevTime=>prevTime-10)
        }, 10)
    }
    function handleStop(){
        dialog.current.showModal()
        clearInterval(timer.current)
        }
    function handleReset(){
        setTimeRemaining(targetTime*1000)
    }
    return <>
    <ResultModal onReset={handleReset} ref={dialog} targetTime={targetTime} time={timeRemaining} />
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime>1? 's':''}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive?"Stop":"Start"} Challenge</button>
        <p className={timerIsActive?'active':undefined}>
            {timerIsActive?'Time is running...':"Timer inactive"}
        </p>
    </section>
    </>}