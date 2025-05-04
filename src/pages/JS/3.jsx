import React from 'react'
import { Link } from 'react-router'

function Three() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					Вывод информации. Работа с консолью
				</h1>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/WLsFBu_15Hw?si=krYjBub5JQbzCRzH'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
				<h2>Вывод на экран</h2>
				<p>
					Для вывода информации существует несколько специальных методов...
					<code>document.write("Вывод информации");</code>
				</p>
			</div>
		</>
	)
}

export default Three
