import { faker } from '@faker-js/faker'
import { PiBell } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { Filters } from './Filters'

import userLogo from '../assets/memes/skebob.png'
import posingImage from '/cloth/posing-img.png'
import { StoreItems } from './StoreItems'

const Store = () => {
	const navigateTo = useNavigate()

	const username = faker.person.fullName()

	const handleRedirect = () => {
		navigateTo('/')
	}

	const handleRedirectLogin = () => {
		navigateTo('/store/login')
	}

	return (
		<section className="px-4 pt-30 pb-15">
			{/* Top Bar with user profile */}
			<div className="top-bar flex items-center justify-between">
				<div className="user flex items-center" onClick={handleRedirect}>
					<img src={userLogo} alt="user-logo" className="w-15 rounded-full" />

					<article className="ml-3">
						<p className="font-roboto text-[14px] text-[#9c9c9c]">
							Welcome back
						</p>
						<h2 className="font-bebas text-3xl tracking-wide">{username}</h2>
					</article>
				</div>

				<div className="notofications rounded-full bg-[#F3F3F3] p-4">
					<PiBell size={25} />
				</div>
			</div>

			{/* Discount Banner */}
			<div className="sale rounded- relative mt-8 w-full rounded-3xl bg-[#33373a] px-4 py-5">
				<article className="relative">
					<p className="font-bebas text-3xl tracking-wider text-white">
						GET YOUR CHANCE <br />{' '}
						<span className="text-4xl">
							UP TO <span className="text-6xl">33%</span>
						</span>
					</p>

					<button
						className="mt-4 rounded-full bg-white px-3 py-2 font-medium"
						onClick={handleRedirectLogin}
					>
						CHANGE THE GAME
					</button>
				</article>

				<img
					src={posingImage}
					alt="posing-image"
					className="absolute right-1 bottom-0 w-47"
				/>
			</div>

			{/* Filters */}
			<div>
				<Filters />
			</div>

			{/* Cards with T-Shirts */}
			<div className="mt-5">
				<article className="flex items-center justify-between">
					<h4 className="font-bebas text-2xl tracking-wider">
						POPULAR PRODUCTS
					</h4>
					<button className="font-roboto text-[14px] text-[#9c9c9c]">
						View All
					</button>
				</article>

				<div className="">
					<StoreItems />
				</div>
			</div>
		</section>
	)
}

export default Store
