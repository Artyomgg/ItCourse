import React from 'react'
import { Link } from 'react-router'
import '../css/hamburger.menu.css'

function Header() {
	return (
		<section className='top-nav'>
			<div className='block-logo'>
				<img
					alt=''
					src='/img/free-icon-graduate-5404967withoneelement.png'
				/>
				<h1>ItCourse</h1>
			</div>
			<input id='menu-toggle' type='checkbox' />
			<label className='menu-button-container' htmlFor='menu-toggle'>
				<div className='menu-button' />
			</label>
			<ul className='menu'>
				<li className='active'>
					<Link to='/'>Главная</Link>
				</li>
				<li>
					<Link to='courses'>Курсы</Link>
				</li>
				<li>
					<Link to='/check'>Проверить задания</Link>
				</li>
				<li>
					<a href='https://chart-beryl.vercel.app/'>Таблица лидеров</a>
				</li>
				<li>
					<Link to='/9may'>9 Мая</Link>
				</li>
			</ul>
		</section>
	)
}

export default Header
