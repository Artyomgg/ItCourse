import React from 'react'
import { Link } from 'react-router'

function Eight() {
	return (
		<>
			<div className='conteiner'>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>
				<h1 style={{ textAlign: 'center' }}>
					Циклы в JavaScript. Операторы циклов
				</h1>
				<p>
					За счет циклов вы можете создавать код, что будет циклично выполнен
					определенное количество раз. Мы в уроке рассмотрим создание циклов в
					языке JavaScript. Мы изучим циклы: for, while и do while.
					Дополнительно нами будут изучены операторы для циклов.
				</p>
				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/H39s52IW3bk?si=a9HMurJ5JIUkoVgn'
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
					В языке <b>JavaScript</b>, как и в большинстве других языков,
					существует 3 основных вида циклов. Каждый из них выполняет одну и ту
					же роль, но записывается по-разному. Рассмотрим все три цикла.
				</p>
				<h2>Цикл For</h2>
				<p>
					В цикле <code>for</code> все условия записываются в одном месте, что
					очень удобно во многих случаях. Стандартная запись такого цикла
					выглядит следующим образом:
				</p>
				<div className='block-code'>
					<img src='/img/course/js-img/Screenshot_15.png' alt='' />
				</div>
				<p>
					В объявлении цикла записывается следующее: переменная цикла, её
					начальное значение и диапазон. В примере выше будут выведены числа от
					0 до 10. <br />
					<br />
					Если в теле цикла всего одна строка кода, то фигурные скобки можно
					пропустить и не записывать их.
				</p>
				<h2>Цикл While</h2>
				<p>
					Суть цикла <code>while</code> не особо отличается от цикла
					<code>for</code>. Единственное отличие заключается в способе записи
					цикла. В while необходимо прописать лишь условие, а все остальные
					параметры записываются вне цикла:
				</p>
				<div className='block-code'>
					<img src='/img/course/js-img/Screenshot_17.png' alt='' />
				</div>
				<h2>Цикл Do While</h2>
				<p>
					Цикл схож с циклом <code>while</code> по форме написания, но при этом
					работает немного по-другому. Цикл <b>do..while</b> будет выполнен один
					раз сто процентов, а дальше проверит условие и если оно верно, то цикл
					будет выполняться дальше:
				</p>
				<div className='block-code'>
					<img src='/img/course/js-img/Screenshot_18.png' alt='' />
				</div>
				<p>
					Как видно из примера, цикл изначально неверный, но это не мешает ему
					сработать один раз.
				</p>
				<h2>Операторы для работы в циклах</h2>
				<p>Существует три основных оператора для работы в циклах:</p>
				<ul>
					<li>
						Оператор <code>break</code> - служит для выхода из цикла полностью;
					</li>
					<li>
						Оператор <code>continue</code> - пропускает лишь одну итерацию и не
						выходит из цикла.
					</li>
				</ul>
			</div>
		</>
	)
}

export default Eight
