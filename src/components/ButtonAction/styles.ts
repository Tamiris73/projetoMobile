import styled, { css } from 'styled-components/native'
import colors from '../../styles/colors'
import { ButtonStyleProps } from "../../interfaces/ButtonStyle.interface"

const colorVariations = {
  edit: css`
    background-color: ${colors.green};
  `,
  remove: css`
    background-color: ${colors.black};
  `
}

export const ButtonStyle = styled.TouchableOpacity<ButtonStyleProps>`
  ${(props) => colorVariations[props.type || "edit"]}
  border-radius: 30px;
  margin: 10px;
  padding: 10px;
  font-size: 18px;
`
