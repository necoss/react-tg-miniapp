import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { init, miniApp, viewport } from '@telegram-apps/sdk'

const initializeTelegramSDK = async () => {
	try {
		await init()

		if (miniApp.ready.isAvailable()) {
			await miniApp.ready()
			console.log('Mini app is ready')
		}
		if (viewport.mount.isAvailable()) {
			await viewport.mount()
			viewport.expand()
		}

		if (viewport.requestFullscreen.isAvailable()) {
			await viewport.requestFullscreen()
		}
	} catch (error) {
		console.error('Something went wrong: ', error)
	}
}

initializeTelegramSDK()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
