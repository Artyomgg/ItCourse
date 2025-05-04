import React from 'react'
import { Link } from 'react-router'

function Nine() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					Всплывающие окна (alert, prompt, confirm)
				</h1>
				<p>
					В языке JavaScript есть несколько встроенных функций, что обеспечивают
					создание всплывающих окон. За урок мы рассмотрим три функции, что
					предоставляют возможность реализации всплывающих окон с разным набором
					действий. Мы изучим методы: alert, confirm и prompt.
				</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/UCSuoEJ50G8?si=wJ0kU3RbWwgNGTEv'
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
					Для работы с пользователем в JavaScript предусмотрено несколько
					интерактивных функций:
				</p>
				<ul>
					<li>
						функция <code>alert()</code> позволяет выводить информацию во
						всплывающем окне;
					</li>
					<li>
						функция <code>confirm()</code> позволяет спрашивать соглашение во
						всплывающем окне;
					</li>
					<li>
						функция <code>prompt()</code> получает данные от пользователя во
						всплывающем окне.
					</li>
				</ul>
				<p>
					Функция <b>alert</b> позволяет вывести какую-либо информацию во
					всплывающем окне в браузере. К таким окнам нельзя добавить стили и
					разукрасить их.
				</p>
				<div className='block-code'>
					<img src='/img/course/js-img/Screenshot_19.png' alt='' />
				</div>
				<button
					className='btn1 red'
					onClick={() => alert('Просто вывод информации')}
				>
					Тест функции alert
				</button>
				<p>
					Такое всплывающее окно очень удобно, так как оно позволяет быстро и
					наглядно вывести нужную информацию для пользователя.
					<br />
					<br />
					Функция confirm открывает всплывающее окно с определенным вопросом и
					двумя кнопками: Ок и Отмена. Полученные данные из окна можно проверить
					в условном операторе и в зависимости от них выполнить код.
					<br />
					<br />
					Пример вызова окна:
				</p>
				<div className='block-code'>
					<img src='/img/course/js-img/Screenshot_20.png' alt='' />
				</div>
				<button
					className='btn1 red'
					onClick={() => confirm('Вы согласны с confirm?')}
				>
					Тест функции confirm
				</button>
				<p>
					Из минусов функции можно выделить не всегда красивый и подходящий
					дизайн всплывающего окна. К нему нельзя добавить стили CSS, а значит и
					«придать вид» не получиться.
					<br />
					<br />
					Метод <b>prompt</b> получает информацию от пользователя. Полученные
					данные можно поместить в переменную. <br />
					<br />
					Пример использования:
				</p>
				<div className='block-code'>
					<img src='/img/course/js-img/Screenshot_21.png' alt='' />
				</div>
				<button
					className='btn1 red'
					onClick={() => prompt('Сколько вам лет?', 25)}
				>
					Тест функции prompt
				</button>
				<p>
					В примере данные будут помещены в переменную <code>info</code>. После
					получения данных с ними можно работать как с обычной переменной.
				</p>
			</div>
		</>
	)
}

export default Nine
