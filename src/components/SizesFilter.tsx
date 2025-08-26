import { useState } from 'react'

type SizesFilter = {
	name: string
	isActive: boolean
}

export const SizesFilter = () => {
	const [sizes, setSizes] = useState<SizesFilter[]>([
		{ name: 'XS', isActive: false },
		{ name: 'S', isActive: false },
		{ name: 'M', isActive: true },
		{ name: 'L', isActive: false },
		{ name: 'XL', isActive: false },
	])

	const handleClick = (clickedFilter: string) => {
		setSizes((prevFilters) =>
			prevFilters.map((size) => ({
				...size,
				isActive: size.name === clickedFilter,
			})),
		)
	}

	return (
		<div className="mt-4 flex items-center justify-center gap-3 overflow-x-scroll whitespace-nowrap">
			{sizes.map((size) => {
				return (
					<p
						className={`font-bebas flex h-14 w-14 items-center justify-center rounded-full border-1 text-2xl tracking-wider ${size.isActive ? 'border-transparent bg-[#101B1F] text-white' : 'border-[#101B1F] bg-transparent text-[#101B1F]'}`}
						onClick={() => handleClick(size.name)}
						key={size.name}
					>
						{size.name}
					</p>
				)
			})}
		</div>
	)
}
