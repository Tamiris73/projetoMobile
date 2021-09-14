import { ImageSourcePropType } from 'react-native'

export interface TarefaProps {
  id: number
  title: string
  image: ImageSourcePropType
  tarefa: {
    id: number
    descricao: string
    data: string
  }[]
}