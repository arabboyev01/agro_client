import { MAIN_URL } from "@/config"

export const getMethod = async ({ queryKey }: { queryKey: string[] }) => {
      const mainUrl = `${MAIN_URL}/${queryKey[1]}/?search=${queryKey[2]}`

      const response: any = await fetch(mainUrl)
      const res = await response.json()
      return await res
}
export const getData = async (endpoint: string) => {
      const mainUrl = `${MAIN_URL}/${endpoint}`
      console.log(mainUrl)

      const response: any = await fetch(mainUrl)
      const res = await response.json()
      return await res
}


