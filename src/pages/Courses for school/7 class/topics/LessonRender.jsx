import { useState } from 'react'
import { useParams } from 'react-router'
import { topicsData } from '../../../../Data/LessonData/7Class/TopicsData.js'

const LessonRendererSev = () => {
	const { topicId, lessonId } = useParams()
	const [selectedImage, setSelectedImage] = useState(null)

	// Получаем данные урока
	const topic = topicsData[topicId]
	const lesson = topic?.lessons[lessonId]

	if (!topic || !lesson) {
		return <div>Урок не найден</div>
	}

	const { lessonContent, src } = lesson

	const openModal = imgSrc => {
		setSelectedImage(imgSrc)
	}

	const closeModal = () => {
		setSelectedImage(null)
	}

	// Проверяем, является ли src массивом или одиночным значением
	const renderVideoContent = () => {
		if (Array.isArray(src)) {
			// Если это массив видео
			return (
				<div className='videos-container'>
					{src.map((video, index) => (
						<div key={index} className='video-block'>
							<h3>Видео {index + 1}</h3>
							<iframe
								width='560'
								height='315'
								src={video.src}
								title={`YouTube video player ${index + 1}`}
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
							></iframe>
						</div>
					))}
				</div>
			)
		} else {
			// Если это одиночное видео
			return (
				<div className='block-video'>
					<iframe
						width='560'
						height='315'
						src={src}
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
					></iframe>
				</div>
			)
		}
	}

	return (
		<div className='lesson-container'>
			<header className='lesson-header'>
				<h1>
					{topic.title} - {lesson.title}
				</h1>
				<span className='topic-icon'>{topic.icon}</span>
			</header>

			{renderVideoContent()}
		</div>
	)
}

export default LessonRendererSev