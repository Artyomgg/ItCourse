import { useState } from 'react'
import { informaticsBooks } from '../Data/informatikBooks.js'

function Books(props) {
	const [selectedGrade, setSelectedGrade] = useState('all')

	const filteredBooks =
		selectedGrade === 'all'
			? informaticsBooks
			: informaticsBooks.filter(book => book.class.includes(selectedGrade))

	const grades = ['all', '6 класс', '7 класс', '8 класс', '7-9 класс']

	const handlePdfOpen = src => {
		window.open(src, '_blank')
	}

	return (
		<div className='books-container'>
			{/* Заголовок секции */}
			<section id='hello'>
				<div className='conteiner'>
					<h1>📚 Учебники по информатике</h1>
					<p>Электронные версии учебников для 6-8 классов</p>
				</div>
			</section>

			{/* Фильтр по классам */}
			<section className='books-filter'>
				<div className='conteiner'>
					<div className='filter-buttons'>
						<h3>Фильтр по классам:</h3>
						<div className='filter-buttons-container'>
							{grades.map(grade => (
								<button
									key={grade}
									className={`fancy ${selectedGrade === grade ? 'active' : ''}`}
									onClick={() => setSelectedGrade(grade)}
								>
									<span className='text'>
										{grade === 'all' ? 'Все классы' : grade}
									</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Сетка книг */}
			<section id='courses'>
				<h2>Доступные учебники</h2>
				<h3>Нажмите на учебник для просмотра в новой вкладке</h3>

				<div className='books-grid'>
					{filteredBooks.map(book => (
						<div
							key={book.id}
							className='book-card'
							onClick={() => handlePdfOpen(book.src)}
						>
							<img
								className='book-card-image'
								src={`/img/books/class${book.class.charAt(0)}.jpg`}
								alt={book.title}
								onError={e => {
									e.target.src = '/img/books/default-book.jpg'
								}}
							/>

							<div className='book-card-title'>{book.title}</div>
							<div className='book-card-class'>{book.class}</div>

							<div className='book-card-description'>
								Нажмите чтобы открыть учебник
							</div>

							<button className='book-card-button'>📖 Открыть учебник</button>
						</div>
					))}
				</div>

				{/* Сообщение если нет книг */}
				{filteredBooks.length === 0 && (
					<div className='no-books-message'>
						📚 Учебники для выбранного класса не найдены
					</div>
				)}
			</section>
		</div>
	)
}

export default Books
