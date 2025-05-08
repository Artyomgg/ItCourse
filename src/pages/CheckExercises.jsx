import React from 'react'

function CheckExercises(props) {
	return (
		<>
			<head>
				<title>Проверить задания | IT Course</title>
				<meta name='description' content='Проверить задания на ItCourse' />
			</head>
			<div
				className='check'
				style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
			>
				<ul>
					<li>
						<a href='mailto:itcoursesix@gmail.com'>Проверить с помощью Почты</a>
					</li>
					<li>
						<a href='viber://chat?number=%2B375291814687'>
							Проверить с помощью viber
						</a>
					</li>
					<li>
						<a
							href='https://t.me/artyom_dudko'
							target='_blank'
							rel='noopener noreferrer'
						>
							Проверить с помощью telegram
						</a>
					</li>
				</ul>
			</div>
			<div className='conteiner'>
				<h2>
					Как проверить? (Вначале надо подать заявку на добавление в таблицу
					лидеров)
				</h2>

				<ul className='one'>
					<li>1. Скидываешь скрин выполненной задачи</li>
					<li>2. Скидываешь скрин кода</li>
					<li>В удобный вариант и в течение 4 дней вам добавятся балы</li>
				</ul>
			</div>
		</>
	)
}

export default CheckExercises
