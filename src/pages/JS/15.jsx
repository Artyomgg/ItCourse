import React from 'react'
import { Link } from 'react-router'

function Fifteen() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					Заключительный урок по JavaScript
				</h1>
				<p>
					Мы добрались до заключительного урока по теме JavaScript. В уроке мы
					не будем ничего прописывать, а лишь подведем итоги курса. Мы узнаем
					куда стоит двигаться далее и что стоит теперь изучать.
				</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/QDA_EBJ0iSM?si=dftOyKlj0-_SB6fD'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; 
      autoplay; 
      clipboard-write; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture; 
      web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
			</div>
		</>
	)
}

export default Fifteen
