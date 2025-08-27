import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
	login: string
	password: string
}

export const LoginForm = () => {
	const navigateTo = useNavigate()

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	console.log(watch('login'))

	const handleRedirectBack = () => {
		navigateTo(-1)
	}

	return (
		<section className="">
			<form
				className="flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-3 px-4 pt-30 pb-15"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					className="w-80"
					type="text"
					placeholder="Login"
					{...register('login', { required: true })}
				/>
				<input
					className="w-80"
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
