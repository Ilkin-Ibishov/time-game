import { forwardRef } from "react"
import { createPortal } from "react-dom";

const ResultModal = forwardRef( function ResultModal({onReset, targetTime, time}, ref){
    const userLost = time<=0
    console.log(time);
    return createPortal(<dialog ref={ref} className="result-modal" onClose={onReset}>
        <h2> {userLost&&'You Lost'}</h2>
        {!userLost&& <h2>Your score is {Math.round((targetTime*1000-time)/targetTime*0.1)}</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        {time>0&&<p>You stopped the timer with <strong>{time/1000} seconds left</strong></p>}
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal'))
})

export default ResultModal;