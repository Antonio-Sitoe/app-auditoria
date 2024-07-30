import { Insecticide } from '@/@types/nurseries'
import dayjs from 'dayjs'

export function generateArray(length: number) {
  const array = new Array(length)
  for (let i = 0; i < length; i++) {
    array[i] = i
  }
  return array
}

export function ValideValue(value?: unknown) {
  if (value) {
    if (!Number.isNaN(Number(value))) {
      return Math.floor(Number(value))
    }
  }
  return 0
}

export function removeProperty<T extends object, K extends keyof T>(
  obj: T,
  properties: K | K[],
): Omit<T, K> {
  let result = { ...obj } as Omit<T, K>

  if (Array.isArray(properties)) {
    for (const property of properties) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [property]: _, ...rest } = result
      result = rest as Omit<T, K>
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [properties]: _, ...rest } = result
    result = rest as Omit<T, K>
  }

  return result as Omit<T, K>
}

export function formDate(inputString: string | Date | null | undefined) {
  if (typeof inputString !== 'string' || inputString.trim() === '') {
    return 'Não informado'
  }
  const date = dayjs(inputString)
  // Verifica se a data é válida
  if (date.isValid()) {
    // Retorna a data formatada (por exemplo, no formato 'DD/MM/YYYY')
    return date.format('DD/MM/YYYY')
  } else {
    // Se não for uma data válida, retorna "não informado"
    return String(inputString)
  }
}

export function fixV(value: string | number) {
  // Tenta converter o valor para um número
  const numberValue = Number(value)

  // Verifica se o número é válido e retorna o valor ou uma string vazia
  if (!isNaN(numberValue)) {
    return numberValue
  } else {
    return '0'
  }
}

export function getModifiedItems(
  oldArray: Insecticide[],
  newArray: Insecticide[],
): Insecticide[] {
  return newArray.filter((newItem) => {
    const oldItem = oldArray.find((item) => item.id === newItem.id)
    return oldItem && !dayjs(newItem.date).isSame(dayjs(oldItem.date), 'day')
  })
}

export function formatNumber(data: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
  return formatter.format(data)
}
