import { Link } from 'react-router'
import { Tank } from '../components/Tank'

function Home() {
	return (
		<>
			<head>
				<title>Главная | IT Course</title>
				<meta name='description' content='Главная страница' />
			</head>
			<section id='hello'>
				<div className='block-help-color'>
					<h1>Изучай HTML, CSS, JS и Python с нуля!</h1>
					<h2>Практические курсы для начинающих</h2>
					<Link className='fancy' to='courses'>
						<span className='top-key' />
						<span className='text'>Начать обучение</span>
						<span className='bottom-key-1' />
						<span className='bottom-key-2' />
					</Link>
					<br />
					<a className='fancy' href='https://artyomgg.github.io/Donwload-page/'>
						<span className='top-key' />
						<span className='text'>Скачать наше приложение (для Android)</span>
						<span className='bottom-key-1' />
						<span className='bottom-key-2' />
					</a>
				</div>
			</section>
			<div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
				<iframe
					style={{ margin: '0 auto' }}
					width='560'
					height='315'
					src='https://www.youtube.com/embed/hMrFFVY3NYM?si=89tVgJix-1TyCNP6'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					referrerpolicy='strict-origin-when-cross-origin'
					allowfullscreen
				></iframe>
			</div>
			<section id='courses'>
				<h2>Самые популярные курсы на нашей платформе 🔥</h2>
				<div className='card-conteiner'>
					<div className='card not-big'>
						<img alt='' src='/img/course/icons8-питон.gif' />
						<h2>Курс Python-kids</h2>
						<div className='desc'>
							<h4>Здесь мы изучим:</h4>
							<ol>
								<li>Основы Python</li>
							</ol>
							<h4
								style={{
									marginTop: '5px',
								}}
							>
								Особенность курса: Видео-курс
							</h4>
							<h5>Сложность: ★</h5>
						</div>
						<a className='a-btn' href='https://it-course-k.vercel.app/'>
							<div className='btn'>Начать обучение</div>
						</a>
					</div>
					<div className='card not-big'>
						<img alt='' src='/img/course/icons8-питон.gif' />
						<h2>Курс по Python</h2>
						<div className='desc'>
							<h4>Здесь мы изучим:</h4>
							<ol>
								<li>Основы Python</li>
							</ol>
							<h4
								style={{
									marginTop: '5px',
								}}
							>
								Подходит для новичков и более опытных
							</h4>
							<h4
								style={{
									marginTop: '5px',
								}}
							>
								Особенность курса: Видео-курс
							</h4>
							<h5>Сложность: ★ ★ ★</h5>
						</div>
						<Link className='a-btn' to='courses/python'>
							<div className='btn'>Начать обучение</div>
						</Link>
					</div>
					<div className='card big'>
						<img alt='' src='/img/course/icons8-javascript.gif' />
						<h2>Курс по JS</h2>
						<div className='desc'>
							<h4>Здесь мы изучим:</h4>
							<ol>
								<li>Основы JavaScript</li>
								<li>Работа с DOM</li>
							</ol>
							<h4
								style={{
									marginTop: '5px',
								}}
							>
								Подходит для новичков и более опытных
							</h4>
							<h4
								style={{
									marginTop: '5px',
								}}
							>
								Особенность курса: Надо знать HTML и CSS
							</h4>
							<h5>Сложность: ★ ★ ★</h5>
						</div>
						<Link className='a-btn' to='courses/js'>
							<div className='btn'>Начать обучение</div>
						</Link>
					</div>
					<div className='card'>
						<img alt='' src='/img/course/icons8-html.gif' />
						<h2>Курс по HTML</h2>
						<div className='desc'>
							<h4>Здесь мы изучим:</h4>
							<ol>
								<li>Основы HTML</li>
							</ol>
							<h4
								style={{
									marginTop: '5px',
								}}
							>
								Подходит для новичков
							</h4>
							<h4
								style={{
									marginTop: '5px',
								}}
							>
								Особенность курса: Видео-курс
							</h4>
							<h5>Сложность: ★</h5>
						</div>
						<Link className='a-btn' to='courses/html'>
							<div className='btn'>Начать обучение</div>
						</Link>
					</div>
				</div>
			</section>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					marginTop: '20px',
				}}
			>
				<iframe
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
					height='315'
					referrerPolicy='strict-origin-when-cross-origin'
					src='https://www.youtube.com/embed/TzRUL9dkIw8?si=VJSqlzhEEmE1hWhI'
					title='YouTube video player'
					width='560'
				/>
				<Tank tankId='1' />
			</div>
			<div className='splash-screen'>
				<img
					alt=''
					src='\assets\free-icon-graduate-5404967withoneelement-DI7Mz8YI.png'
				/>
			</div>
		</>
	)
}

export default Home
