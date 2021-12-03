import { useState, useEffect } from 'react';
// eslint-disable-next-line
function useSingleAndDoubleClick(actionSimpleClick, actionDoubleClick, delay = 250) {
    const [click, setClick] = useState(0);
// eslint-disable-next-line
    useEffect(() => {
        const timer = setTimeout(() => {
            // eslint-disable-next-line
            if (click === 1) actionSimpleClick();
            setClick(0);
        }, delay);
        if (click === 2) actionDoubleClick();

        return () => clearTimeout(timer);
        // eslint-disable-next-line
    }, [click]);

    return () => setClick(prev => prev + 1);
}

export default useSingleAndDoubleClick;
