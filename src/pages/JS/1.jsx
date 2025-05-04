import React from 'react'
import { Link } from 'react-router'



function One() {
	return (
		<>
			<div>
				<Link to='/courses/js'>
					<div className='before'>
						<i className='bx bx-right-arrow-alt'></i>
					</div>
				</Link>

				<div className='block-video'>
					<h2>Видео урок</h2>
					<iframe
						width='560'
						height='315'
						src='https://www.youtube.com/embed/fHl7UyRjOf0?si=zfYMIV2cEAxLoyhO'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>

				<div className='conteiner'>
					<h2>История языка</h2>
					<p>
						Язык основан в 1995 году компанией Netscape. Изначально
						предназначался в роли языка сценариев для их браузера Navigator 2. В
						начале пути носил название LiveScript. Разработчики воспользовались
						волной популярность Java и сменили название на JavaScript.
						<br />
						<br />
						Такое решение запутало многих и даже по сей день их часто путают
						начинающие разработчики. Многие заявляют, что это одинаковые языки
						или имеют малозначимые отличия. Это совсем не так, JS и Java -
						совсем разные языки. Единственная схожесть в них - название.
						<br />
						<br />
						Изначально JS не имел большинства из сегодня доступных функций, его
						возможности были крайне скудными. Главной целью являлось лишь
						добавление небольшого интерактива странице. Разработчики хотели,
						чтобы результаты после нажатий на кнопки обрабатывались в пределах
						одной страницы.
						<br />
						<br />
						По мере развития веба, вместе с релизом Node.js, JavaScript получил
						карт-бланш на активное развитие множества функций. Сегодня JS
						предоставляет намного больше возможностей для разработчика, чем
						когда-либо.
						<br />
						<br />
						Сейчас JavaScript может использоваться и в качестве серверного
						языка. Прежде JS всегда рассматривался исключительно в качестве
						клиентского языка, работающего исключительно в браузере
						пользователя. Для работы с сервером приходилось пользоваться чем-то
						вроде Java, PHP, ASP.NET, Ruby. За счёт Node.js появилась
						возможность оперировать запросами на сервере посредством JS.
						<br />
						<br />
						Несмотря на наличие возможности реализовать серверную часть на Node
						JS, большая часть веба использует для серверного языка PHP.
					</p>
				</div>
			</div>
		</>
	)
}

export default One
