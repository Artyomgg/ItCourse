import { useParams } from 'react-router'
import { topicsData } from '../../../../Data/LessonData/8Class/TopicsData.js'
import { useState } from 'react'

const LessonRendererEi = () => {
    const { topicId, lessonId } = useParams()
    const [selectedImage, setSelectedImage] = useState(null)

    // Получаем данные урока
    const topic = topicsData[topicId]
    const lesson = topic?.lessons[lessonId]

    if (!topic || !lesson) {
        return <div>Урок не найден</div>
    }

    const { lessonContent } = lesson

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    return (
        <div className='lesson-container'>
            <header className='lesson-header'>
                <h1>
                    {topic.title} - {lesson.title}
                </h1>
                <span className='topic-icon'>{topic.icon}</span>
            </header>

            <main className='lesson-content'>
                {/* Рендерим основной контент */}
                {lessonContent.fullContent.map((item, index) => (
                    <div key={index} className='content-block'>
                        {item.h2 && <h2>{item.h2}</h2>}
                        {item.h3 && <h3>{item.h3}</h3>}
                        {item.p && <p>{item.p}</p>}
                    </div>
                ))}

                {/* Рендерим важные определения */}
                {lessonContent.boldText.length > 0 && (
                    <div className='definitions'>
                        <h3>Важные определения:</h3>
                        {lessonContent.boldText.map((text, index) => (
                            <p key={index} className='bold-text'>
                                <strong>{text}</strong>
                            </p>
                        ))}
                    </div>
                )}

                {/* Рендерим изображения в грид-сетке */}
                {lessonContent.image.length > 0 && (
                    <div className='images'>
                        <h3>Иллюстрации:</h3>
                        <div className='images-grid'>
                            {lessonContent.image.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={`/img/course/forschool/8/${imgSrc}`}
                                    alt={`Иллюстрация ${index + 1}`}
                                    className='lesson-image'
                                    onClick={() => openModal(`/img/course/forschool/8/${imgSrc}`)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Рендерим упражнения */}
                {lessonContent.exercises.length > 0 && (
                    <div className='exercises'>
                        <h2>Упражнения и вопросы</h2>
                        {lessonContent.exercises.map((exercise, index) => (
                            <div key={index} className='exercise'>
                                {exercise.h3 && <h3>{exercise.h3}</h3>}
                                {exercise.p && <p>{exercise.p}</p>}
                            </div>
                        ))}
                    </div>
                )}

                {/* Модальное окно для изображений */}
                {selectedImage && (
                    <div className='image-modal active' onClick={closeModal}>
                        <span className='close-modal' onClick={closeModal}>×</span>
                        <img 
                            src={selectedImage} 
                            alt="Увеличенное изображение" 
                            className='modal-image'
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}
            </main>
        </div>
    )
}

export default LessonRendererEi