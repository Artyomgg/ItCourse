import React from 'react'
import { Link } from 'react-router'

function CSSALL(props) {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/css'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<section id='start'></section>
				<h1 style={{ textAlign: 'center' }}>Все уроки CSS</h1>
				<main>
					<h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Уроки:</h2>
					<ul>
						<li>
							<a href='#one'>Введение в CSS. Что это и как с ним работать?</a>
						</li>
						<li>
							<a href='#two'>Форматы подключения стилей</a>
						</li>
						<li>
							<a href='#three'>Селекторы для выборки элементов</a>
						</li>
						<li>
							<a href='#four'>Псевдоклассы и псевдоэлементы</a>
						</li>
						<li>
							<a href='#five'>Работа с фоновыми картинками</a>
						</li>
						<li>
							<a href='#six'>Стили для текста</a>
						</li>
						<li>
							<a href='#seven'>Стили для блоков</a>
						</li>
						<li>
							<a href='#eight'>Позиционирование блоков</a>
						</li>
						<li>
							<a href='#nine'>Работа со списками</a>
						</li>
						<li>
							<a href='#ten'>Заключительная часть</a>
						</li>
					</ul>
				</main>

				<section id='one'>
					<h2>Введение в CSS. Что это и как с ним работать?</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/hft4XYApT44?si=yUeYzFp9uvjV7t-m'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='two'>
					<h2>Форматы подключения стилей</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/DX9ITfNVM7I?si=mFIe6qsIgqVisCpC'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='three'>
					<h2>Селекторы для выборки элементов</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/LQxx5Z9XEdM?si=VbYWcFE4R6fDD1fF'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='four'>
					<h2>Псевдоклассы и псевдоэлементы</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/nZHrCDJEnw4?si=Fefk_Bt3eMxY3l6Y'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='five'>
					<h2>Работа с фоновыми картинками</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/k2XTkIW9Y0I?si=Wl0kj-VUKgCuF8iY'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='six'>
					<h2>Стили для текста</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/B4x380VocnQ?si=GHc6IdMCRrQEB9Ys'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='seven'>
					<h2>Стили для блоков</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/EjCTUncWviU?si=WOXVa_ekMdh-kCnp'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='eight'>
					<h2>Позиционирование блоков</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/cVeFNl3Jz8I?si=sFErgs8wUWrGy8-G'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='nine'>
					<h2>Работа со списками</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/zy4yzUjpnvA?si=P1teZamHIBpW3KfP'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section id='ten'>
					<h2>Заключительная часть</h2>
					<div class='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/KEz9bBJjsHg?si=e7BL1V8ti7yNJhUN'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						></iframe>
					</div>
				</section>

				<p>Коллаборация с it-progger</p>
			</div>
			<a href='#start'>
				<div class='strelka'>
					<i class='bx bx-up-arrow-alt'></i>
				</div>
			</a>
		</>
	)
}

export default CSSALL
