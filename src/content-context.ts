import { createContext } from 'react'
import { ContentContextType } from './types'

export const ContentContext = createContext<ContentContextType>({
  content: undefined,
})