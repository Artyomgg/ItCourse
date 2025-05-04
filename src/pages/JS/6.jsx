import React from 'react'
import { Link } from 'react-router'

function Six() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					Условные операторы в языке JavaScript
				</h1>
				<p>Условные конструкции позволяют проверить некое выражение...</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/TE0S9G3C4vU?si=wP1AysCPzBLr1Wlb'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
				<p>
					Условные операторы очень важны, ведь они позволяют выполнять разный
					код...
				</p>
				<div className='block-code'>
					<img
						src='/src/assets/img/course/js-img/Screenshot_6.png'
						alt='Пример кода if-else'
					/>
				</div>
				<div className='block-code'>
					<img
						src='/src/assets/img/course/js-img/Screenshot_7.png'
						alt='Пример логических операторов'
					/>
				</div>
				<div className='block-code'>
					<img
						src='/src/assets/img/course/js-img/Screenshot_8.png'
						alt='Пример switch-case'
					/>
				</div>
				<div className='block-code'>
					<img
						src='/img/course/js-img/Screenshot_10.png'
						alt='Пример тернарного оператора'
					/>
				</div>
			</div>
		</>
	)
}

export default Six
