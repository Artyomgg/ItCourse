import React from 'react'

function Vscode(props) {
	return (
		<>
			<div className='home-of-course'>
				<h3>Установка VS CODE</h3>
				<p>
					<b>Редактор кода</b> - это инструмент, который позволяет вам писать,
					редактировать и сохранять код. Выбор правильного и подходящего именно
					вам редактора кода в значительной степени улучшит вашу скорость
					написания кода, его качество, производительность и сделает процесс
					кодирования более приятным и удобным.
				</p>
				<p>
					<b>Visual Studio Code</b> - мощный, но при этом легкий редактор с
					активным сообществом и множеством расширений. Этот редактор является
					бесплатным и отлично подходит как для новичков, так и для опытных
					разработчиков. Именно его мы и будем разбирать и использовать.
				</p>
				<h3>Установка VS Code</h3>
				<p>
					Наиболее оптимальным выбором для начала разработки будет Visual Studio
					Code. Разберём, как его установить и настроить.
				</p>
				<ul className='ul'>
					<li>
						<h4>1. Установка на Windows</h4>
						<h5>
							Скачать
							<a
								href='https://code.visualstudio.com/download'
								target='_blank'
								rel='noopener noreferrer'
							>
								установщик
							</a>
						</h5>
					</li>
					<li>
						<h4>2. Установка на macOS</h4>
						<h5>
							Скачать
							<a
								href='https://code.visualstudio.com/download'
								target='_blank'
								rel='noopener noreferrer'
							>
								установочный файл
							</a>
						</h5>
						<h5>Открыть папку с загрузками и найти скачанный архив.</h5>
						<h5>Извлечь содержимое и запустить приложение.</h5>
						<h5>Перетащить Visual Studio Code.app в папку Программы.</h5>
						<h5>Теперь приложение можно запускать из меню приложений.</h5>
					</li>
					<li>
						<h4>3. Установка на Linux</h4>
						<h5>
							Скачать
							<a
								href='https://code.visualstudio.com/download'
								target='_blank'
								rel='noopener noreferrer'
							>
								установщик
							</a>
							, подходящий к дистрибутиву.
						</h5>
						<h5>Запустить файл и следовать инструкции.</h5>
					</li>
				</ul>
				<div
					style={{
						flexDirection: 'column',
						display: 'flex',
						alignItems: 'flex-start',
					}}
				>
					<a
						href='https://www.youtube.com/watch?v=SE0_wdokumg'
						target='_blank'
						rel='noopener noreferrer'
					>
						Подробный гайд по установке, настройке и работе с VS Code с нуля
					</a>
					<br />
					<a
						href='https://www.youtube.com/watch?v=zR9AwQMaQWE'
						target='_blank'
						rel='noopener noreferrer'
					>
						Неплохой гайд по кастомизации и всяким фичам для VS Code
					</a>
					<br />
					<a
						href='https://code.visualstudio.com/docs'
						target='_blank'
						rel='noopener noreferrer'
					>
						Официальная документация VS Code
					</a>
				</div>
			</div>
		</>
	)
}

export default Vscode
