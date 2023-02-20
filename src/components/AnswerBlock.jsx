import {useEffect, useState} from "react";

const AnswerBlock = ({ answerOptions, chosenAnswers }) => {
    const [ result, setResult ] = useState(null)

    useEffect(() => {
        answerOptions.forEach(answer => {
            if (chosenAnswers.includes(answer.combination[0]) ||
                chosenAnswers.includes(answer.combination[1]) ||
                chosenAnswers.includes(answer.combination2)
            ) {
                setResult(answer)
            } else if (!result) {
                setResult(answerOptions[0])
            }
        })
    }, [])

    console.log(result)

    return <div></div>
}

export default AnswerBlock