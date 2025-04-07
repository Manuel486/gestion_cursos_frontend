import axios from "axios";

export const coursesApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: process.env.NEXT_PUBLIC_AUTH_HEADER,
  },
});


export const getCourses = async () => {
  const { data } = await coursesApi.get();
  return data;
};

export const getCourseById = async (id) => {
  const {data} = await coursesApi.get(`/${id}/`)
  return data;
}

export const createCourse = async (course) => {
  const { data } = await coursesApi.post("/", course);
  return data;
};

export const updateCourse = async (id, course) => {
  const { data } = await coursesApi.put(`${id}/`, course);
  return data;
};

export const deleteCourse = async (id) => {
  const { data } = await coursesApi.delete(`${id}/`);
  return data;
};
