export interface IPlantationData {
  tpPlantedPlant: number | string
  isTransplanted: boolean
  tpTransplantDate: string | Date
}

export interface IFarmInput {
  id: string
  farmInputSeedBedPackId: string
  date: string | Date
  qty: number
  packName: string
}

export interface IEmerges {
  hasEmerged: boolean
  hasHarvest: boolean
  emergesDate: string | Date
  harvestDate: string | Date
}

export interface IDryings {
  hasStorage: boolean
  startedDrying: boolean
  dryings: {
    id: string
    rows: number
    time: number
    with: number
    length: number
    imageUrl: string
  }[]
}

export interface IPlantationType {
  id: string
  plantationData: IPlantationData
  farmInputs: IFarmInput[]
  emerges: IEmerges
  dryings: IDryings
}
