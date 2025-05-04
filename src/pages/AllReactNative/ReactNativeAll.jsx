import React from 'react'
import { Link } from 'react-router'

function ReactNativeAll(props) {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/reactnative'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>

				<section id='start'></section>
				<h1 style={{ textAlign: 'center' }}>Все уроки React Native</h1>

				<main>
					<h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Уроки:</h2>
					<ul>
						<li>
							<a href='#one'>
								Разработка мобильного приложения на JavaScript
							</a>
						</li>
						<li>
							<a href='#two'>Создание проекта. Запуск на Андроид и iOS</a>
						</li>
						<li>
							<a href='#three'>
								Основные компоненты (View, Text, Button, Alert, Image)
							</a>
						</li>
						<li>
							<a href='#four'>Написание стилей для приложения</a>
						</li>
						<li>
							<a href='#five'>Создание списка дел (Todo List)</a>
						</li>
						<li>
							<a href='#six'>Новостное приложение. Старт разработки</a>
						</li>
						<li>
							<a href='#seven'>Навигация внутри проекта</a>
						</li>
						<li>
							<a href='#eight'>Добавление дизайна к приложению</a>
						</li>
						<li>
							<a href='#nine'>Модальные окна и векторные иконки</a>
						</li>
						<li>
							<a href='#ten'>Форма для добавление записи</a>
						</li>
						<li>
							<a href='#eleven'>Завершение курса</a>
						</li>
					</ul>
				</main>

				<section id='one'>
					<h2>Разработка мобильного приложения на JavaScript</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/j9nVVIq9eSQ'
							title='Изучение React Native / Урок #1 – Разработка мобильного приложения на JavaScript'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='two'>
					<h2>Создание проекта. Запуск на Андроид и iOS</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/YjuaFefiQe4'
							title='Изучение React Native / Урок #2 – Создание проекта. Запуск на Андроид и iOS'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='three'>
					<h2>Основные компоненты (View, Text, Button, Alert, Image)</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/2d_pn5oKrRg'
							title='Изучение React Native / Урок #3 – Основные компоненты (View, Text, Button, Alert, Image)'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='four'>
					<h2>Написание стилей для приложения</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/Q338MkfbBEQ'
							title='Изучение React Native / Урок #4 – Написание стилей для приложения'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='five'>
					<h2>Создание списка дел (Todo List)</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/hfSFWNzifp4'
							title='Изучение React Native / Урок #5 – Создание списка дел (Todo List)'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='six'>
					<h2>Новостное приложение. Старт разработки</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/t7rzCbRBqLU'
							title='Изучение React Native / Урок #6 – Новостное приложение. Старт разработки'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='seven'>
					<h2>Навигация внутри проекта</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/D8TMiiN1d8k'
							title='Изучение React Native / Урок #7 – Навигация внутри проекта'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='eight'>
					<h2>Добавление дизайна к приложению</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/cQpYw4tCo1k'
							title='Изучение React Native / Урок #8 – Добавление дизайна к приложению'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='nine'>
					<h2>Модальные окна и векторные иконки</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/PaFr6_rFWZM'
							title='Изучение React Native / Урок #9 – Модальные окна и векторные иконки'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='ten'>
					<h2>Форма для добавление записи</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/qyEKLzRtQAc'
							title='Изучение React Native / Урок #10 – Форма для добавление записи'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<section id='eleven'>
					<h2>Завершение курса</h2>
					<div className='block-video'>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/wDsimwoMhIk'
							title='Изучение React Native / Урок #11 – Завершение курса'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerPolicy='strict-origin-when-cross-origin'
							allowFullScreen
						></iframe>
					</div>
				</section>

				<p>Коллаборация с it-progger</p>

				<a href='#start'>
					<div className='strelka'>
						<i className='bx bx-up-arrow-alt'></i>
					</div>
				</a>
			</div>
		</>
	)
}

export default ReactNativeAll
