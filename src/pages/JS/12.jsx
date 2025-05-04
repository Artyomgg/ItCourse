import React from 'react'
import { Link } from 'react-router'

function Twelve() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					Управление HTML и обработка форм при помощи JS
				</h1>
				<p>
					JavaScript с легкостью позволяет обрабатывать HTML формы на сайте. За
					урок мы научимся работать с HTML объектами, а также создадим веб форму
					и научимся получать из нее данные. Полученные данные будут проходить
					валидацию.
				</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/1nzH6WCEonQ?si=plsOH7AAtv6XmCBd'
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
					JavaScript позволяет удобно и быстро проверять HTML-формы на их
					валидность. <br />
					<br />
					Можно использовать атрибут «onclick» для кнопки отправки или же
					«onsubmit» для тега form. Внутри функции необходимо находить все поля
					и брать данные из них.
					<br /> <br />
					Для нахождения полей можно использовать их идентификаторы:
				</p>
				<div className='block-code'>
					<img src='/public/img/course/js-img/Screenshot_28.png' alt='' />
				</div>
				<p>
					При помощи условий вы можете проверять все поля и в случае их
					корректности перенаправлять пользователя куда-либо на другую страницу
					или отправлять данные на сервер.
				</p>
			</div>
		</>
	)
}

export default Twelve
