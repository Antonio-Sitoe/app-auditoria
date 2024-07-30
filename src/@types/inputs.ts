export interface InputsType {
  id: string
  packName: string
  packPrice: number
  unit: string
  qtyRecomend: number
  phase: string
  isUsed: boolean
}

export interface InputsReturn {
  data: {
    FarmInputseedbedPacks: InputsType[]
    FarmInputseedbedPacksPlantation: InputsType[]
  }
}
