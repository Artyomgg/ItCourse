import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import PencilLoader from '../../components/PencilLoader'
import '../../css/ClassPage.css'
import { classData } from '../../Data/ClassData.js'

function HomeOfClasses(props) {
	const { classId } = useParams()
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(true)

	const currentClass = classData[classId || 6] // По умолчанию 6 класс

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1000)
		return () => clearTimeout(timer)
	}, [])

	const handleTopicSelect = topic => {
		if (topic.id == 6) {
			window.location.href = 'https://it-course-k.vercel.app/'
		} else {
			setTimeout(() => {
				navigate(topic.path)
			}, 500)
		}
		setTimeout(() => {
			navigate(topic.path)
		}, 500)
	}

	const handleBack = () => {
		navigate('/courses/forschool')
	}

	return (
		<div className='class-page' style={{ '--class-color': currentClass.color }}>
			<header className='class-header'>
				<button onClick={handleBack} className='back-button'>
					← Назад к выбору класса
				</button>
				<div className='class-title-section'>
					<div className='class-icon-large'>{currentClass.icon}</div>
					<div>
						<h1>{currentClass.title}</h1>
						<p>{currentClass.description}</p>
					</div>
				</div>
			</header>

			{isLoading == true ? (
				<PencilLoader />
			) : (
				<main className='class-content'>
					<section className='topics-section'>
						<h2>Темы курса</h2>
						<p className='section-description'>Выберите тему для изучения</p>
						<div className='topics-grid'>
							{currentClass.topics.map((topic, index) => (
								<div
									key={topic.id}
									className='topic-card'
									style={{ animationDelay: `${index * 0.1}s` }}
									onClick={() => handleTopicSelect(topic)}
								>
									<div className='topic-header'>
										<div className='topic-icon'>{topic.icon}</div>
										<h3>{topic.title}</h3>
									</div>

									<p className='topic-description'>{topic.description}</p>

									<div className='topic-meta'>
										<span className='lessons-count'>
											уроков: {topic.lessons}
										</span>
										<span className='duration'>{topic.duration}</span>
									</div>

									<div className='topic-footer'>
										<button
											className='start-topic-btn'
											style={{ backgroundColor: currentClass.color }}
										>
											Начать изучение
										</button>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className='class-stats'>
						<div className='stat-card'>
							<h3>Всего тем в курсе</h3>
							<span className='stat-number'>{currentClass.topics.length}</span>
						</div>
						<div className='stat-card'>
							<h3>Общая длительность</h3>
							<span className='stat-number'>
								{currentClass.topics
									.reduce((total, topic) => {
										const hours = parseFloat(topic.duration)
										return total + hours
									}, 1)
									.toFixed(0.1)}{' '}
								ч
							</span>
						</div>
					</section>
				</main>
			)}
		</div>
	)
}

export default HomeOfClasses
