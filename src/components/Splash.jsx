import React, {useState, useEffect } from 'react'

function Splash(props) {
	const [showSplash, setShowSplash] = useState(true)

	useEffect(() => {
		const isFirstVisit = sessionStorage.getItem('isFirstVisit') === null

		if (isFirstVisit) {
			sessionStorage.setItem('isFirstVisit', 'false')
		} else {
			// Показываем splash screen только 3 секунды при повторных посещениях
			const timer = setTimeout(() => {
				setShowSplash(false)
			}, 3000)
			return () => clearTimeout(timer)
		}
	}, [])

	const handleAnimationEnd = () => {
		if (sessionStorage.getItem('isFirstVisit') !== null) {
			setShowSplash(false)
		}
	}
	return (
		<>
			{showSplash && (
				<div className='splash-screen' onAnimationEnd={handleAnimationEnd}>
					<img alt='IT Course Logo' src='/IT-COURSE (1).png' />
				</div>
			)}
		</>
	)
}

export default Splash
