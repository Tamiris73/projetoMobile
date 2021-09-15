import { ImageSourcePropType } from "react-native";
import { TarefaProps } from "./Tarefa.interface";
import { ButtonProps } from "./Button.interface"

export interface ListaParamProps extends TarefaProps {
  id: number
  descricao: string
  data: string
}

export interface ListaProps extends ButtonProps {
  buttonEdit: (item: ListaParamProps) => void
  buttonRemove: (item: ListaParamProps) => void
  tarefa: {
    id: number
    descricao: string
    data: string
  }[]
}

