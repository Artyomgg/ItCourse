import React from 'react'
import { Link } from 'react-router'
import ReturnToTheNineMay from './ReturnToTheNineMay'

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

const storageKey = 'correctAnswers'

// Общий компонент для всех заданий
function Quest({ questionText, correctAnswer, questId }) {
	const [answer, setAnswer] = React.useState('')

	const handleInputChange = e => {
		setAnswer(e.target.value.toLowerCase())
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (answer === correctAnswer) {
			const currentAnswers = JSON.parse(localStorage.getItem(storageKey)) || []

			if (!currentAnswers.includes(questId)) {
				const updatedAnswers = [...currentAnswers, questId]
				localStorage.setItem(storageKey, JSON.stringify(updatedAnswers))
				alert('Правильно! Ответ сохранен.')
			} else {
				alert('Вы уже правильно отвечали на этот вопрос!')
			}

			setAnswer('')
		} else {
			alert('Неправильно, попробуйте еще раз!')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<p style={containerStyle}>
				{questionText}
				<input
					type='text'
					value={answer}
					onChange={handleInputChange}
					style={inputStyle}
				/>
				<button type='submit' style={buttonStyle}>
					Проверить
				</button>
			</p>
		</form>
	)
}

// Стили вынесены отдельно для переиспользования
const containerStyle = {
	background: 'white',
	border: '2px solid black',
	borderRadius: '15px',
	padding: '1rem',
	width: '90%',
	margin: '0 auto',
	marginTop: '1.5rem',
}

const inputStyle = {
	border: '1px solid #ccc',
	padding: '0.3rem',
}

const buttonStyle = {
	marginLeft: '0.5rem',
	padding: '0.3rem 0.8rem',
	background: '#4CAF50',
	color: 'white',
	border: 'none',
	borderRadius: '4px',
	cursor: 'pointer',
}

// Компоненты заданий
export function OneNineMay() {
	return (
		<>
			<ReturnToTheNineMay />
			<Quest
				questId={1}
				correctAnswer='герой'
				questionText={`Он самый смелый, Самый ловкий, Бесстрашный, Умный, волевой. Он дело
        делает большое, Ведет людей он за собой, А сам бежит вперед, Где пули.
        Не бережёт себя, порой. Его вы имя подскажите, А люди говорят: `}
			/>
		</>
	)
}

export function TwoNineMay() {
	return (
		<>
			<ReturnToTheNineMay></ReturnToTheNineMay>
			<Quest
				questId={2}
				correctAnswer='солдаты'
				questionText='Кто знает заповедь свою «Трудно в учении, Легко в бою»? '
			/>
		</>
	)
}

export function ThreeNineMay() {
	return (
		<>
			<ReturnToTheNineMay></ReturnToTheNineMay>
			<Quest
				questId={3}
				correctAnswer='граната'
				questionText='Хоть зовут меня ручная,
				Но характер колкий.
				Будет помнить навсегда,
				Враг мои осколки. '
			/>
		</>
	)
}
export function FourNineMay() {
	return (
		<>
			<ReturnToTheNineMay></ReturnToTheNineMay>
			<Quest
				questId={4}
				correctAnswer='катюша'
				questionText='И врага огнем косила,
				Вражьи замыслы поруша,
				Легендарная ....'
			/>
		</>
	)
}
export function FiveNineMay() {
	return (
		<>
			<ReturnToTheNineMay></ReturnToTheNineMay>
			<Quest
				questId={5}
				correctAnswer='тельняшка'
				questionText='Задаю я вам вопрос.
Что же носит наш матрос?
Полосатая рубашка
Называется ....'
			/>
		</>
	)
}
export function SixNineMay() {
	return (
		<>
			<ReturnToTheNineMay></ReturnToTheNineMay>
			<Quest
				questId={6}
				correctAnswer='день победы'
				questionText='День, когда горит звезда
				На фуражке деда,
				И дрожит в глазах слеза -'
			/>
		</>
	)
}
export function SevenNineMay() {
	return (
		<>
			<ReturnToTheNineMay></ReturnToTheNineMay>
			<Quest
				questId={7}
				correctAnswer='салют'
				questionText='Все веселятся: ребята и взрослые
Песни победные звонко поют,
В небе ночном рассыпается звездами
Праздничный, всеми любимый …'
			/>
		</>
	)
}
export function EightNineMay() {
	return (
		<>
			<ReturnToTheNineMay></ReturnToTheNineMay>
			<Quest
				questId={8}
				correctAnswer='май'
				questionText='В этом месяце бывает
Светлый праздник, День Победы!
Мы с сестренкой поздравляем
Наших бабушку и деда!'
			/>
		</>
	)
}
export function NineNineMay() {
	return (
		<>
			<ReturnToTheNineMay></ReturnToTheNineMay>
			<Quest
				questId={9}
				correctAnswer='побеждать'
				questionText='Моряки не любят рассуждать,
Моряки привыкли'
			/>
		</>
	)
}

function LastQuestion() {
	return (
		<>
			<p style={containerStyle}>
				Найди все танки на сайте, они могут быть где угодно! P.S. Их нет в
				python-kids. Осталось всего 1 задание!
			</p>
		</>
	)
}

export default LastQuestion

export function HowManyTanksIHave() {
	const [count, setCount] = React.useState(0)

	React.useEffect(() => {
		// Подписка на изменения localStorage
		const tanks = JSON.parse(localStorage.getItem('collectedTanks')) || []
		setCount(tanks.length)

		// Добавляем обработчик для отслеживания изменений в localStorage
		const handleStorageChange = () => {
			const updatedTanks =
				JSON.parse(localStorage.getItem('collectedTanks')) || []
			setCount(updatedTanks.length)
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [])

	return (
		<div className='tank-counter'>
			{count === 10 ? (
				<div className='complete-message'>
					<h1 style={{ color: 'black' }}>Поздравляем! 🎉</h1>
					<p>Вы собрали все 10 танков!</p>
				</div>
			) : (
				<div className='progress-message'>
					<h2 style={{ color: 'black' }}>Коллекция танков</h2>
					<div className='progress-bar'>
						<div
							className='progress-fill'
							style={{ width: `${count * 10}%` }}
						/>
					</div>
					<p>{count} из 10 танков собрано</p>
				</div>
			)}
		</div>
	)
}

export function HowManyExercisesIHave() {
	const [count, setCount] = React.useState(0)
	const [totalExercises, setTotalExercises] = React.useState(9) // Всего заданий

	React.useEffect(() => {
		// Получаем выполненные задания из localStorage
		const exercises = JSON.parse(localStorage.getItem('correctAnswers')) || []
		setCount(exercises.length)

		// Обработчик изменений в localStorage
		const handleStorageChange = () => {
			const updatedExercises =
				JSON.parse(localStorage.getItem('correctAnswers')) || []
			setCount(updatedExercises.length)
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [])

	return (
		<div className='exercise-counter'>
			{count === totalExercises ? (
				<div className='complete-message'>
					<h1 style={{ color: 'black' }}>Отлично! 🎖️</h1>
					<p>Вы выполнили все {totalExercises} заданий!</p>
				</div>
			) : (
				<div className='progress-message'>
					<h2 style={{ color: 'black' }}>Прогресс заданий</h2>
					<div className='progress-bar'>
						<div
							className='progress-fill'
							style={{ width: `${(count / totalExercises) * 100}%` }}
						/>
					</div>
					<p>
						{count} из {totalExercises} заданий выполнено
					</p>
				</div>
			)}
		</div>
	)
}
