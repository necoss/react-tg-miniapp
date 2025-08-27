import { useState } from 'react'
import { ShowcaseCarousel } from './ShowcaseCarousel'
import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const sliderStartPoint = 24
const sliderEndPoint = 76

export const WelcomeShowcase = () => {
	const [sliderValue, setSliderValue] = useState(sliderStartPoint)

	const navigateTo = useNavigate()

	const handleRedirectToStore = () => {
		navigateTo('/store')
	}

	const handleUpdateSliderPosition = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const updatedInputValue = Number(event.target.value)
		setSliderValue(updatedInputValue)
	}

	const handleReleaseSlider = () => {
		if (sliderValue === sliderEndPoint) {
			console.log('REDIRECTED NIGGA')
			handleRedirectToStore()
		} else {
			setSliderValue(sliderStartPoint)
		}
	}

	return (
		<section className="relative h-[100vh] w-[100vw] bg-[#eeebe7]">
			<div className="pointer-events-none absolute top-0 left-[50%] z-10 h-[150px] w-full translate-x-[-50%] bg-gradient-to-b from-[#000000cb] to-transparent">
				<p className="font-bebas pt-15 text-center text-2xl tracking-wider text-white">
					DIVINE ASCENSION
				</p>
			</div>

			<ShowcaseCarousel />

			<div className="absolute bottom-0 min-h-90 w-full rounded-tl-[60px] rounded-tr-[60px] bg-[#111A1B] px-4 pt-12 text-center">
				<h1 className="font-bebas text-[50px] leading-[1] font-black tracking-wide text-white">
					DISCOVER OUR NEW T-SHIRT FOR YOU
				</h1>

				<p className="font-roboto pt-5 pb-8 text-[14px] text-[#6c6c6c]">
					Emrace our philosophy and discover what true freedom means. We are the
					real Gamechangers. Peace.
				</p>

				<div className="relative rounded-full bg-[#1E2C33] px-3 py-5">
					<input
						type="range"
						value={sliderValue}
						onChange={handleUpdateSliderPosition}
						onMouseUp={handleReleaseSlider}
						onTouchEnd={handleReleaseSlider}
						min={sliderStartPoint}
						max={sliderEndPoint}
						className="opacity-full custom-input-range-thumb absolute top-0 left-0 z-2 h-full w-full cursor-pointer appearance-none opacity-0"
					/>

					<button
						className="font-roboto absolute top-[50%] left-0 z-1 w-[165px] translate-y-[-50%] rounded-full bg-white py-3 font-medium text-[#111A1B] transition-all"
						style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
					>
						CHECK THIS OUT
					</button>

					<div className="flex items-center justify-end">
						{[0, 1, 2].map((index) => (
							<IoIosArrowForward
								key={index}
								size={24}
								className="animate-pulse text-white"
								style={{
									animationDelay: `${index * 200}ms`,
									color: ['#57666C', '#8C9BA1', '#FFFFFF'][index],
								}}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
