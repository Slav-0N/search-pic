import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";

export const fetchPictures = async (serchQuery, pageNumber) => {
  const { data } = await axios(
    `?q=${serchQuery}&page=${pageNumber}&key=36294375-9fa9664476d2bc95b254b24c2&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
