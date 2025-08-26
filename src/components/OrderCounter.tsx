import { useState } from 'react'

export const OrderCounter = () => {
	const [itemsCount, setItemsCount] = useState<number>(0)

	const handleIncrease = () => {
		setItemsCount(itemsCount + 1)
	}

	const handleDecrease = () => {
		if (itemsCount) {
			setItemsCount(itemsCount - 1)
		}
	}

	return (
		<div className="font-bebas flex items-center gap-3 rounded-full bg-[#283942] px-3 py-2 text-2xl text-white">
			<button onClick={handleDecrease} className="px-5">
				-
			</button>
			<p>{itemsCount}</p>
			<button onClick={handleIncrease} className="px-5">
				+
			</button>
		</div>
	)
}
