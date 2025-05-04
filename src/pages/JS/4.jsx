import React from 'react'
import { Link } from 'react-router'

function Four() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>Переменные и типы данных в JS</h1>
				<p>
					Переменные и типы данных – основа любого языка программирования...
				</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/UHqnpHEXtII?si=ttVTTYsKhfPuehmO'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
				<p>
					Переменные невероятно важны, так как позволяют хранить информацию...
					<code>let first_num = 23.2</code>
				</p>
			</div>
		</>
	)
}

export default Four
