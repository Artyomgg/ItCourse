import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { classData } from '../Data/ClassData.js'
import { testData } from '../Data/TestsData.js'
import '../css/test.styles.css'
import PencilLoader from './PencilLoader'

function TestPage() {
	const { classId, testId } = useParams()
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(true)
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [answers, setAnswers] = useState({})
	const [score, setScore] = useState(0)
	const [showResults, setShowResults] = useState(false)
	const [showDetailedResults, setShowDetailedResults] = useState(false)
	const [userInfo, setUserInfo] = useState({
		firstName: '',
		lastName: '',
		className: '',
	})
	const [showUserForm, setShowUserForm] = useState(true)
	const [emailStatus, setEmailStatus] = useState('') // '', 'sending', 'sent', 'error'

	// EmailJS конфигурация (ЗАМЕНИТЕ ЭТИ ДАННЫЕ НА СВОИ!)
	const EMAILJS_CONFIG = {
		SERVICE_ID: 'service_51lupov', // Замените на ваш Service ID
		TEMPLATE_ID: 'template_2dwebbj', // Замените на ваш Template ID
		PUBLIC_KEY: 'jPFRplzoQRCTnPv2D', // Замените на ваш Public Key
	}

	const TEACHER_EMAIL = 'itcoursesix@gmail.com' // Замените на вашу почту

	const currentClass = classData[classId]
	const test = testData[classId]?.tests.find(t => t.id === parseInt(testId))

	useEffect(() => {
		// Инициализация EmailJS
		emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
	}, [])

	const [timeLeft, setTimeLeft] = useState(() => {
		if (!test) return 20 * 60
		const minutes = parseInt(test.duration) || 20
		return minutes * 60
	})

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		if (test && !showUserForm) {
			const countdown = setInterval(() => {
				setTimeLeft(prev => {
					if (prev <= 1) {
						handleFinishTest()
						return 0
					}
					return prev - 1
				})
			}, 1000)

			return () => {
				clearTimeout(timer)
				clearInterval(countdown)
			}
		} else {
			return () => clearTimeout(timer)
		}
	}, [test, showUserForm])

	// Простая отправка через EmailJS
	const sendResultsToTeacher = async resultsData => {
		setEmailStatus('sending')

		try {
			const templateParams = {
				teacher_email: TEACHER_EMAIL,
				student_name: `${userInfo.lastName} ${userInfo.firstName}`,
				student_class: userInfo.className,
				test_subject: currentClass.title,
				test_title: test.title,
				test_score: `${resultsData.score}/${resultsData.maxScore}`,
				test_grade: `${resultsData.grade}/10`,
				test_percentage: `${Math.round(
					(resultsData.score / resultsData.maxScore) * 100
				)}%`,
				test_date: new Date().toLocaleString('ru-RU'),
				correct_answers: resultsData.score,
				total_questions: resultsData.maxScore,
			}

			await emailjs.send(
				EMAILJS_CONFIG.SERVICE_ID,
				EMAILJS_CONFIG.TEMPLATE_ID,
				templateParams
			)

			setEmailStatus('sent')
			return true
		} catch (error) {
			console.error('Ошибка отправки:', error)
			setEmailStatus('error')
			return false
		}
	}

	const handleUserInfoSubmit = e => {
		e.preventDefault()
		if (userInfo.firstName && userInfo.lastName && userInfo.className) {
			setShowUserForm(false)
		} else {
			alert('Пожалуйста, заполните все поля')
		}
	}

	const handleAnswerSelect = (questionId, optionId, isMultiple) => {
		setAnswers(prev => {
			if (isMultiple) {
				const currentAnswers = prev[questionId] || []
				const updatedAnswers = currentAnswers.includes(optionId)
					? currentAnswers.filter(id => id !== optionId)
					: [...currentAnswers, optionId]
				return { ...prev, [questionId]: updatedAnswers }
			} else {
				return { ...prev, [questionId]: [optionId] }
			}
		})
	}

	const handleNextQuestion = () => {
		if (currentQuestion < test.questions.length - 1) {
			setCurrentQuestion(prev => prev + 1)
		} else {
			handleFinishTest()
		}
	}

	const handlePrevQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(prev => prev - 1)
		}
	}

	const calculateScore = () => {
		let totalScore = 0

		test.questions.forEach(question => {
			const userAnswers = answers[question.id] || []
			const correctAnswers = question.options
				.filter(opt => opt.correct)
				.map(opt => opt.id)

			if (question.type === 'single') {
				if (
					userAnswers.length === 1 &&
					correctAnswers.includes(userAnswers[0])
				) {
					totalScore += question.points
				}
			} else {
				const isCorrect =
					userAnswers.length === correctAnswers.length &&
					userAnswers.every(answer => correctAnswers.includes(answer)) &&
					correctAnswers.every(answer => userAnswers.includes(answer))
				if (isCorrect) {
					totalScore += question.points
				}
			}
		})

		return totalScore
	}

	const isQuestionCorrect = question => {
		const userAnswers = answers[question.id] || []
		const correctAnswers = question.options
			.filter(opt => opt.correct)
			.map(opt => opt.id)

		if (question.type === 'single') {
			return userAnswers.length === 1 && correctAnswers.includes(userAnswers[0])
		} else {
			return (
				userAnswers.length === correctAnswers.length &&
				userAnswers.every(answer => correctAnswers.includes(answer)) &&
				correctAnswers.every(answer => userAnswers.includes(answer))
			)
		}
	}

	const handleFinishTest = async () => {
		const finalScore = calculateScore()
		setScore(finalScore)

		const resultsData = {
			score: finalScore,
			maxScore: test.maxScore,
			grade: getGrade(finalScore, test.maxScore),
		}

		// Отправляем результаты (не блокируем показ результатов)
		await sendResultsToTeacher(resultsData)

		setShowResults(true)
	}

	const getGrade = (score, maxScore) => {
		const percentage = (score / maxScore) * 10
		return Math.min(10, Math.max(1, Math.round(percentage)))
	}

	const formatTime = seconds => {
		const mins = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${mins.toString().padStart(2, '0')}:${secs
			.toString()
			.padStart(2, '0')}`
	}

	if (!test || !currentClass) {
		return (
			<div className='test-error'>
				<div className='error-card'>
					<h1>Тест не найден</h1>
					<p>Запрошенный тест или класс не существует</p>
					<div style={{ textAlign: 'left', margin: '20px 0' }}>
						<p>Параметры пути:</p>
						<ul>
							<li>classId: {classId}</li>
							<li>testId: {testId}</li>
						</ul>
						<p>Доступные тесты для класса {classId}:</p>
						<ul>
							{testData[classId]?.tests?.map(t => (
								<li key={t.id}>
									Тест {t.id}: {t.title} (путь: {t.path})
								</li>
							))}
						</ul>
					</div>
					<button
						className='back-btn'
						onClick={() => navigate(`/courses/forschool/home/${classId}`)}
					>
						Вернуться к курсу
					</button>
				</div>
			</div>
		)
	}

	if (isLoading) {
		return <PencilLoader />
	}

	// Форма ввода данных пользователя
	if (showUserForm) {
		return (
			<div className='user-info-form'>
				<div className='form-card'>
					<div className='form-header'>
						<div
							className='class-badge'
							style={{ backgroundColor: currentClass.color }}
						>
							{currentClass.icon} {currentClass.title}
						</div>
						<h1>Перед началом теста</h1>
						<p>Пожалуйста, введите ваши данные</p>
					</div>

					<form onSubmit={handleUserInfoSubmit}>
						<div className='input-group'>
							<label>Фамилия *</label>
							<input
								type='text'
								value={userInfo.lastName}
								onChange={e =>
									setUserInfo(prev => ({ ...prev, lastName: e.target.value }))
								}
								required
								placeholder='Введите вашу фамилию'
							/>
						</div>

						<div className='input-group'>
							<label>Имя *</label>
							<input
								type='text'
								value={userInfo.firstName}
								onChange={e =>
									setUserInfo(prev => ({ ...prev, firstName: e.target.value }))
								}
								required
								placeholder='Введите ваше имя'
							/>
						</div>

						<div className='input-group'>
							<label>Класс *</label>
							<input
								type='text'
								value={userInfo.className}
								onChange={e =>
									setUserInfo(prev => ({ ...prev, className: e.target.value }))
								}
								placeholder='Например: 6А'
								required
							/>
						</div>

						<button type='submit' className='start-test-btn'>
							Начать тест
						</button>
					</form>
				</div>
			</div>
		)
	}

	if (showResults) {
		const grade = getGrade(score, test.maxScore)

		return (
			<div className='test-results'>
				<div className='results-card'>
					<div className='results-header'>
						<div
							className='class-badge'
							style={{ backgroundColor: currentClass.color }}
						>
							{currentClass.icon} {currentClass.title}
						</div>
						<h1>Результаты теста #{test.id}</h1>
						<p className='test-subtitle'>{test.title}</p>
						<div className='student-info'>
							Ученик: {userInfo.lastName} {userInfo.firstName},{' '}
							{userInfo.className} класс
						</div>
						<div className={`email-status ${emailStatus}`}>
							{emailStatus === 'sending' &&
								'📨 Отправляем результаты учителю...'}
							{emailStatus === 'sent' && '✅ Результаты отправлены учителю!'}
							{emailStatus === 'error' &&
								'❌ Ошибка отправки. Сообщите учителю о результатах.'}
						</div>
					</div>

					<div className='score-circle'>
						<span className='score'>{grade}</span>
						<span className='score-label'>из 10</span>
					</div>

					<div className='results-details'>
						<div className='detail-item'>
							<span className='detail-label'>Правильных ответов:</span>
							<span className='detail-value'>
								{score}/{test.maxScore}
							</span>
						</div>
						<div className='detail-item'>
							<span className='detail-label'>Оценка:</span>
							<span className='detail-value'>{grade}/10</span>
						</div>
						<div className='detail-item'>
							<span className='detail-label'>Процент выполнения:</span>
							<span className='detail-value'>
								{Math.round((score / test.maxScore) * 100)}%
							</span>
						</div>
					</div>

					<div className='detailed-results-toggle'>
						<button
							className='toggle-btn'
							onClick={() => setShowDetailedResults(!showDetailedResults)}
						>
							{showDetailedResults
								? 'Скрыть детали'
								: 'Показать детальные результаты'}
						</button>
					</div>

					{showDetailedResults && (
						<div className='detailed-results'>
							<h3>Детальные результаты по вопросам:</h3>
							<div className='questions-review'>
								{test.questions.map((question, index) => {
									const isCorrect = isQuestionCorrect(question)
									const userAnswerIds = answers[question.id] || []
									const correctAnswerIds = question.options
										.filter(opt => opt.correct)
										.map(opt => opt.id)

									return (
										<div key={question.id} className='question-review'>
											<div className='question-review-header'>
												<span className='question-number'>
													Вопрос {index + 1}
												</span>
												<span
													className={`result-status ${
														isCorrect ? 'correct' : 'incorrect'
													}`}
												>
													{isCorrect ? '✓ Правильно' : '✗ Неправильно'}
												</span>
											</div>

											<p className='review-question'>{question.question}</p>

											<div className='answers-review'>
												<div className='user-answers'>
													<strong>Ваш ответ:</strong>
													{userAnswerIds.length > 0 ? (
														userAnswerIds.map(answerId => {
															const option = question.options.find(
																opt => opt.id === answerId
															)
															return (
																<span
																	key={answerId}
																	className={`user-answer ${
																		correctAnswerIds.includes(answerId)
																			? 'correct'
																			: 'incorrect'
																	}`}
																>
																	{option?.text}
																</span>
															)
														})
													) : (
														<span className='no-answer'>Нет ответа</span>
													)}
												</div>

												<div className='correct-answers'>
													<strong>Правильный ответ:</strong>
													{correctAnswerIds.map(answerId => {
														const option = question.options.find(
															opt => opt.id === answerId
														)
														return (
															<span key={answerId} className='correct-answer'>
																{option?.text}
															</span>
														)
													})}
												</div>
											</div>

											<div className='question-points-review'>
												Баллы: {isCorrect ? question.points : 0}/
												{question.points}
											</div>
										</div>
									)
								})}
							</div>
						</div>
					)}

					<div className='results-actions'>
						<button
							className='retry-btn'
							onClick={() => window.location.reload()}
						>
							↻ Пройти тест снова
						</button>
						<button
							className='back-btn'
							onClick={() => navigate(`/courses/forschool/home/${classId}`)}
						>
							← Вернуться к курсу
						</button>
					</div>
				</div>
			</div>
		)
	}

	const currentQ = test.questions[currentQuestion]
	const userAnswers = answers[currentQ?.id] || []

	return (
		<div className='test-page' style={{ '--class-color': currentClass.color }}>
			<header className='test-header'>
				<button
					className='back-button'
					onClick={() => navigate(`/courses/forschool/home/${classId}`)}
				>
					← Назад к курсу {currentClass.title}
				</button>

				<div className='test-info'>
					<div className='test-title-section'>
						<div className='class-info'>
							<span
								className='class-badge'
								style={{ backgroundColor: currentClass.color }}
							>
								{currentClass.icon} {currentClass.title}
							</span>
							<span className='test-number'>Тест #{test.id}</span>
						</div>
						<h1>{test.title}</h1>
						<p className='test-description'>{test.description}</p>
					</div>

					<div className='test-meta'>
						<div className='meta-item'>
							<span className='meta-label'>Вопросов:</span>
							<span className='meta-value'>{test.questions.length}</span>
						</div>
						<div className='meta-item'>
							<span className='meta-label'>Время:</span>
							<span className='meta-value'>{test.duration}</span>
						</div>
						<div className='meta-item'>
							<span className='meta-label'>Текущий вопрос:</span>
							<span className='meta-value'>
								{currentQuestion + 1}/{test.questions.length}
							</span>
						</div>
						<div className='meta-item timer'>
							<span className='meta-label'>⏰ Осталось:</span>
							<span className='meta-value'>{formatTime(timeLeft)}</span>
						</div>
					</div>
				</div>
			</header>

			<div className='test-progress'>
				<div
					className='progress-bar'
					style={{
						width: `${((currentQuestion + 1) / test.questions.length) * 100}%`,
					}}
				></div>
			</div>

			<main className='test-content'>
				<div className='question-card'>
					<div className='question-header'>
						<span className='question-number'>
							Вопрос {currentQuestion + 1}
						</span>
						<span className='question-points'>
							{currentQ.points} балл{currentQ.points > 1 ? 'а' : ''}
						</span>
					</div>

					<h2>{currentQ.question}</h2>
					<p className='question-type'>
						{currentQ.type === 'single'
							? 'Выберите один вариант ответа'
							: 'Выберите один или несколько вариантов ответа'}
					</p>

					<div className='options-grid'>
						{currentQ.options.map(option => (
							<label
								key={option.id}
								className={`option-label ${
									userAnswers.includes(option.id) ? 'selected' : ''
								}`}
							>
								<input
									type={currentQ.type === 'single' ? 'radio' : 'checkbox'}
									name={`question-${currentQ.id}`}
									checked={userAnswers.includes(option.id)}
									onChange={() =>
										handleAnswerSelect(
											currentQ.id,
											option.id,
											currentQ.type === 'multiple'
										)
									}
								/>
								<span className='option-marker'></span>
								<span className='option-text'>{option.text}</span>
							</label>
						))}
					</div>
				</div>

				<div className='test-navigation'>
					<button
						className='nav-btn prev-btn'
						onClick={handlePrevQuestion}
						disabled={currentQuestion === 0}
					>
						← Предыдущий вопрос
					</button>

					<div className='navigation-info'>
						<span>
							Вопрос {currentQuestion + 1} из {test.questions.length}
						</span>
					</div>

					<button className='nav-btn next-btn' onClick={handleNextQuestion}>
						{currentQuestion === test.questions.length - 1
							? 'Завершить тест'
							: 'Следующий вопрос →'}
					</button>
				</div>
			</main>
		</div>
	)
}

export default TestPage
