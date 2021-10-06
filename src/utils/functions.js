import { BASE_URL_IMAGE } from "./constants"

export const handleBuildEntireImageUrl = (endpoint) => {
  return `${BASE_URL_IMAGE}${endpoint}`
}