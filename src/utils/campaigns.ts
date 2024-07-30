import { STATES } from '@/@types/types'

export const handleState = (state: STATES) => {
  const data = {
    toStart: 'Por iniciar',
    colleting: 'A recolher',
    ongoing: 'A decorrer',
    closed: 'Fechado',
  }
  return data[state]
}
