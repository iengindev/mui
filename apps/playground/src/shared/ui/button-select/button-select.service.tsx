import type { ButtonSelectPropsType, ButtonSelectEmitsType } from './button-select.types'

export class ButtonSelectService {
  constructor(public props: ButtonSelectPropsType, public ctx: ButtonSelectEmitsType) {}
}
