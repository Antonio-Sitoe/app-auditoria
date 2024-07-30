import { INurseriesDataReturn } from '@/@types/nurseries'

import { ActionReturn } from '@/@types/types'
import { api } from '@/lib/axios'

export const getActivityReferences = async <T>() => {
  try {
    const { data } = await api.get<T>('/v1/ref-activity')
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getUserInfo(campaignId: string) {
  try {
    const { data } = await api.get('/v4/users/profile/' + campaignId)
    return { data: data.data, error: null }
  } catch (error) {
    return { error, data: null }
  }
}

export const getCampaignsClient = async <T>() => {
  try {
    const { data } = await api.get<{ data: T[] }>(
      `/v4/campaigns/get/campaign-by-supervisor`,
    )
    return { data: data.data, error: null }
  } catch (err) {
    return { data: null, error: err }
  }
}

export async function getNursersDataByQrcode<T>({
  qrcode,
}: {
  qrcode: string
}): Promise<ActionReturn<T>> {
  try {
    const { data } = await api.get(`/v1/supervisors/get-nurseries/${qrcode}`)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
export async function getPlantationDataByQrcode<T>({
  qrcode,
}: {
  qrcode: string
}): Promise<ActionReturn<T>> {
  try {
    const { data } = await api.get(`/v1/supervisors/get-plantation/${qrcode}`)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
export async function updateNursersData<T>({
  id,
  data,
}: {
  id: string
  data: Partial<INurseriesDataReturn>
}): Promise<ActionReturn<T>> {
  try {
    const response = await api.put(`/v1/supervisors/nurseries/${id}`, data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function updatePlantationData<k>({
  id,
  data,
}: {
  id: string
  data: Partial<k>
}) {
  try {
    const response = await api.patch(`/v1/supervisors/plantation/${id}`, data)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getVisitDataByFarmerQrcode<T>({
  farmerId,
  campaignId,
}: {
  farmerId: string
  campaignId: string
}): Promise<ActionReturn<T>> {
  try {
    const { data } = await api.get(
      `/v1/supervisors/get-visits/${farmerId}/campaign/${campaignId}`,
    )
    return {
      data,
      error: null,
    }
  } catch (error) {
    console.error(error)
    return {
      data: null,
      error,
    }
  }
}

export async function getFarmerInputs<T>({
  type,
  campaignId,
}: {
  campaignId: string
  type: 'nurseries' | 'plantation'
}): Promise<ActionReturn<T>> {
  try {
    const { data } = await api.get(
      `/v1/campaigns/${campaignId}?setting=${type}`,
    )
    return {
      data,
      error: null,
    }
  } catch (error) {
    console.error(error)
    return {
      data: null,
      error,
    }
  }
}

export async function getFarmerByQrcode<T>({
  qrCode,
  campaignId,
  supervisorId,
}: {
  campaignId: string
  qrCode: string
  supervisorId: string
}): Promise<ActionReturn<T>> {
  try {
    const { data } = await api.get(
      `/v1/supervisors/${supervisorId}/get-farmer-by-qrcode/${qrCode}/campaign/${campaignId}`,
    )
    return {
      data: data?.data,
      error: null,
    }
  } catch (error) {
    console.error(error)
    return {
      data: null,
      error,
    }
  }
}

export async function getAuditData<T>({
  campaignId,
  supervisorId,
  limit,
  page,
}: {
  campaignId: string
  supervisorId: string
  page: number
  limit: number
}): Promise<T> {
  try {
    const { data } = await api.get(
      `/v1/supervisors/audit/${supervisorId}/campaign/${campaignId}?limit=${limit}&offset=${page}`,
    )
    return data?.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
