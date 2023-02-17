import { useState, useEffect } from 'react'

import Title from './components/Title'

const App = () => {

    const [quiz, setQuiz] = useState(false)

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/quiz')
            const json = response.json()
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
    <div>
      <Title/>

    </div>
  );
}


export default App;
