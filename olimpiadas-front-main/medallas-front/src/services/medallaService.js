// Importamos la librería axios para realizar peticiones HTTP
import axios from 'axios';

// Obtenemos la URL base de la API desde las variables de entorno (.env)
const API_URL = import.meta.env.VITE_API_URL;

/**
 * Obtiene todas las medallas desde la API.
 * Utiliza GET a la ruta /medallas
 *
 * @returns {Promise<Array>} Lista de medallas
 */
export const getMedallas = async () => {
  const response = await axios.get(`${API_URL}/medallas`);
  return response.data; // ← Corregido
};

/**
 * Crea una nueva medalla.
 * Utiliza POST a /medallas con el cuerpo del objeto medalla.
 *
 * @param {Object} medalla - Objeto con tipo, deporte y pais_id
 * @returns {Promise<Object>} La medalla recién creada
 */
export const createMedalla = async (medalla) => {
  const response = await axios.post(`${API_URL}/medallas`, medalla);
  return response.data; // ← Corregido
};

/**
 * Actualiza una medalla existente por su ID.
 * Utiliza PUT a /medallas/:id
 *
 * @param {number|string} id - ID de la medalla a actualizar
 * @param {Object} medalla - Objeto actualizado con tipo, deporte y pais_id
 * @returns {Promise<Object>} La medalla actualizada
 */
export const updateMedalla = async (id, medalla) => {
  const response = await axios.put(`${API_URL}/medallas/${id}`, medalla);
  return response.data; // ← Corregido
};

/**
 * Elimina una medalla por su ID.
 * Utiliza DELETE a /medallas/:id
 *
 * @param {number|string} id - ID de la medalla a eliminar
 * @returns {Promise<void>}
 */
export const deleteMedalla = async (id) => {
  await axios.delete(`${API_URL}/medallas/${id}`);
};
