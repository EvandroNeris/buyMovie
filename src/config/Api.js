import { BASE_URL } from "../utils/constants"

export const handleRequest = async (endpoint, method = 'GET', body = {}) => {
  const request = {
    method,
    body
  }

  method === 'GET' && delete request.body;

  const response = await fetch(`${BASE_URL}${endpoint}`, request);

  const json = await response.json();

  return json;
}