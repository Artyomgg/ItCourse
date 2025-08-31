import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import PencilLoader from '../components/PencilLoader'
function Home() {
		const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

	useEffect(() => {
		document.title = 'Главная | IT-COURSE'
	}, [])
	return (
		<>
			{/* <head>
				<title>Главная | IT Course</title>
				<meta name='description' content='Главная страница' />
			</head> */}
			{/* <Helmet>
				<title>Главная | IT Course</title>
				<meta name='description' content='Главная страница' />
			</Helmet> */}

			<section id='hello'>
				<div className='block-help-color'>
					<h1>Сделай первый шаг в IT!</h1>
					<h2>Практические курсы для всех</h2>
					<Link className='fancy' to='courses'>
						<span className='top-key' />
						<span className='text'>Начать обучение</span>
						<span className='bottom-key-1' />
						<span className='bottom-key-2' />
					</Link>
				</div>
			</section>

			{isLoading == true ? <PencilLoader/> : 
				<section id='courses'>
					<h2>Самые популярные курсы на нашей платформе 🔥</h2>
					<div className='card-conteiner conteiner-with-anim'>
						<div className='card big'>
							<img src='\img\course\icons8-внешний-курс-информатика-плоские-значки-плоские-плоские-значки-64.png' alt='JavaScript' />
							<h2>Курсы по информатике в школе</h2>
							<div className='desc'>
								<h4>Здесь мы изучим:</h4>
								<ol>
									<li>Всю школьную программу по информатике</li>
									{/* <li>Работа с DOM</li> */}
								</ol>
								<h4 style={{ marginTop: '5px' }}>
									Школьная программа
								</h4>
								<h4 style={{ marginTop: '5px' }}>
									Здесь мы изучаем информатику с 6 по 8 класс
								</h4>
							</div>
							<Link to='/courses/forschool' className='a-btn'>
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
							<Link to='/courses/python' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>
						<div className='card big'>
							<img src='/img/course/icons8-javascript-48.png' alt='JavaScript' />
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
							<Link to='/courses/js' className='a-btn'>
								<div className='btn'>Начать обучение</div>
							</Link>
						</div>
					</div>
				</section>
			}

			
			{/* <div
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
			</div> */}
			{/* <div className='splash-screen'>
				<img
					alt=''
					src='/IT-COURSE (1).png'
				/>
			</div> */}
		</>
	)
}

export default Home
