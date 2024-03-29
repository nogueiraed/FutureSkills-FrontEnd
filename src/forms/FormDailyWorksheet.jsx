import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function FormDW(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const url = "http://localhost:3001/entities/dailyWorksheet";
  const isEditing = props.location?.state?.isEditing;
  const editingDW = props.location?.state?.editingDW || {};

  const getCurrentDate = () => {
    let date = new Date();
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  function gravarDailyWorksheet(dailyWorksheet) {
    console.log("Dados enviados para o backend:", dailyWorksheet);
    fetch(url, {
      method: isEditing ? "PUT" : "POST",
      headers,
      body: JSON.stringify(dailyWorksheet),
    })
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Failed to save daily worksheet. Please try again later.");
        }
        return resposta.json();
      })
      .then((dados) => {
        console.log("Resposta do servidor:", dados);
        alert("Daily worksheet saved successfully");
        navigate("/DwList");
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        alert(error.message);
      });
  }

  const [validado, setValidado] = useState(false);

  const [dailyWorksheet, setDailyWorksheet] = useState({
    jobNumber: "",
    dailyWorksheetDate: getCurrentDate(),
    site: "",
    siteManager: "",
    teamLeader: "",
    cleaners: [{ name: "", timeIn: "", timeOut: "" }],
    contractType: "",
    workDescription: "",
    extraProduct: "",
    poNumber: "",
  });

  function manipularMudanca(e, index) {
    const { name, value } = e.target;
    const list = [...dailyWorksheet.cleaners];
    list[index][name] = value;
    setDailyWorksheet({ ...dailyWorksheet, cleaners: list });
    console.log("Alterações nos campos do formulário:", dailyWorksheet);
  }

  function adicionarLimpador() {
    setDailyWorksheet({
      ...dailyWorksheet,
      cleaners: [...dailyWorksheet.cleaners, { name: "", timeIn: "", timeOut: "" }],
    });
    console.log("Adicionado limpador. Estado atualizado:", dailyWorksheet);
  }

  function removerLimpador(index) {
    const list = [...dailyWorksheet.cleaners];
    list.splice(index, 1);
    setDailyWorksheet({ ...dailyWorksheet, cleaners: list });
    console.log("Removido limpador. Estado atualizado:", dailyWorksheet);
  }

  useEffect(() => {
    if (isEditing && Object.keys(editingDW).length !== 0) {
      console.log("Dados de edição recebidos:", editingDW);
      console.log("isEditing:", isEditing);
      console.log("Chaves em editingDW:", Object.keys(editingDW));
      setDailyWorksheet(prevState => ({
        ...prevState,
        ...editingDW,
        dailyWorksheetDate: editingDW.date ? editingDW.date.split('T')[0] : getCurrentDate(),
      }));
    }
  }, [isEditing, editingDW]);

  const manipulaEnvio = (event) => {
    console.log("Manipulando envio do formulário");
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const date = new Date(dailyWorksheet.dailyWorksheetDate);
      const formattedDate = date.toISOString().split('T')[0];
      setDailyWorksheet({ ...dailyWorksheet, dailyWorksheetDate: formattedDate });

      gravarDailyWorksheet(dailyWorksheet);
      setDailyWorksheet({
        jobNumber: "",
        dailyWorksheetDate: getCurrentDate(),
        site: "",
        siteManager: "",
        teamLeader: "",
        cleaners: [{ name: "", timeIn: "", timeOut: "" }],
        contractType: "",
        workDescription: "",
        extraProduct: "",
        poNumber: "",
      });
      setValidado(false);
    } else {
      setValidado(true);
    }

    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Container>
      <br />
      <h1 className="text-center">Daily Worksheet Form</h1>
      <br />

      <Form
        method="post"
        noValidate
        validated={validado}
        onSubmit={manipulaEnvio}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Job Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="jobNumber"
              value={dailyWorksheet.jobNumber}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, jobNumber: e.target.value })}
              placeholder="Enter Job Number"
            />
            <Form.Control.Feedback type="invalid">
              Please enter Job Number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              name="dailyWorksheetDate"
              value={dailyWorksheet.dailyWorksheetDate}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, dailyWorksheetDate: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the date.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Site</Form.Label>
            <Form.Control
              required
              type="text"
              name="site"
              value={dailyWorksheet.site}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, site: e.target.value })}
              placeholder="Enter Site"
            />
            <Form.Control.Feedback type="invalid">
              Please enter the site.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Site Manager</Form.Label>
            <Form.Control
              required
              type="text"
              name="siteManager"
              value={dailyWorksheet.siteManager}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, siteManager: e.target.value })}
              placeholder="Enter Site Manager"
            />
            <Form.Control.Feedback type="invalid">
              Please enter the Site Manager.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Team Leader</Form.Label>
            <Form.Control
              required
              as="select"
              name="teamLeader"
              value={dailyWorksheet.teamLeader}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, teamLeader: e.target.value })}
            >
              <option value="">Select...</option>
              <option value="Eduardo Nogueira">Eduardo Nogueira</option>
              <option value="Bruna Fonseca">Bruna Fonseca</option>
              <option value="Daniel Tavares">Daniel Tavares</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a Team Leader.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Contract Type</Form.Label>
            <Form.Control
              required
              as="select"
              name="contractType"
              value={dailyWorksheet.contractType}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, contractType: e.target.value })}
            >
              <option value="">Select...</option>
              <option value="contract hours">Contract Hours</option>
              <option value="variation of work">Variation of Work</option>
              <option value="charge up">Charge Up</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a Contract Type.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Work Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="workDescription"
              value={dailyWorksheet.workDescription}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, workDescription: e.target.value })}
              placeholder="Enter Work Description"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12">
            <Form.Label>Extra Products</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="extraProduct"
              value={dailyWorksheet.extraProduct}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, extraProduct: e.target.value })}
              placeholder="Enter Extra Products"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>PO Number</Form.Label>
            <Form.Control
              required
              type="text"
              name="poNumber"
              value={dailyWorksheet.poNumber}
              onChange={(e) => setDailyWorksheet({ ...dailyWorksheet, poNumber: e.target.value })}
              placeholder="Enter PO Number"
            />
            <Form.Control.Feedback type="invalid">
              Please enter PO Number.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        {/* Cleaners section */}
        <Row className="mb-3">
          <Col>
            <h4>Cleaners</h4>
            {dailyWorksheet.cleaners.map((cleaner, index) => (
              <React.Fragment key={index}>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      value={cleaner.name}
                      onChange={(e) => manipularMudanca(e, index)}
                      placeholder="Full Name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter the cleaner's name.
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Control
                      required
                      type="time"
                      name="timeIn"
                      value={cleaner.timeIn}
                      onChange={(e) => manipularMudanca(e, index)}
                      placeholder="Time In"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter the Time In.
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Control
                      required
                      type="time"
                      name="timeOut"
                      value={cleaner.timeOut}
                      onChange={(e) => manipularMudanca(e, index)}
                      placeholder="Time Out"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter the Time Out.
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Button variant="danger" onClick={() => removerLimpador(index)}>
                      X
                    </Button>
                  </Col>
                </Form.Group>
              </React.Fragment>
            ))}
          </Col>
        </Row>
        <Button variant="primary" onClick={adicionarLimpador}>
          Add Cleaner
        </Button>
        <br />
        <br />
        <Button variant="success" type="submit">
          {isEditing ? "Save Changes" : "Register"}
        </Button>
      </Form>
      <br />
    </Container>
  );
}
