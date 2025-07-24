import React, { useEffect, useState } from 'react';
import {
  getMedallas,
  createMedalla,
  updateMedalla,
  deleteMedalla,
} from '../services/medallaService';
import { getPaises } from '../services/paissService';
import { Modal, Button, Form } from 'react-bootstrap';

const MedallaList = () => {
  const [medallas, setMedallas] = useState([]);
  const [paises, setPaises] = useState([]);

  const [tipo, setTipo] = useState('');
  const [deporte, setDeporte] = useState('');
  const [paisId, setPaisId] = useState('');

  const [editando, setEditando] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [meds, ps] = await Promise.all([getMedallas(), getPaises()]);
      setMedallas(Array.isArray(meds) ? meds : []);
      setPaises(Array.isArray(ps) ? ps : []);
    } catch (error) {
      console.error('⚠️ Error cargando datos:', error);
      setMedallas([]);
      setPaises([]);
    }
  };

  const abrirModal = (medalla = null) => {
    if (medalla) {
      setEditando(medalla);
      setTipo(medalla.tipo);
      setDeporte(medalla.deporte);
      setPaisId(medalla.pais_id);
    } else {
      setEditando(null);
      setTipo('');
      setDeporte('');
      setPaisId('');
    }
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
    setEditando(null);
    setTipo('');
    setDeporte('');
    setPaisId('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { tipo, deporte, pais_id: paisId };

    try {
      if (editando) {
        await updateMedalla(editando.id, data);
      } else {
        await createMedalla(data);
      }
      cerrarModal();
      loadData();
    } catch (error) {
      alert('❌ Error al guardar medalla.');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('¿Eliminar esta medalla?')) {
      try {
        await deleteMedalla(id);
        loadData();
      } catch (error) {
        alert('❌ Error al eliminar medalla.');
      }
    }
  };

  return (
    <div className="card shadow p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>🏅 Lista de Medallas</h4>
        <Button variant="primary" onClick={() => abrirModal()}>Agregar Medalla</Button>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Tipo</th>
            <th>Deporte</th>
            <th>País</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(medallas) && medallas.length > 0 ? (
            medallas.map((medalla) => (
              <tr key={medalla.id}>
                <td>{medalla.tipo}</td>
                <td>{medalla.deporte}</td>
                <td>{medalla.pais?.nombre || 'Sin país'}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => abrirModal(medalla)}>Editar</Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(medalla.id)}>Eliminar</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="4">No hay medallas registradas.</td></tr>
          )}
        </tbody>
      </table>

      {/* Modal de Bootstrap */}
      <Modal show={mostrarModal} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>{editando ? 'Editar Medalla' : 'Agregar Medalla'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                type="text"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                placeholder="oro, plata, bronce"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Deporte</Form.Label>
              <Form.Control
                type="text"
                value={deporte}
                onChange={(e) => setDeporte(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>País</Form.Label>
              <Form.Select value={paisId} onChange={(e) => setPaisId(e.target.value)} required>
                <option value="">Selecciona un país</option>
                {paises.map((pais) => (
                  <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={cerrarModal} className="me-2">
                Cancelar
              </Button>
              <Button variant="success" type="submit">
                {editando ? 'Actualizar' : 'Agregar'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MedallaList;
