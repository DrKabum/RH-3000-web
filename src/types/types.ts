export type HRQuestion = {
  id: number
  competency: string
  question: string
  whatToLook: string
}

export type CheckBoxProps = {
  tag: string
  add: (tag: string) => void
  remove: (tag: string) => void
}

export type Tag = {
  name: string
  checked: boolean
}

export type QuestionListProp = {
  tag: string
  questions: string[]
}

export type QuestionProp = {
  question: string
}
