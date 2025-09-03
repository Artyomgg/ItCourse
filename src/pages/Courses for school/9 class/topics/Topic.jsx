import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import PencilLoader from '../../../../components/PencilLoader'
import { TopicsDataNineClass } from '../../../../Data/LessonsData.js'

function TopicsNi(props) {
	const { topicId } = useParams()	
	const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

	const currentTopic = TopicsDataNineClass[topicId]

	console.log(currentTopic);

	useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTopicSelect = (lesson) => {
    setTimeout(() => {
      navigate(lesson.path);
    }, 500);
  };

  const handleBack = () => {
    navigate('/courses/forschool/home/9');
  };

  if (isLoading) {
    return (
      <PencilLoader/>
    );
  }
	

	return (
		<>
			<div className="class-page" style={{ '--class-color': currentTopic.color }}>
				<header className="class-header">
        <button onClick={handleBack} className="back-button">
          ← Назад к выбору темы
        </button>
        <div className="class-title-section">
          <div className="class-icon-large">{currentTopic.icon}</div>
          <div>
            <h1>{currentTopic.title}</h1>
            <p>{currentTopic.description}</p>
            <br />
            <h2 style={{textAlign: 'start'}}>ОСНОВНЫЕ ТРЕБОВАНИЯ К РЕЗУЛЬТАТАМ УЧАЩИХСЯ:</h2>
            <br />
            <p>
              {currentTopic.whatWeWillLearn}
            </p>
          </div>
        </div>
      </header>
			<section className="topics-section">
					<h2>Уроки по теме "{currentTopic.title}"</h2>
          <p className="section-description">Выберите урок</p>
          <div className="topics-grid">
            {currentTopic.lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className="topic-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleTopicSelect(lesson)}
              >
                <div className="topic-header">
                  <div className="topic-icon">{lesson.icon}</div>
                  <h3>{lesson.title}</h3>
                </div>
                
                <p className="topic-description">{lesson.description}</p>

                <div className="topic-footer">
                  <button 
                    className="start-topic-btn"
                    style={{ backgroundColor: currentTopic.color }}
                  >
                    Начать изучение
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
			</div>
		</>
	);
}

export default TopicsNi;