export interface Todo {
  id: number
  name: string
  description: string
  dateСreation: Date
}

export type TodoWithoutDate = Omit<Todo, 'dateСreation'>
