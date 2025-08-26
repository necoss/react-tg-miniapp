import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'

import carouselFirstShirt from '/cloth/shirts/walk-by-faith-concept.png'
import carouselSecondShirt from '/cloth/shirts/salvation-concept.png'
import carouselThirdShirt from '/cloth/shirts/embrace-lord-concept.png'
import carouselFourthShirt from '/cloth/shirts/represent-concept.png'

export const ShowcaseCarousel = () => {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 4000 }),
		Fade(),
	])

	return (
		<div className="embla">
			<div className="embla__viewport overflow-hidden" ref={emblaRef}>
				<div className="embla__container flex">
					<div className="embla__slide min-w-full">
						<img src={carouselFirstShirt} alt="First T-shirt" />
					</div>

					<div className="embla__slide min-w-full">
						<img src={carouselThirdShirt} alt="Third T-shirt" />
					</div>

					<div className="embla__slide min-w-full">
						<img src={carouselSecondShirt} alt="Second T-shirt" />
					</div>

					<div className="embla__slide min-w-full">
						<img src={carouselFourthShirt} alt="Fourth T-shirt" />
					</div>
				</div>
			</div>
		</div>
	)
}
