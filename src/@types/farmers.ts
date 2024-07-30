export interface IFarmerType {
  id: string
  name: string
  farmerNr: string
  qrCode: string
  createdAt: string
}

export interface Datum {
  type: string
  createdAt: string
}

export interface IVisitDataType {
  totalVisits: number
  totalPlantationVisits: number
  totalNurseriesVisits: number
  data: Datum[]
}
