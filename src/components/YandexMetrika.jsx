import { useEffect } from 'react'
import { useLocation } from 'react-router'

const YandexMetrika = () => {
	const location = useLocation()

	useEffect(() => {
		// Инициализация Яндекс.Метрики
		if (!window.ym) {
			;(function (m, e, t, r, i, k, a) {
				m[i] =
					m[i] ||
					function () {
						;(m[i].a = m[i].a || []).push(arguments)
					}
				m[i].l = 1 * new Date()
				for (var j = 0; j < document.scripts.length; j++) {
					if (document.scripts[j].src === r) {
						return
					}
				}
				;(k = e.createElement(t)),
					(a = e.getElementsByTagName(t)[0]),
					(k.async = 1),
					(k.src = r),
					a.parentNode.insertBefore(k, a)
			})(
				window,
				document,
				'script',
				'https://mc.yandex.ru/metrika/tag.js',
				'ym'
			)

			ym(104386082, 'init', {
				ssr: true,
				webvisor: true,
				clickmap: true,
				ecommerce: 'dataLayer',
				accurateTrackBounce: true,
				trackLinks: true,
			})
		}
	}, [])

	useEffect(() => {
		// Отслеживание смены страниц в SPA
		if (window.ym) {
			ym(104386082, 'hit', window.location.href, {
				title: document.title,
			})
		}
	}, [location])

	return (
		<noscript>
			<div>
				<img
					src='https://mc.yandex.ru/watch/104386082'
					style={{ position: 'absolute', left: '-9999px' }}
					alt=''
				/>
			</div>
		</noscript>
	)
}

export default YandexMetrika
