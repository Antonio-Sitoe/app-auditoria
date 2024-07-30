interface Area {
  id: string
  name: string
}

export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  username: string
  isActive: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  type: string[]
  sectorId: string
  areaName: Area[]
  sectorName: string
  sectorsId: string
  supervisorId: string
}
