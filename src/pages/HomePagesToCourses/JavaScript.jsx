import React from 'react'
import { Link } from 'react-router'

function JavaScript(props) {
	return (
		<>
			<div>
				<link
					href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
					rel='stylesheet'
				/>
				<h1 style={{ textAlign: 'center' }}>JavaSript</h1>
				<div className='home-of-course'>
					<h3>Уроки JavaScript для начинающих</h3>
					<img
						src='/public/img/course/js-img/x1476977754.jpg.pagespeed.ic.9i3S0NDgd7.webp'
						alt='JavaScript preview'
						className='preview-img'
					/>
					<p>
						Современный мир веба очень сложно представить без JS. JavaScript –
						это душа веб-сайта, так как все интерактивные действия выполняет JS.
						JavaScript является встроенным компонентом в веб-программировании,
						поэтому его не нужно устанавливать или настраивать.
					</p>
					<h3>План курса</h3>
					<p>
						За курс мы будем изучать Javascript с нуля для начинающих. Начать
						курс js для начинающих нужно с переменных, а далее постепенно
						изучать более сложные конструкции.
					</p>
					<p>
						В ходе изучения javascript (или же Ява скрипт) мы изучим все
						основные концепции, научимся работать с HTML при помощи языка JS, а
						также разработаем несколько мини проектов. К концу курса у вас будет
						достаточно знаний чтобы начать использовать Java Script внутри ваших
						проектов.
					</p>
					<main>
						<h2 style={{ textAlign: 'center' }}>Уроки:</h2>
						<h3>
							<i className='bx bx-right-arrow-alt'></i> Основы JavaScript
						</h3>
						<ul className='one'>
							<li>
								<Link to='1'>Введение в язык JS. Что к чему?</Link>
							</li>
							<li>
								<Link to='2'>
									Основные моменты при работе с JavaScript
								</Link>
							</li>
							<li>
								<Link to='3'>
									Вывод информации. Работа с консолью
								</Link>
							</li>
							<li>
								<Link to='4'>Переменные и типы данных в JS</Link>
							</li>
							<li>
								<Link to='5'>
									Математические действия. Класс Math в JavaScript
								</Link>
							</li>
							<li>
								<Link to='6'>
									Условные операторы в языке JavaScript
								</Link>
							</li>
							<li>
								<Link to='7'>
									Массивы данных. Одномерные и многомерные массивы
								</Link>
							</li>
							<li>
								<Link to='8'>
									Циклы в JavaScript. Операторы циклов
								</Link>
							</li>
							<li>
								<Link to='9'>
									Всплывающие окна (alert, prompt, confirm)
								</Link>
							</li>
							<li>
								<Link to='10'>Функции в языке JavaScript</Link>
							</li>
							<li>
								<Link to='11'>
									События и обработчик событий в JavaScript
								</Link>
							</li>
							<li>
								<Link to='12'>
									Управление HTML и обработка форм при помощи JS
								</Link>
							</li>
							<li>
								<Link to='13'>Создание таймеров и интервалов</Link>
							</li>
							<li>
								<Link to='14'>
									Создание объектов. Встроенные функции
								</Link>
							</li>
							<li>
								<Link to='15'>
									Заключительный урок по JavaScript
								</Link>
							</li>
						</ul>
					</main>
					<p>Коллаборация с it-progger</p>
					<h2>Задание</h2>
					<p>
						Используя работу с DOM реализовать веб страничку "VISA":
						<br />
						<br />
						<b>
							ВАЖНЫЕ МОМЕНТЫ: 1. Обязательно использование JavaScript.
							<br />
							2. Возможно могут пригодиться следующие CSS свойства:
							<br />
							perspective: 1000px;
							<br />
							transform: rotateY();
							<br />
							backspace-visibility: hidden;
							<br />
							filter:blur(5px);
						</b>
						<br />
						<br />
						<b>За задание 300xp и медаль - Мастер JavaScript</b>
					</p>
				</div>
			</div>
		</>
	)
}

export default JavaScript
