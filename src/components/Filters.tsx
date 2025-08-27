import { useState } from 'react'
import { filtersData } from '../data'

type Filters = {
	name: string
	isActive: boolean
}

export const Filters = () => {
	const [filters, setFilters] = useState<Filters[]>(filtersData)

	const handleClick = (clickedFilter: string) => {
		setFilters((prevFilters) =>
			prevFilters.map((filter) => ({
				...filter,
				isActive: filter.name === clickedFilter,
			})),
		)
	}

	return (
		<div className="flex items-center overflow-x-scroll whitespace-nowrap">
			{filters.map((filter) => {
				return (
					<p
						className={`mt-5 mr-3 rounded-full border-1 px-4 py-2 ${filter.isActive ? 'border-transparent bg-[#101B1F] text-white' : 'border-[#101B1F] bg-transparent text-[#101B1F]'}`}
						onClick={() => handleClick(filter.name)}
						key={filter.name}
					>
						{filter.name}
					</p>
				)
			})}
		</div>
	)
}
