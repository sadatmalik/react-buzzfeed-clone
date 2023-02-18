import { useState, useEffect } from 'react'

import Title from './components/Title'
import QuestionsBlock from './components/QuestionsBlock'

const App = () => {

    const [quiz, setQuiz] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/quiz')
            const json = await response.json()
            setQuiz(json)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(quiz)

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
        {quiz && quiz?.content.map(contentItem => (
            <QuestionsBlock
                key={contentItem.id}
                quizItem={contentItem}
            />
        ))}
    </div>
  );
}


export default App;
