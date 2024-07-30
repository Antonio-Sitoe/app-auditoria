import { ActionReturn, IGetFarmerBySupervisorId } from '@/@types/types'
import { api } from '@/lib/axios'

export async function getStaticsData({
  supervisorId,
  campaignId,
}: {
  supervisorId: string
  campaignId: string
}) {
  try {
    const { data } = await api.get(
      `/v1/supervisors/${supervisorId}/campaign/${campaignId}`,
    )
    return {
      data: data.data,
      error: null,
    }
  } catch (error) {
    return { data: null, error }
  }
}

export async function getFarmerData({
  supervisorId,
  campaignId,
  routeParams,
}: {
  supervisorId: string
  campaignId: string
  routeParams: string
}): Promise<ActionReturn<IGetFarmerBySupervisorId>> {
  try {
    const { data } = await api.get(
      `/v1/supervisors/${routeParams}/${supervisorId}/campaign/${campaignId}`,
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

export async function getTechnicians<T>({
  supervisorId,
  campaignId,
}: {
  supervisorId: string
  campaignId: string
}): Promise<ActionReturn<T>> {
  try {
    const { data } = await api.get(
      `/v1/supervisors/get-technicians/${supervisorId}/campaign/${campaignId}`,
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

export async function getFarmersByTechnicianId<T>({
  technicianId,
  campaignId,
}: {
  technicianId: string
  campaignId: string
}): Promise<ActionReturn<T>> {
  try {
    const { data } = await api.get(
      `/v1/supervisors/get-farmers/${technicianId}/campaign/${campaignId}`,
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
