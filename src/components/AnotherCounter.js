import React, {useState, useMemo } from 'react'

const AnotherCounter = () => {
    const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <div>
			<div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
                {console.log(isEven)}
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
                {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}
			</div>
		</div>
    )
}

export default AnotherCounter
