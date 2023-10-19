// components/QuestionForm.tsx

'use client'
import React, { useState } from 'react'

const QuestionForm = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const url = 'https://open-ai21.p.rapidapi.com/qa'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '2646878456mshbd1d8c2e78ddee4p19813djsn0d1d4503ce73',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
      },
      body: JSON.stringify({
        question,
        context: 'Your context goes here' // Add your context here
      })
    }

    try {
      const response = await fetch(url, options)
      const result = await response.text()
      setAnswer(result)
    } catch (error) {
      console.error(error)
      setAnswer('Error occurred while fetching data')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ask a Question:
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <strong>Answer:</strong>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default QuestionForm
