import React from 'react'
import { Link } from 'react-router'

function Eleven() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					События и обработчик событий в JavaScript
				</h1>
				<p>
					Для работы с пользователем вам необходимо научиться обрабатывать его
					действия: нажатия, перемещения, наведение мыши и прочее. За урок мы
					научимся отслеживать действия пользователя и в зависимости от них
					выполнять различный код.
				</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/Tw-_axj7Jis?si=VIgxZEOz5KWmxV5u'
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
					В HTML есть специальные атрибуты для каждого тега, которые способны
					вызвать функцию при определенном действии пользователя. Такие
					обработчики могут срабатывать в определенное событие: нажатие,
					наведение мышки, двойной клик, выбор элемента и так далее.
					<br />
					<br />
					В качестве значения для атрибута можно поместить функцию, которая
					будет вызываться каждый раз при срабатывании события. К примеру, если
					мы хотим вызвать всплывающее окно при двойном клике на текст, то стоит
					записать следующий HTML-код:
					<br />
					<br />
				</p>
				<div className='block-code'>
					<img src='/public/img/course/js-img/Screenshot_26.png' alt='' />
				</div>
				<p>
					При двойном нажатии будет вызываться функция
					<code> testFunction </code>. Осталось лишь добавить саму функцию:
				</p>
				<div className='block-code'>
					<img src='/public/img/course/js-img/Screenshot_27.png' alt='' />
				</div>
				<p>
					Вы также можете передать неограниченное количество параметров в саму
					функцию. Для этого при вызове функции в круглых скобках записывайте
					значения для передачи данных.
				</p>
			</div>
		</>
	)
}

export default Eleven
