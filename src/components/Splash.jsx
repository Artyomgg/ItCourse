import React, {useState, useEffect } from 'react'

function Splash(props) {
	const [showSplash, setShowSplash] = useState(true)

	useEffect(() => {
		const isFirstVisit = sessionStorage.getItem('isFirstVisit') === null

		if (isFirstVisit) {
			sessionStorage.setItem('isFirstVisit', 'false')
		} else {
			return
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
