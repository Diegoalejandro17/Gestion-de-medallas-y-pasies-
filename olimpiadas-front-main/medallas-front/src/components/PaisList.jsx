import React, { useEffect, useState } from 'react';
import { getPaises, createPais } from '../services/paissService';
import { Button, Modal, Form } from 'react-bootstrap';

const PaisList = () => {
  const [paises, setPaises] = useState([]);
  const [show, setShow] = useState(false);
  const [nuevoPais, setNuevoPais] = useState({ nombre: '', codigo: '' });

  useEffect(() => {
    cargarPaises();
  }, []);

  const cargarPaises = async () => {
    try {
      const data = await getPaises();
      if (Array.isArray(data)) {
        setPaises(data);
      } else {
        setPaises([]); // protección si no es array
        console.error('⚠️ La respuesta no es un array:', data);
      }
    } catch (error) {
      console.error('❌ Error al cargar países:', error);
      setPaises([]);
    }
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setNuevoPais({ nombre: '', codigo: '' });
  };

  const handleChange = (e) => {
    setNuevoPais({ ...nuevoPais, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPais(nuevoPais);
      handleClose();
      cargarPaises();
    } catch (error) {
      console.error('❌ Error al crear país:', error);
    }
  };

  return (
    <div className="card shadow p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>🌍 Lista de Países</h4>
        <Button variant="primary" onClick={handleShow}>Agregar País</Button>
      </div>

      {Array.isArray(paises) && paises.length === 0 ? (
        <p className="text-muted">No hay países registrados.</p>
      ) : (
        <ul className="list-group">
          {Array.isArray(paises) && paises.map((pais) => (
            <li key={pais.id} className="list-group-item d-flex justify-content-between align-items-center">
              {pais.nombre}
              <span className="badge bg-primary rounded-pill">{pais.codigo}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Modal para agregar país */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar País</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={nuevoPais.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Código (3 letras)</Form.Label>
              <Form.Control
                type="text"
                name="codigo"
                value={nuevoPais.codigo}
                onChange={handleChange}
                required
                maxLength={3}
              />
            </Form.Group>
            <Button variant="success" type="submit">Guardar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PaisList;
