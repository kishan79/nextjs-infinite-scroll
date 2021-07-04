import { API_URL, ACCESS_KEY } from "../../config/config";

export const getPhotos = async (count = 10) => {
  const url = `?client_id=${ACCESS_KEY}&count=${count}&orientation=portrait`;
  const apiData = await fetch(`${API_URL}/photos/random` + url);
  const responseJson = await apiData.json();
  return responseJson;
};
