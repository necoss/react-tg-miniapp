import { useState } from 'react'
import { createPortal } from 'react-dom'
import { GoHeart } from 'react-icons/go'
import { GoHeartFill } from 'react-icons/go'
import { StoreOpenedCard } from './StoreOpenedCard'
import { cardsData } from '../data'

export type CardInfo = {
	image: string
	name: string
	price: string
	isFavourite: boolean
}

export const StoreItems = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [selectedCard, setSelectedCard] = useState<CardInfo | null>(null)

	const [cards, setCards] = useState<CardInfo[]>(cardsData)

	const handleAddFavourite = (clickedCard: string, event: React.MouseEvent) => {
		event.stopPropagation()
		setCards((prevCards) =>
			prevCards.map((card) => ({
				...card,
				isFavourite:
					card.name === clickedCard ? !card.isFavourite : card.isFavourite,
			})),
		)
	}

	const handleOpenModal = (card: CardInfo) => {
		setIsOpen(true)
		setSelectedCard(card)
		window.scrollTo(0, 0)
	}

	const handleCloseModal = () => {
		setIsOpen(false)
		setSelectedCard(null)
	}

	return (
		<div className="mt-3 grid grid-cols-2 grid-rows-1 gap-4">
			{cards.map((card) => {
				return (
					<div
						className="relative"
						key={card.name}
						onClick={() => handleOpenModal(card)}
					>
						<img
							src={card.image}
							alt={card.name}
							className="h-60 w-50 rounded-3xl bg-cover"
						/>

						<div
							className="absolute top-2 right-2 w-fit rounded-full bg-[#101B1F] p-2.5"
							onClick={(event) => handleAddFavourite(card.name, event)}
						>
							{card.isFavourite ? (
								<GoHeartFill size={19} color="white" />
							) : (
								<GoHeart size={19} color="white" />
							)}
						</div>

						<article className="mt-1 ml-1">
							<h5 className="font-bebas text-[22px] tracking-wide">
								{card.name}
							</h5>

							<p className="font-bebas text-[18px]">{card.price}</p>
						</article>
					</div>
				)
			})}
			{isOpen &&
				selectedCard &&
				createPortal(
					<StoreOpenedCard card={selectedCard} closeModal={handleCloseModal} />,
					document.body,
				)}
		</div>
	)
}
