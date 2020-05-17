const QUIZ_KEY = 'txt_quiz_log'

export const reset = () => localStorage.setItem(QUIZ_KEY, JSON.stringify([]))

export const insertKnownQuestion = (question: string) => {
    const stringifiedItems = localStorage.getItem(QUIZ_KEY)
    const items: string[] = JSON.parse(stringifiedItems || '[]') // init if not exist
    const newItems = [...items, question]
    localStorage.setItem(QUIZ_KEY, JSON.stringify(newItems))
}

export const alreadyKnown = (question: string) => {
    const stringifiedItems = localStorage.getItem(QUIZ_KEY)
    const items: string[] = JSON.parse(stringifiedItems || '[]') // init if not exist
    return items.includes(question)
}