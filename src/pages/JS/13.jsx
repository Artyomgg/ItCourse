import React from 'react'
import { Link } from 'react-router'

function Thirteen() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>Создание таймеров и интервалов</h1>
				<p>
					В языке JavaScript можно вызывать методы для выполнения отложенного
					кода. За урок мы научимся создавать интервалы, а также таймеры в языке
					Js. Нами будут изучены методы «setTimeout» и «setInterval».
				</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/M_4ePNcric0?si=rwBKxI0Jdq4OplMS'
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
				<p>
					В <b> JavaScript </b> есть две функции, которые позволяют вызывать
					другие функции через определенное количество времени.
				</p>
				<h2>Использование интервалов</h2>
				<p>
					Интервалы записываются через метод <code>setInterval()</code>.
					Отличительная черта интервалов от таймеров заключается в способе
					вызова функции. Интервалы вызывают функцию постоянно через
					определенное количество секунд. Таймер вызывает функцию всего один
					раз, после чего прекращает свою работу.
					<br /> <br />
					Для создания интервалов используйте конструкцию:
				</p>
				<div className='block-code'>
					<img src='/public/img/course/js-img/Screenshot_29.png' alt='' />
				</div>
				<p>
					Чтобы остановить интервал его необходимо записать в переменную, после
					чего очистить данные:
				</p>
				<div className='block-code'>
					<img src='/public/img/course/js-img/Screenshot_30.png' alt='' />
				</div>
				<h2>Использование таймеров</h2>
				<p>
					Здесь схожая структура, только вот таймер не нужно очищать, так как
					они срабатывают лишь один раз:
				</p>
				<div className='block-code'>
					<img src='/public/img/course/js-img/Screenshot_31.png' alt='' />
				</div>
				<p>
					За счёт этих функций вы можете откладывать выполнение других функций
					на определенное количество времени.
				</p>
			</div>
		</>
	)
}

export default Thirteen
