const QuestionBlock = ({
                           question,
                           quizItemId,
                           setChosenAnswerItems,
                           chosenAnswerItems,
                           unansweredQuestionIds,
                           setUnansweredQuestionIds
}) => {

    const handleClick = () => {
        setChosenAnswerItems((prevState) => [...prevState, question.text])
        setUnansweredQuestionIds(unansweredQuestionIds.filter((id) => id !== quizItemId))
    }

    return (
        <button
            className="question-block"
            onClick={handleClick}
            // disabled={!chosenAnswerItems.include(question.text)}
        >
            <img src={question.image} alt={question.alt}/>
            <h3>{question.text}</h3>
            <p>
                <a href={question.url}>{question.credit} </a>
                <a href="https://www.unsplash.com">Unsplash</a>
            </p>
        </button>
    )
}

export default QuestionBlock