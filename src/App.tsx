import { useState, useEffect } from 'react'
import { HRQuestion } from './types/types'
import './App.css'

import { CheckBox } from './components/checkbox'
import { QuestionContainer } from './components/question'

function App() {
  const MAX_QUESTION = 3
  const [questions, setQuestions] = useState<HRQuestion[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const url = ''

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((questions: HRQuestion[]) => {
        const tagList: string[] = []

        for (const question of questions) {
          if (!tagList.find((tag) => tag === question.competency))
            tagList.push(question.competency)
        }

        setTags(tagList)
        setQuestions(questions)
      })
      .catch(console.log)
  }, [])

  const addSelectedTag = (tag: string) =>
    setSelectedTags((prev) => [...prev, tag])

  const removeSelectedTag = (tag: string) =>
    setSelectedTags((prev) => prev.filter((prevTag) => prevTag !== tag))

  const getQuestions = (tag: string) => {
    const tagFilteredQuestions = questions
      .filter((question) => question.competency === tag)
      .map((question) => question.question)

    const indexes: number[] = []

    const max =
      MAX_QUESTION > tagFilteredQuestions.length
        ? tagFilteredQuestions.length
        : MAX_QUESTION

    do {
      const index = Math.floor(Math.random() * tagFilteredQuestions.length)
      if (!indexes.includes(index)) indexes.push(index)
    } while (indexes.length < max)

    return indexes.map((index) => tagFilteredQuestions[index])
  }

  return (
    <div className='container'>
      <h1>HR 3000</h1>
      <p>Select tags in the window below, and get your questionnaire</p>

      <div className='main-container'>
        <main className='main'>
          {selectedTags &&
            selectedTags.map((tag) => (
              <QuestionContainer
                tag={tag}
                key={crypto.randomUUID()}
                questions={getQuestions(tag)}
              />
            ))}
        </main>

        <aside className='side'>
          {tags &&
            tags.map((tag) => (
              <CheckBox
                key={tag}
                tag={tag}
                add={addSelectedTag}
                remove={removeSelectedTag}
              />
            ))}
        </aside>
      </div>
    </div>
  )
}

export default App
