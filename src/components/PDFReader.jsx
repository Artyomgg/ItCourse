import React, { useCallback, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Настройка worker для PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

function PDFReader({ pdfUrl, onClose, title }) {
	const [numPages, setNumPages] = useState(null)
	const [pageNumber, setPageNumber] = useState(1)
	const [scale, setScale] = useState(1.2)

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages)
	}

	const goToPrevPage = () => {
		setPageNumber(prev => Math.max(prev - 1, 1))
	}

	const goToNextPage = () => {
		setPageNumber(prev => Math.min(prev + 1, numPages))
	}

	const zoomIn = () => {
		setScale(prev => Math.min(prev + 0.2, 3))
	}

	const zoomOut = () => {
		setScale(prev => Math.max(prev - 0.2, 0.5))
	}

	const resetZoom = () => {
		setScale(1.2)
	}

	// Закрытие по ESC
	const handleKeyDown = useCallback(
		e => {
			if (e.key === 'Escape') {
				onClose()
			} else if (e.key === 'ArrowLeft') {
				goToPrevPage()
			} else if (e.key === 'ArrowRight') {
				goToNextPage()
			}
		},
		[onClose]
	)

	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [handleKeyDown])

	return (
		<div className='pdf-reader-overlay'>
			<div className='pdf-reader-container'>
				{/* Header */}
				<div className='pdf-reader-header'>
					<div className='pdf-reader-title'>
						<h2>{title}</h2>
						<span className='page-info'>
							Страница {pageNumber} из {numPages || '--'}
						</span>
					</div>

					<div className='pdf-reader-controls'>
						<button
							className='control-btn zoom-out'
							onClick={zoomOut}
							title='Уменьшить'
						>
							🔍−
						</button>
						<button
							className='control-btn zoom-reset'
							onClick={resetZoom}
							title='Сбросить масштаб'
						>
							{Math.round(scale * 100)}%
						</button>
						<button
							className='control-btn zoom-in'
							onClick={zoomIn}
							title='Увеличить'
						>
							🔍+
						</button>

						<button
							className='control-btn download-btn'
							onClick={() => window.open(pdfUrl, '_blank')}
							title='Скачать PDF'
						>
							📥
						</button>

						<button
							className='control-btn close-btn'
							onClick={onClose}
							title='Закрыть (ESC)'
						>
							✕
						</button>
					</div>
				</div>

				{/* Navigation */}
				<div className='pdf-navigation'>
					<button
						className='nav-btn prev-btn'
						onClick={goToPrevPage}
						disabled={pageNumber <= 1}
					>
						← Назад
					</button>

					<div className='page-input-container'>
						<input
							type='number'
							min='1'
							max={numPages}
							value={pageNumber}
							onChange={e => {
								const newPage = parseInt(e.target.value)
								if (newPage >= 1 && newPage <= numPages) {
									setPageNumber(newPage)
								}
							}}
							className='page-input'
						/>
						<span> / {numPages || '--'}</span>
					</div>

					<button
						className='nav-btn next-btn'
						onClick={goToNextPage}
						disabled={pageNumber >= numPages}
					>
						Вперёд →
					</button>
				</div>

				{/* PDF Content */}
				<div className='pdf-content-wrapper'>
					<div className='pdf-page-container'>
						<Document
							file={pdfUrl}
							onLoadSuccess={onDocumentLoadSuccess}
							loading={
								<div className='pdf-loading'>
									<div className='loading-spinner'></div>
									<p>Загружаем учебник...</p>
								</div>
							}
							error={
								<div className='pdf-error'>
									<div className='error-icon'>❌</div>
									<h3>Ошибка загрузки PDF</h3>
									<p>Не удалось загрузить учебник. Попробуйте позже.</p>
									<button onClick={onClose} className='retry-btn'>
										Закрыть
									</button>
								</div>
							}
						>
							<Page
								pageNumber={pageNumber}
								scale={scale}
								renderTextLayer={true}
								renderAnnotationLayer={true}
								loading={
									<div className='page-loading'>Загружаем страницу...</div>
								}
							/>
						</Document>
					</div>
				</div>

				{/* Footer */}
				<div className='pdf-reader-footer'>
					<div className='footer-hints'>
						<span>🔄 Используйте колесо мыши для прокрутки</span>
						<span>⬅️ ➡️ Стрелки для перелистывания</span>
						<span>ESC для выхода</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PDFReader
