import { QuestionListProp, QuestionProp } from '../types/types'

export function QuestionContainer({ questions, tag }: QuestionListProp) {
  return (
    <div className='questions'>
      <h2>{tag}</h2>
      <ul>
        {questions.map((question) => (
          <Question key={question} question={question} />
        ))}
      </ul>
    </div>
  )
}

export function Question({ question }: QuestionProp) {
  return <li className='question'>{question}</li>
}
