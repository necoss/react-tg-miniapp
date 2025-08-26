import { IoIosArrowBack } from 'react-icons/io'
import { TiStarFullOutline } from 'react-icons/ti'
import { TbPointFilled } from 'react-icons/tb'

import type { CardInfo } from './StoreItems'
import { SizesFilter } from './SizesFilter'
import { OrderCounter } from './OrderCounter'

type StoreOpenedCardProps = {
	card: CardInfo
	closeModal: () => void
}

export const StoreOpenedCard = ({ card, closeModal }: StoreOpenedCardProps) => {
	return (
		<div
			className="absolute top-0 left-0 h-[140vh] w-[100vw] bg-white"
			onClick={(event) => event.stopPropagation()}
		>
			<div className="relative mt-30 px-4">
				<div
					className="absolute top-2 left-6 rounded-full bg-[#999B9D] p-3"
					onClick={closeModal}
				>
					<IoIosArrowBack size={25} color="white" />
				</div>

				<img
					src={card.image}
					alt={card.name}
					className="aspect-square rounded-3xl object-cover"
				/>

				{/* Title */}
				<h5 className="font-bebas mt-3 ml-1 text-4xl tracking-wider">
					{card.name}
				</h5>

				{/* Statistics */}
				<div className="mt-2 flex items-center justify-between">
					<p className="font-roboto flex items-center">
						<span className="mr-1 flex items-center rounded-full bg-[#111111] px-2 text-white">
							<TiStarFullOutline color="white" size={14} className="mr-1" /> 4.9
						</span>{' '}
						<span className="text-[#737373]">Rating</span>
					</p>

					<TbPointFilled color="#959595" />

					<p className="text-[#737373]">3.3k+ Review</p>
					<TbPointFilled color="#959595" />
					<p className="text-[#737373]">5.9k+ Sold</p>
				</div>

				{/* Price	 */}
				<p className="font-bebas mt-3 flex items-end gap-2 text-4xl">
					{card.price}{' '}
					<div className="flex items-center gap-2">
						<span className="font-roboto text-2xl font-medium tracking-tighter text-[#dadada] line-through">
							$58.50
						</span>

						<span className="font-roboto -mt-[3px] rounded-full bg-[#E8E8E8] px-2 py-1 text-[14px] font-medium">
							-33%
						</span>
					</div>
				</p>

				{/* Description */}
				<p className="mt-3 text-[#6C6C6C]">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit eius
					asperiores vero expedita, ipsa amet ab laudantium ducimus deserunt
					soluta! Vitae soluta officiis a libero pariatur reprehenderit, dolorum
					sint autem!
				</p>

				{/* Size filters */}
				<SizesFilter />

				{/* Add to cart */}
				<div className="mt-7 flex w-full items-center justify-between rounded-full bg-[#121B1C] p-3">
					<OrderCounter />
					<button className="font-roboto rounded-full bg-white px-3 py-2 font-medium text-[#121B1C]">
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	)
}
