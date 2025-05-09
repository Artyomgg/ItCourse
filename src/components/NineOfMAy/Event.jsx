import React from 'react'
import { Link } from 'react-router'

export function Event() {
	return (
		<>
			<Link to='one'>
				<div className='btn1'>1 Задание</div>
			</Link>
			<Link to='two'>
				<div className='btn2'>2 Задание</div>
			</Link>
			<Link to='three'>
				<div className='btn3'>3 Задание</div>
			</Link>
			<Link to='four'>
				<div className='btn4'>4 Задание</div>
			</Link>
			<Link to='five'>
				<div className='btn5'>5 Задание</div>
			</Link>
			<Link to='six'>
				<div className='btn6'>6 Задание</div>
			</Link>
			<Link to='seven'>
				<div className='btn7'>7 Задание</div>
			</Link>
			<Link to='eight'>
				<div className='btn8'>8 Задание</div>
			</Link>
			<Link to='nine'>
				<div className='btn9'>9 Задание</div>
			</Link>
			<Link to='ten'>
				<div className='btn10'>10 Задание</div>
			</Link>
		</>
	)
}

const storageKey = 'correctAnswers' // Ключ для localStorage

export function OneNineMay() {
	const [answer, setAnswer] = React.useState('')
	const correctAnswer = 'герой' // Правильный ответ

	const handleInputChange = e => {
		setAnswer(e.target.value.toLowerCase()) // Сохраняем введенный ответ в состоянии
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (answer === correctAnswer) {
			// Получаем текущий массив правильных ответов из localStorage
			const currentAnswers = JSON.parse(localStorage.getItem(storageKey)) || []

			// Если ответа еще нет в массиве, добавляем его
			if (!currentAnswers.includes(1)) {
				const updatedAnswers = [...currentAnswers, 1]
				localStorage.setItem(storageKey, JSON.stringify(updatedAnswers))
				alert('Правильно! Ответ сохранен.')
			} else {
				alert('Вы уже правильно отвечали на этот вопрос!')
			}

			setAnswer('') // Очищаем поле ввода
		} else {
			alert('Неправильно, попробуйте еще раз!')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<p
				style={{
					background: 'white',
					border: '2px solid black',
					borderRadius: '15px',
					padding: '1rem',
					width: '90%',
					margin: '0 auto',
					marginTop: '1.5rem',
				}}
			>
				Он самый смелый, Самый ловкий, Бесстрашный, Умный, волевой. Он дело
				делает большое, Ведет людей он за собой, А сам бежит вперед, Где пули.
				Не бережёт себя, порой. Его вы имя подскажите, А люди говорят:{' '}
				<input
					type='text'
					value={answer}
					onChange={handleInputChange}
					style={{ border: '1px solid #ccc', padding: '0.3rem' }}
				/>
				<button
					type='submit'
					style={{
						marginLeft: '0.5rem',
						padding: '0.3rem 0.8rem',
						background: '#4CAF50',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					Проверить
				</button>
			</p>
		</form>
	)
}
