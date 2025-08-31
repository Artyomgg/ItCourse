import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import PencilLoader from '../../components/PencilLoader'
import '../../css/ClassSelection.css'

function HomePageOFAllCourses(props) {
	const [selectedClass, setSelectedClass] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1500)
		return () => clearTimeout(timer)
	}, [])

	const classes = [
		{
			id: 6,
			title: '6 класс',
			icon: '🧠',
			topics: [
				'ИНФОРМАЦИЯ И ИНФОРМАТИКА',
				'ОСНОВЫ РАБОТЫ С КОМПЬЮТЕРОМ',
				'ОБРАБОТКА РАСТРОВЫХ ИЗОБРАЖЕНИЙ',
				'СОЗДАНИЕ ТЕКСТОВЫХ ДОКУМЕНТОВ',
				'КОМПЬЮТЕРНЫЕ ПРЕЗЕНТАЦИИ',
				'АЛГОРИТМЫ И ИСПОЛНИТЕЛИ',
				'ИНТЕРНЕТ. ЭЛЕКТРОННАЯ ПОЧТА',
			],
			color: '#4facfe',
			path: '/courses/forschool/home/6', // путь для перехода
		},
		{
			id: 7,
			title: '7 класс',
			icon: '💻',
			topics: [
				'ИНФОРМАЦИЯ И ИНФОРМАЦИОННЫЕ ПРОЦЕССЫ',
				`ПРЕДСТАВЛЕНИЕ О ЛОГИКЕ ВЫСКАЗЫВАНИЙ. 
      МНОЖЕСТВА И ОПЕРАЦИИ НАД НИМИ`,
				'ОСНОВНЫЕ АЛГОРИТМИЧЕСКИЕ КОНСТРУКЦИИ',
				`АППАРАТНОЕ И ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ КОМПЬЮТЕРА`,
				'РАБОТА С ВЕКТОРНОЙ ГРАФИКОЙ',
			],
			color: '#00f2fe',
			path: '/courses/forschool/home/7', // путь для перехода
		},
		{
			id: 8,
			title: '8 класс',
			icon: '🚀',
			topics: [
				'ОСНОВЫ АНИМАЦИИ',
				'ОСНОВЫ АЛГОРИТМИЗАЦИИ И ПРОГРАММИРОВАНИЯ',
				`ТЕХНОЛОГИЯ ОБРАБОТКИ ТЕКСТОВЫХ ДОКУМЕНТОВ`,
				`ТЕХНОЛОГИЯ ОБРАБОТКИ АУДИО И ВИДЕОИНФОРМАЦИИ`,
			],
			color: 'gold',
			path: '/courses/forschool/home/8', // путь для перехода
		},
		{
			id: 9,
			title: '9 класс',
			icon: '🌐',
			topics: [
				'ИНФОРМАЦИОННЫЕ РЕСУРСЫ ИНТЕРНЕТА',
				'АЛГОРИТМЫ ОБРАБОТКИ СТРОКОВЫХ ВЕЛИЧИН',
				`ОБРАБОТКА ИНФОРМАЦИИ В ЭЛЕКТРОННЫХ ТАБЛИЦАХ`,
				`КОМПЬЮТЕРНЫЕ ИНФОРМАЦИОННЫЕ МОДЕЛИ`,
			],
			color: 'red',
			path: '/courses/forschool/home/9', // путь для перехода
		},
	]

	const handleClassSelect = classItem => {
		setSelectedClass(classItem.id)

		// Через 1.5 секунды перенаправляем на страницу курса
		setTimeout(() => {
			navigate(classItem.path)
		}, 2500)
	}

	const handleStartLearning = () => {
		if (selectedClass) {
			const selectedClassItem = classes.find(c => c.id === selectedClass)
			navigate(selectedClassItem.path)
		}
	}

	return (
		<>
			<section id='hello' className='class-selection-hero'>
				<div className='block-help-color'>
					<h1>Курсы информатики</h1>
					<p>
						Выберите класс, чтобы начать увлекательное путешествие в мир
						программирования и компьютерных наук
					</p>
				</div>
			</section>

			{isLoading == true ? (
				<PencilLoader />
			) : (
				<section id='courses' className='class-selection-section'>
					<h2>Выберите ваш класс</h2>
					<h3>
						Каждый курс адаптирован под возрастные особенности и уровень
						подготовки
					</h3>

					<div className='class-cards-container'>
						{classes.map((classItem, index) => (
							<div
								key={classItem.id}
								className={`class-card ${
									selectedClass === classItem.id ? 'class-card-selected' : ''
								}`}
								style={{
									animationDelay: `${index * 0.15}s`,
									'--accent-color': classItem.color,
								}}
								onClick={() => handleClassSelect(classItem)}
							>
								<div className='class-card-header'>
									<div
										className='class-icon'
										style={{ backgroundColor: classItem.color + '40' }}
									>
										{classItem.icon}
									</div>
									<h2>{classItem.title}</h2>
								</div>

								<div className='class-card-content'>
									<p className='class-description'>{classItem.description}</p>

									<div className='topics-list'>
										<h4>Темы курса:</h4>
										<ul>
											{classItem.topics.map((topic, i) => (
												<li key={i}>{topic}</li>
											))}
										</ul>
									</div>
								</div>

								<div className='class-card-footer'>
									<button
										className='select-class-btn'
										style={{ background: classItem.color }}
									>
										{selectedClass === classItem.id
											? 'Выбрано'
											: 'Выбрать курс'}
									</button>
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{selectedClass && (
				<div className='selection-confirmation'>
					<div className='confirmation-content'>
						<h2>Вы выбрали {selectedClass} класс!</h2>
						<p>
							Готовы начать обучение? Переходите к урокам или сначала
							ознакомьтесь с программой
						</p>
						<div className='confirmation-buttons'>
							<button className='btn-start' onClick={handleStartLearning}>
								Начать обучение
							</button>
							<button
								className='btn-outline'
								onClick={() => setSelectedClass(null)}
							>
								Вернуться к выбору
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default HomePageOFAllCourses
