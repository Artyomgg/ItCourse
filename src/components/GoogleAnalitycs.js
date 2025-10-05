// GoogleAnalytics.js
import { useEffect } from 'react'
import { useLocation } from 'react-router'

const GoogleAnalytics = () => {
	const location = useLocation()

	useEffect(() => {
		// Инициализация только в продакшене
		if (window.location.hostname === 'localhost') {
			console.log('GA: Пропускаем инициализацию на localhost')
			return
		}

		const initializeGtag = () => {
			if (window.gtag) return

			const script = document.createElement('script')
			script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KGX57SDWKL'
			script.async = true

			script.onerror = () => {
				console.error('GA: Ошибка загрузки gtag.js')
			}

			document.head.appendChild(script)

			window.dataLayer = window.dataLayer || []
			function gtag() {
				dataLayer.push(arguments)
			}
			window.gtag = gtag

			gtag('js', new Date())

			// Конфигурация с обработкой ошибок
			try {
				gtag('config', 'G-KGX57SDWKL', {
					page_location: window.location.href,
					send_page_view: false,
				})
			} catch (error) {
				console.error('GA: Ошибка конфигурации', error)
			}
		}

		initializeGtag()
	}, [])

	useEffect(() => {
		// Только для продакшена
		if (window.location.hostname === 'localhost') {
			console.log('GA: Пропускаем отслеживание на localhost', location.pathname)
			return
		}

		if (window.gtag) {
			try {
				window.gtag('event', 'page_view', {
					page_title: document.title,
					page_location: window.location.href,
					page_path: location.pathname + location.search,
				})
			} catch (error) {
				console.error('GA: Ошибка отправки page_view', error)
			}
		}
	}, [location])

	return null
}

export default GoogleAnalytics
