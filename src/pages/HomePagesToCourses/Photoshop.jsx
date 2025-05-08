import React from 'react'

function Photoshop(props) {
	return (
		<>
			<head>
				<title>Курс по Photoshop | IT Course</title>
				<meta name='description' content='Курс по Photoshop' />
			</head>
			<h1 style={{ textAlign: 'center' }}>Photoshop</h1>
			<div className='home-of-course'>
				<h2>Photoshop для начинающих</h2>
				<h3>Видео урок по Photoshop</h3>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/VWhTpajlcaM?si=S4HXR8N33zkubn58'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerPolicy='strict-origin-when-cross-origin'
					allowFullScreen
				></iframe>
				<p>Коллаборация с Максом Куратовым</p>
			</div>
		</>
	)
}

export default Photoshop
