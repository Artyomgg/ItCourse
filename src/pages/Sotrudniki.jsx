import { useState } from 'react'
import { getAllEmployees, getBestEmployees } from '../Data/Employees.js'
import '../css/Sotrudniki.css'

function Sotrudniki(props) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		position: '',
		experience: '',
		message: '',
	})

	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Данные формы:', formData)
		setIsSubmitted(true)
		setFormData({
			name: '',
			email: '',
			phone: '',
			position: '',
			experience: '',
			message: '',
		})
	}

	const bestEmployees = getBestEmployees()
	const allEmployees = getAllEmployees()

	// SVG fallback для аватарок
	const getDefaultAvatar = (gender = 'male') => {
		const maleAvatar =
			'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiNGREFDODIiLz4KPHN2ZyB4PSIzMCIgeT0iMzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyQTJCM0IiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Ik0yMCAyMVYxOUMyMCAxNi43OTAxIDE4LjIwOTkgMTUgMTYgMTVIOEM1Ljc5MDEgMTUgNCAxNi43OTAxIDQgMTlWMjFNMTYgN0MxNiA5LjIwOTE0IDE0LjIwOTEgMTEgMTIgMTFDOS43OTA4NiAxMSA4IDkuMjA5MTQgOCA3QzggNC43OTA4NiA5Ljc5MDg2IDMgMTIgM0MxNC4yMDkxIDMgMTYgNC43OTA4NiAxNiA3WiIvPgo8L3N2Zz4KPC9zdmc+'
		const femaleAvatar =
			'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiNGREFDODIiLz4KPHN2ZyB4PSIzMCIgeT0iMjUiIHdpZHRoPSI2MCIgaGVpZ2h0PSI3MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyQTJCM0IiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Ik0yMCAyMVYxOUMyMCAxNi43OTAxIDE4LjIwOTkgMTUgMTYgMTVIOEM1Ljc5MDEgMTUgNCAxNi43OTAxIDQgMTlWMjFNMTIgMTVDMTIgMTIgMTIgOSAxMiA3QzEyIDQuNzkwODYgMTMuNzkwOSAzIDE2IDNDMTguMjA5MSAzIDIwIDQuNzkwODYgMjAgN0MyMCA5IDIwIDEyIDIwIDE1Ii8+Cjwvc3ZnPgo8L3N2Zz4='

		return gender === 'female' ? femaleAvatar : maleAvatar
	}

	return (
		<div className='sotrudniki-page'>
			{/* Заголовок секции */}
			<section className='employees-hero'>
				<div className='hero-content'>
					<h1>Руководство ITCOURSE</h1>
					<p>
						Профессионалы, которые создают и развивают лучшую платформу для
						IT-образования
					</p>
				</div>
			</section>

			{/* Секция руководства */}
			<section className='management-section'>
				<div className='section-header'>
					<h2>Наше руководство</h2>
					<p>Опытные лидеры, которые ведут компанию к успеху</p>
				</div>

				<div className='employees-grid management-grid'>
					{allEmployees.map((employee, index) => (
						<div
							key={employee.id}
							className='employee-card management-card'
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className='employee-avatar'>
								<img
									src={employee.avatar}
									alt={employee.name}
									onError={e => {
										const gender = employee.name.includes('Елена')
											? 'female'
											: 'male'
										e.target.src = getDefaultAvatar(gender)
									}}
								/>
								
							</div>

							<div className='employee-info'>
								<h3>{employee.name}</h3>
								<p className='employee-position'>{employee.position}</p>

								<div className='employee-contact'>
									<p>📞 {employee.phone}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Секция формы вступления в команду */}
			<section className='join-team-section'>
				<div className='section-header'>
					<h2>Присоединяйтесь к нашей команде</h2>
					<p>
						Станьте частью ITCOURSE и помогите нам менять жизни через
						образование
					</p>
				</div>

				<div className='join-form-container'>
					{isSubmitted ? (
						<div className='success-message'>
							<div className='success-icon'>✅</div>
							<h3>Заявка отправлена!</h3>
							<p>
								Мы рассмотрим вашу заявку в течение 3 рабочих дней и свяжемся с
								вами.
							</p>
							<button
								className='fancy red'
								onClick={() => setIsSubmitted(false)}
							>
								<span className='text'>Отправить еще одну заявку</span>
							</button>
						</div>
					) : (
						<form className='join-team-form' onSubmit={handleSubmit}>
							<div className='form-row'>
								<div className='form-group'>
									<label htmlFor='name'>ФИО *</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleInputChange}
										required
										placeholder='Иванов Иван Иванович'
									/>
								</div>

								<div className='form-group'>
									<label htmlFor='email'>Email *</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleInputChange}
										required
										placeholder='example@mail.com'
									/>
								</div>
							</div>

							<div className='form-row'>
								<div className='form-group'>
									<label htmlFor='phone'>Телефон</label>
									<input
										type='tel'
										id='phone'
										name='phone'
										value={formData.phone}
										onChange={handleInputChange}
										placeholder='+375 (29) 000-00-00'
									/>
								</div>

								<div className='form-group'>
									<label htmlFor='position'>Желаемая должность *</label>
									<select
										id='position'
										name='position'
										value={formData.position}
										onChange={handleInputChange}
										required
									>
										<option value=''>Выберите должность</option>
										<option value='manager'>Менеджер</option>
										<option value='designer'>Дизайнер</option>
										<option value='creative'>Креативщик</option>
										<option value='editor'>Монтажер</option>
										<option value='teacher'>Преподаватель</option>
										<option value='other'>Другое</option>
									</select>
								</div>
							</div>

							<div className='form-group full-width'>
								<label htmlFor='experience'>Опыт работы *</label>
								<select
									id='experience'
									name='experience'
									value={formData.experience}
									onChange={handleInputChange}
									required
								>
									<option value=''>Выберите опыт</option>
									<option value='no-experience'>Без опыта</option>
									<option value='junior'>До 1 года</option>
									<option value='middle'>1-3 года</option>
									<option value='senior'>3+ года</option>
									<option value='lead'>5+ лет</option>
								</select>
							</div>

							<div className='form-group full-width'>
								<label htmlFor='message'>
									Почему вы хотите работать в ITCOURSE? *
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleInputChange}
									required
									rows='5'
									placeholder='Расскажите о себе, своих целях и почему вы хотите присоединиться к нашей команде...'
								></textarea>
							</div>

							<div className='form-submit'>
								<button type='submit' className='fancy'>
									<span className='text'>Отправить заявку</span>
								</button>
							</div>
						</form>
					)}
				</div>
			</section>

			{/* Секция преимуществ работы */}
			<section className='benefits-section'>
				<div className='section-header'>
					<h2>Почему работать в ITCOURSE — это круто</h2>
				</div>

				<div className='benefits-grid'>
					<div className='benefit-card'>
						<div className='benefit-icon'>💼</div>
						<h3>Гибкий график</h3>
						<p>Возможность работать удаленно и выбирать удобное время работы</p>
					</div>

					<div className='benefit-card'>
						<div className='benefit-icon'>📚</div>
						<h3>Обучение за счет компании</h3>
						<p>Бесплатные курсы и конференции для профессионального роста</p>
					</div>

					<div className='benefit-card'>
						<div className='benefit-icon'>🚀</div>
						<h3>Карьерный рост</h3>
						<p>Прозрачная система грейдов и регулярные повышения</p>
					</div>

					<div className='benefit-card'>
						<div className='benefit-icon'>👥</div>
						<h3>Сильная команда</h3>
						<p>Работайте с лучшими специалистами индустрии</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Sotrudniki
