export interface Insecticide {
  id: string
  date: string | Date
}

export interface NurseryTransplantPenalties {
  hasSown: boolean
  hasPruned: boolean
  hasPunished: boolean
  sdDate: string | Date
  rsDate: string | Date
  ctDate: string | Date
}

export interface FarmInput {
  id: string
  farmInputSeedBedPackId: string
  date: Date | string
  qty: number
  packName: string
}

export interface NurseriesData extends Partial<NurseryTransplantPenalties> {
  isReady: string
  bedsQty: number | string
  length: number | string
  width: number | string
  placeWithWater: string
  nurserieIsProtected: boolean
}

export interface INurseriesDataReturn {
  id: string
  nurseriesData: NurseriesData
  farmInputs: FarmInput[]
  nurseryTransplantPenalties: NurseryTransplantPenalties
  insecticides: Insecticide[]
}
