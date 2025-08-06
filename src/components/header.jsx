import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import '../css/hamburger.menu.css'

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()
	const menuRef = useRef(null)
	const checkboxRef = useRef(null)

	// Закрытие меню при смене роута
	useEffect(() => {
		setIsMenuOpen(false)
	}, [location])

	// Закрытие при клике вне области
	useEffect(() => {
		const handleClickOutside = e => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setIsMenuOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	// Синхронизация состояния с чекбоксом
	useEffect(() => {
		if (checkboxRef.current) {
			checkboxRef.current.checked = isMenuOpen
		}
	}, [isMenuOpen])

	return (
		<section className='top-nav' ref={menuRef}>
			<div className='block-logo'>
				<img alt='' src='/icons8-шапка-выпускника-90.png' />
				<h1>ItCourse</h1>
			</div>

			<input
				id='menu-toggle'
				type='checkbox'
				ref={checkboxRef}
				style={{ display: 'none' }}
			/>

			<label
				className='menu-button-container'
				htmlFor='menu-toggle'
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<div className='menu-button' />
			</label>

			<ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
				<li>
					<Link to='/' onClick={() => setIsMenuOpen(false)}>
						Главная
					</Link>
				</li>
				<li>
					<Link to='courses' onClick={() => setIsMenuOpen(false)}>
						Курсы
					</Link>
				</li>
				<li>
					<Link to='/check' onClick={() => setIsMenuOpen(false)}>
						Проверить задания
					</Link>
				</li>
				<li>
					<a
						href='https://chart-beryl.vercel.app/'
						onClick={() => setIsMenuOpen(false)}
						target='_blank'
						rel='noopener noreferrer'
					>
						Таблица лидеров
					</a>
				</li>
			</ul>
		</section>
	)
}

export default Header
