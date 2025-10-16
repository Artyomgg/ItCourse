import { useState } from 'react'
import '../css/books.css'
import { informaticsBooks } from '../Data/informatikBooks.js'
import PDFReader from '../components/PDFReader'

function Books(props) {
	const [selectedGrade, setSelectedGrade] = useState('all')
	const [selectedPdf, setSelectedPdf] = useState(null)

	const filteredBooks =
		selectedGrade === 'all'
			? informaticsBooks
			: informaticsBooks.filter(book => book.class.includes(selectedGrade))

	const grades = ['all', '6 класс', '7 класс', '8 класс', '7-9 класс']

	const handlePdfOpen = (src, title) => {
		setSelectedPdf({ src, title })
		document.body.style.overflow = 'hidden'
	}

	const handleClosePdf = () => {
		setSelectedPdf(null)
		document.body.style.overflow = 'auto'
	}

	return (
		<div className='books-page'>
			{/* Герой секция */}
			<section className='books-hero'>
				<div className='conteiner'>
					<h1>📚 Учебники по информатике</h1>
					<p>
						Электронные версии учебников для 6-8 классов в свободном доступе
					</p>
				</div>
			</section>

			{/* Секция фильтров */}
			<section className='books-filter-section'>
				<div className='conteiner'>
					<h3 className='filter-title'>Выберите класс:</h3>
					<div className='filter-grid'>
						{grades.map(grade => (
							<button
								key={grade}
								className={`filter-btn ${
									selectedGrade === grade ? 'active' : ''
								}`}
								onClick={() => setSelectedGrade(grade)}
							>
								{grade === 'all' ? 'Все классы' : grade}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Сетка учебников */}
			<section className='books-grid-section'>
				<div className='conteiner'>
					<h2 className='books-grid-title'>Доступные учебники</h2>
					<p className='books-grid-subtitle'>
						Нажмите на учебник для комфортного чтения
					</p>

					<div className='books-grid'>
						{filteredBooks.map(book => (
							<div
								key={book.id}
								className='book-card'
								onClick={() => handlePdfOpen(book.src, book.title)}
							>
								<div className='book-card-header'>
									<img
										className='book-cover'
										src={`/img/books/class${book.class.charAt(0)}.jpg`}
										alt={book.title}
										onError={e => {
											e.target.src = '/img/books/default-book.jpg'
										}}
									/>
									<div className='book-info'>
										<h3 className='book-title'>{book.title}</h3>
										<span className='book-class'>{book.class}</span>
									</div>
								</div>

								<p className='book-description'>
									Открыть в удобной читалке с перелистыванием страниц
								</p>

								<div className='book-action'>
									<button className='open-book-btn'>📖 Читать</button>
								</div>
							</div>
						))}
					</div>

					{/* Сообщение если нет книг */}
					{filteredBooks.length === 0 && (
						<div className='no-books'>
							<div className='no-books-icon'>📚</div>
							<h3>Учебники не найдены</h3>
							<p>Для выбранного класса нет доступных учебников</p>
						</div>
					)}
				</div>
			</section>

			{/* Кастомная PDF читалка */}
			{selectedPdf && (
				<PDFReader
					pdfUrl={`/${selectedPdf.src}`}
					onClose={handleClosePdf}
					title={selectedPdf.title}
				/>
			)}
		</div>
	)
}

export default Books
