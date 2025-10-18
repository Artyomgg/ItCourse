import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import PencilLoader from '../components/PencilLoader'
import { useSEO } from '../hooks/useSeo'

function Courses() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2500)
		return () => clearTimeout(timer)
	}, [])

	useSEO({
		title: 'Курсы программирования | IT-COURSE - Все IT курсы',
		description:
			'Полный каталог курсов программирования: JavaScript, Python, React, Node.js, HTML, CSS и другие. Обучение с нуля до профессионала. Выбери свой курс!',
		keywords:
			'курсы программирования, JavaScript курс, Python обучение, React JS, Node.js, HTML CSS, IT курсы для начинающих, программирование с нуля',
		ogImage: '/icons8-шапка-выпускника-90.png',
	})
	return (
		<>
			{/* <head>
				<title>Курсы | IT Course</title>
				<meta name='description' content='Страница курсов' />
			</head> */}
			{/* <Helmet>
        <title>Курсы | IT Course</title>
        <meta name='description' content='Главная страница' />
      </Helmet> */}
			{isLoading == true ? (
				<PencilLoader />
			) : (
				<section id='courses'>
					<h2>Все курсы</h2>
					<div className='card-conteiner conteiner-with-anim'>
						<div className='card big'>
							<img
								src='/img/course/icons8-javascript-48.png'
								alt='JavaScript'
							/>
							<h2>Курс по JS</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>Основы JavaScript</li>
									<li>Работа с DOM</li>
								</ol>
								<h4 style={{ marginTop: '5px' }}>
									Подходит для новичков и более опытных
								</h4>
								<h4 style={{ marginTop: '5px' }}>
									Особенность курса: Надо знать HTML и CSS
								</h4>
								<h5>Сложность: ★ ★ ★</h5>
							</div>
							<Link to='js' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>
						<div className='card big'>
							<img
								src='\img\course\icons8-внешний-курс-информатика-плоские-значки-плоские-плоские-значки-64.png'
								alt='JavaScript'
							/>
							<h2>Курсы по информатике в школе</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>Всю школьную программу по информатике</li>
									{/* <li>Работа с DOM</li> */}
								</ol>
								<h4 style={{ marginTop: '5px' }}>Школьная программа</h4>
								<h4 style={{ marginTop: '5px' }}>
									Здесь мы изучаем информатику с 6 по 9 класс
								</h4>
							</div>
							<Link to='/courses/forschool' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card big'>
							<img src='/img/course/icons8-node-js-50.png' alt='Node.js' />
							<h2>Курс по NODE JS</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>Основы NODE JS</li>
									<li>
										<b>Фреймворк Express</b>
									</li>
								</ol>
								<h4 style={{ marginTop: '5px' }}>Подходит для более опытных</h4>
								<h4 style={{ marginTop: '5px' }}>
									Особенность курса: Надо знать HTML, CSS и JS
								</h4>
								<h5>Сложность: ★ ★ ★ ★</h5>
							</div>
							<Link to='nodejs' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card big'>
							<img src='/img/course/icons8-react-48.png' alt='React' />
							<h2>Курс по React JS за 4 часа</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>React JS</li>
								</ol>
								<h4 style={{ fontSize: '15px', marginTop: '10px' }}>
									Подходит для более опытных
								</h4>
								<h4 style={{ fontSize: '15px', marginTop: '5px' }}>
									Особенность курса: Надо знать HTML, CSS и JS
								</h4>
								<h5>Сложность: ★ ★ ★ ★</h5>
							</div>
							<Link to='react' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card big'>
							<img
								src='/img/course/icons8-react-native-48.png'
								alt='React Native'
							/>
							<h2>Курс по React Native</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>React Native</li>
								</ol>
								<h4 style={{ marginTop: '5px' }}>Подходит для более опытных</h4>
								<h4 style={{ marginTop: '5px' }}>
									Особенность курса: Надо знать HTML, CSS, JS и базу React JS
								</h4>
								<h5>Сложность: ★ ★ ★ ★</h5>
							</div>
							<Link to='reactnative' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card not-big'>
							<img src='/img/course/icons8-python-64.png' alt='Python' />
							<h2>Курс по Python</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>Основы Python</li>
								</ol>
								<h4 style={{ marginTop: '5px' }}>
									Подходит для новичков и более опытных
								</h4>
								<h4 style={{ marginTop: '5px' }}>
									Особенность курса: Видео-курс
								</h4>
								<h5>Сложность: ★ ★ ★</h5>
							</div>
							<Link to='python' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card'>
							<img src='/img/course/icons8-python-64.png' alt='Python' />
							<h2>Курс Python-kids</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>Основы Python</li>
								</ol>
								<h4 style={{ marginTop: '5px' }}>
									Особенность курса: Видео-курс
								</h4>
								<h5>Сложность: ★</h5>
							</div>
							<Link to='https://it-course-k.vercel.app/' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card'>
							<img src='\img\course\icons8-html-64.png' alt='HTML' />
							<h2>Курс по HTML</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>Основы HTML</li>
								</ol>
								<h4 style={{ marginTop: '5px' }}>Подходит для новичков</h4>
								<h4 style={{ marginTop: '5px' }}>
									Особенность курса: Видео-курс
								</h4>
								<h5>Сложность: ★</h5>
							</div>
							<Link to='html' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card big'>
							<img src='/img/course/icons8-css3-48.png' alt='CSS' />
							<h2>Курс по CSS</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>Изучим основы CSS</li>
								</ol>
								<h4 style={{ marginTop: '5px' }}>Подходит для новичков</h4>
								<h4 style={{ marginTop: '5px' }}>
									Особенность курса: Видео-курс, Надо знать HTML
								</h4>
								<h5>Сложность: ★ ★</h5>
							</div>
							<Link to='css' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card'>
							<img
								src='/img/course/icons8-visual-studio-code-48.png'
								alt='VS Code'
							/>
							<h2>Курс для установке редактора кода VS CODE</h2>
							<div className='desc'>
								<h4>Здесь мы установим VS CODE</h4>
							</div>
							<Link to='vscode' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>

						<div className='card'>
							<img src='\img\course\icons8-photoshop-48.png' alt='Photoshop' />
							<h2>Полный курс по Photoshop</h2>
							<div className='desc'>
								<h4>Здесь мы изучим Photoshop</h4>
							</div>
							<Link to='photoshop' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default Courses
