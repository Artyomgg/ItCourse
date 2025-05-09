import React from 'react'
import { Link } from 'react-router'
import { Tank } from '../../components/Tank'

function AllReact(props) {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/react'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<section id='start'></section>
				<h1 style={{ textAlign: 'center' }}>Полный курс по Rect JS</h1>
				<Tank tankId='7' />
				<div className='block-video'>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/kz23xxukY5s?si=yfXErDu5T4UPuqfI'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
				<p>Коллаборация с Владиленом Мининым</p>
				<Link href='#start'>
					<div className='strelka'>
						<i className='bx bx-up-arrow-alt'></i>
					</div>
				</Link>
			</div>
		</>
	)
}

export default AllReact
