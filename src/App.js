import { useState, useEffect } from 'react'

import Title from './components/Title'
import QuestionsBlock from './components/QuestionsBlock'

const App = () => {

    const [quiz, setQuiz] = useState(null)
    const [chosenAnswerItems, setChosenAnswerItems] = useState([])
    const [unansweredQuestionIds, setUnansweredQuestionIds] = useState(null)

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

    useEffect(() => {
        const unansweredIds = quiz?.content.map(({ id }) => id)
        setUnansweredQuestionIds(unansweredIds)
    }, [quiz])

    useEffect(() => {
        if (unansweredQuestionIds) {
            if (unansweredQuestionIds.length <= 0 && chosenAnswerItems.length >= 1) {
                // scroll to answer block
            }
            // scroll to highest unanswered question id
            const highestId = Math.min(...unansweredQuestionIds)
            const highestElement = document.getElementById(highestId)
            highestElement?.scrollIntoView({ behavior: "smooth"})
        }
    }, [unansweredQuestionIds, chosenAnswerItems])

    console.log(quiz)

    console.log(chosenAnswerItems)

    console.log(unansweredQuestionIds)

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
        {quiz && quiz?.content.map(contentItem => (
            <QuestionsBlock
                key={contentItem.id}
                quizItem={contentItem}
                setChosenAnswerItems={setChosenAnswerItems}
                chosenAnswerItems={chosenAnswerItems}
                setUnansweredQuestionIds={setUnansweredQuestionIds}
                unansweredQuestionIds={unansweredQuestionIds}
            />
        ))}
    </div>
  );
}


export default App;
