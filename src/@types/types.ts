export interface PercentageData {
  qty: number
  percentage: number
  finishedNurseries: number
}

export interface Nurseries {
  qtyFarmerWithData: PercentageData
  qtyFarmerWithFarmInputs: PercentageData
  dropout: PercentageData
}

export interface Plantation {
  qtyFarmersPlanting: PercentageData
  qtyFarmersWithFarmInputs: PercentageData
  farmerProducersWith: PercentageData
  totalPlants: {
    qty: number
  }
  npkBought: {
    qty: number
  }
  qtyFarmersDropout: number
  qtyProducersProducing: number
  qtyFarmersWithSales: number
}

export interface IAgricultureData {
  qtyFarmerRegistered: number
  nurseries: Nurseries
  plantation: Plantation
}

export interface ActionReturn<T = null> {
  error: unknown
  data: T | null
}

export type IGetFarmerBySupervisorId = {
  name: string
  qty: number
  percentage?: number
}[]

export type STATES = 'toStart' | 'colleting' | 'ongoing' | 'closed'

export interface ICampaignProps {
  id: string
  state: STATES
  name: string
}
