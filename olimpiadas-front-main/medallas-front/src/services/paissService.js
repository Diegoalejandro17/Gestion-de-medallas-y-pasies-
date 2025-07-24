import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getPaises = async () => {
  const response = await axios.get(`${API_URL}/paises`);
  return response.data; // ← importante que sea directamente data
};

/**
 * Crear un nuevo país.
 * Método: POST - /paises
 */
export const createPais = async (pais) => {
  const response = await axios.post(`${API_URL}/paises`, pais);
  return response.data.data;
};

/**
 * Actualizar un país.
 * Método: PUT - /paises/:id
 */
export const updatePais = async (id, pais) => {
  const response = await axios.put(`${API_URL}/paises/${id}`, pais);
  return response.data.data;
};

/**
 * Eliminar un país.
 * Método: DELETE - /paises/:id
 */
export const deletePais = async (id) => {
  await axios.delete(`${API_URL}/paises/${id}`);
};

/**
 * Obtener un país y sus medallas.
 * Método: GET - /paises/:id
 */
export const getPaisConMedallas = async (id) => {
  const response = await axios.get(`${API_URL}/paises/${id}`);
  return response.data.data;
};
