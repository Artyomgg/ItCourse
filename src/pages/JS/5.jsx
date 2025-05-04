import React from 'react'
import { Link } from 'react-router'

function Five() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					Математические действия. Класс Math в JavaScript
				</h1>
				<p>
					В языке JavaScript есть специальные конструкции для выполнения
					математических действий...
				</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/tPjVEiOvgwE?si=4UJIS7HrCTKBvh4a'
						title='YouTube video player'
						FrameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
				<p>
					В <b>JavaScript</b> можно выполнять все математические операции...
					<code>z = y - x</code>
				</p>
			</div>
		</>
	)
}

export default Five
