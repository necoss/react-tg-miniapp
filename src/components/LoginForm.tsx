import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

type Inputs = {
	login: string
	password: string
}

export const LoginForm = () => {
	const [currentDate, setCurrentDate] = useState<dayjs.Dayjs>(dayjs)
	const navigateTo = useNavigate()

	const handleRedirectBack = () => {
		navigateTo(-1)
	}

	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	// console.log(watch('login'))

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentDate(dayjs())
		}, 1000)

		return () => clearTimeout(timer)
	}, [currentDate])

	return (
		<section className="">
			<p className="absolute top-0 left-[50%] translate-x-[-50%]">
				Current Date: <br />
				{currentDate.format('YYYY-MM-DD HH:mm:ss')}
			</p>

			<form
				className="flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-3 px-4 pt-30 pb-15"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					className="border- w-80 border-1"
					type="text"
					placeholder="Login"
					{...register('login', { required: true })}
				/>
				<input
					className="w-80 border-1 border-[#33373a]"
					type="text"
					placeholder="Password"
					{...register('password', { required: true })}
				/>

				{errors.password && <span>This field is required</span>}

				<button className="w-80 bg-[#33373a] text-white">Login</button>

				<button className="absolute top-0 left-0" onClick={handleRedirectBack}>
					go back{' '}
				</button>
			</form>
		</section>
	)
}
