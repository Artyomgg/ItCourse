import React from 'react'
import { Link } from 'react-router'

function Two() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					Основные моменты при работе с JavaScript
				</h1>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/ujsgFnm2VKw?si=2AFovgrxEuY0wKfS'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
				<p>
					<b>JavaScript</b> – язык, что применяется на стороне клиента. Все
					действия могут происходить без перезагрузки страницы пользователя...
				</p>
			</div>
		</>
	)
}

export default Two
