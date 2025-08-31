import { Link } from 'react-router'

function Footer(props) {
	return (
		// <footer>
		// 	<div className='block-logo'>
		// 		<img alt='' src='/img/free-icon-graduate-5404967.png' />
		// 		<h1>ItCourse</h1>
		// 	</div>
		// 	<h4>Copyright © 2025 Дудко Артем</h4>
		// 	<h4>Copyright © 2025 Учитель - Бубкина Елена Петровна, ср. шк №30</h4>
		// 	<p>
		// <a href='https://t.me/+ZP746KoxXGE5ZTYy'>
		// 	Не можешь решить задачу. Переходи в сообщество!
		// </a>
		// 		<br />
		// 		<br />
		// <a href='https://artyomgg.github.io/ContactUs/'>
		// 	Вопросы по сайту, предложения?
		// </a>
		// 	</p>
		// </footer>
		<footer>
			<div className='footer-content'>
				<h2>
					<div className='logo-on-footer'>
						<img src='/icons8-шапка-выпускника-90.png' alt='' />
					</div>
					IT-COURSE
				</h2>
				<p>Мы помогаем людям изучать программирование легко и интересно.</p>

				<div className='social-links'>
					<a href='https://t.me/artemo0f'>
						<i className='bx bxl-telegram'></i>
					</a>
					<a href='https://www.tiktok.com/@itcourse.omg?is_from_webapp=1&sender_device=pc'>
						<i className='bx bxl-tiktok'></i>
					</a>
					<a href='https://www.youtube.com/@it-course-six'>
						<i className='bx bxl-youtube'></i>
					</a>
					<a href='https://github.com/Artyomgg'>
						<i className='bx bxl-github'></i>
					</a>
				</div>

				<nav className='footer-nav'>
					<Link to='/'>Главная</Link>
					<Link to='/courses'>Курсы</Link>
				</nav>
				<br />
				<p>
					<a href='https://t.me/+ZP746KoxXGE5ZTYy'>
						Не можешь решить задачу. Переходи в сообщество!
					</a>
					<br />
					<a href='https://artyomgg.github.io/ContactUs/'>
						Вопросы по сайту, предложения?
					</a>
				</p>

				<div className='copyright'>
					&copy; 2025 IT-COURSE. Все права защищены.
				</div>
			</div>
		</footer>
	)
}

export default Footer
