import React from 'react'
import { Link, useNavigate } from 'react-router'
import ReturnToTheNineMay from './ReturnToTheNineMay'

const storageKey = 'correctAnswers'
// Общий компонент для всех заданий
function Quest({ questionText, correctAnswer, questId }) {
	const [answer, setAnswer] = React.useState('')
	const navigate = useNavigate()

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

				// Перенаправление на следующее задание
				if (questId <= 9) {
					// Если это не последнее задание
					setTimeout(() => {
						navigate(`/9may/${questId + 1}`)
					}, 1500) // Задержка 1.5 секунды перед перенаправлением
				}
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

// Модифицируем компонент Event для отображения только доступных заданий
export function Event() {
	const [completedExercises, setCompletedExercises] = React.useState([])
	const [collectedTanks, setCollectedTanks] = React.useState([])

	React.useEffect(() => {
		// Загружаем выполненные задания
		const exercises = JSON.parse(localStorage.getItem('correctAnswers')) || []
		setCompletedExercises(exercises)

		// Загружаем собранные танки
		const tanks = JSON.parse(localStorage.getItem('collectedTanks')) || []
		setCollectedTanks(tanks)

		const handleStorageChange = () => {
			const updatedExercises =
				JSON.parse(localStorage.getItem('correctAnswers')) || []
			setCompletedExercises(updatedExercises)

			const updatedTanks =
				JSON.parse(localStorage.getItem('collectedTanks')) || []
			setCollectedTanks(updatedTanks)
		}

		window.addEventListener('storage', handleStorageChange)
		return () => window.removeEventListener('storage', handleStorageChange)
	}, [])

	const exercises = [
		{ id: 1, path: '/9may/1', name: '1 Задание' },
		{ id: 2, path: '/9may/2', name: '2 Задание' },
		{ id: 3, path: '/9may/3', name: '3 Задание' },
		{ id: 4, path: '/9may/4', name: '4 Задание' },
		{ id: 5, path: '/9may/5', name: '5 Задание' },
		{ id: 6, path: '/9may/6', name: '6 Задание' },
		{ id: 7, path: '/9may/7', name: '7 Задание' },
		{ id: 8, path: '/9may/8', name: '8 Задание' },
		{ id: 9, path: '/9may/9', name: '9 Задание' },
		{ id: 10, path: '/9may/10', name: '10 Задание' },
	]

	return (
		<div className='exercises-grid'>
			{exercises.map(ex => {
				// Проверяем, выполнено ли предыдущее задание
				const isAvailable =
					ex.id === 1 ||
					completedExercises.includes(ex.id - 1) ||
					completedExercises.includes(ex.id) ||
					// Для 10 задания проверяем, собраны ли все танки
					(ex.id === 10 && collectedTanks.length === 10)

				// Проверяем, выполнено ли задание
				const isCompleted =
					completedExercises.includes(ex.id) ||
					// 10 задание считается выполненным, если собраны все танки
					(ex.id === 10 && collectedTanks.length === 10)

				return (
					<Link
						key={ex.id}
						to={ex.path}
						className={`exercise-link ${isAvailable ? '' : 'disabled'}`}
					>
						<div className={`btn${ex.id}`}>
							{ex.name}
							{isCompleted && ' ✓'}
						</div>
					</Link>
				)
			})}
		</div>
	)
}

// Добавляем стили для disabled заданий
const styles = `
  .exercises-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    padding: 20px;
  }
  
  .exercise-link.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  
  .exercise-link div {
    transition: all 0.3s ease;
  }
  
  .exercise-link:hover div {
    transform: scale(1.05);
  }
`

// Вставляем стили в head
const styleElement = document.createElement('style')
styleElement.innerHTML = styles
document.head.appendChild(styleElement)

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
	const [collectedTanks, setCollectedTanks] = React.useState(0)
	const [totalExercises, setTotalExercises] = React.useState(10) // Теперь 10 заданий

	React.useEffect(() => {
		// Получаем выполненные задания из localStorage
		const exercises = JSON.parse(localStorage.getItem('correctAnswers')) || []

		// Получаем количество собранных танков
		const tanks = JSON.parse(localStorage.getItem('collectedTanks')) || []
		setCollectedTanks(tanks.length)

		// Если все танки собраны, считаем 10 задание выполненным
		const completedCount = exercises.length + (tanks.length === 10 ? 1 : 0)
		setCount(completedCount)

		// Обработчик изменений в localStorage
		const handleStorageChange = () => {
			const updatedExercises =
				JSON.parse(localStorage.getItem('correctAnswers')) || []
			const updatedTanks =
				JSON.parse(localStorage.getItem('collectedTanks')) || []
			setCollectedTanks(updatedTanks.length)
			setCount(updatedExercises.length + (updatedTanks.length === 10 ? 1 : 0))
		}

		window.addEventListener('storage', handleStorageChange)
		return () => window.removeEventListener('storage', handleStorageChange)
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
						{collectedTanks === 10 && ' (включая сбор всех танков)'}
					</p>
				</div>
			)}
		</div>
	)
}
