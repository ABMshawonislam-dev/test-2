import React, { useEffect, useState } from "react"
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Table,
  Modal,
} from "react-bootstrap"
import { FaPlus } from "react-icons/fa"
import { AiFillEdit } from "react-icons/ai"
import { BsFillTrashFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import {
  addData,
  getData,
  info,
  deleteData,
  updateData,
} from "../fetures/ListCrud"

const TodoList = () => {
  const [task, setTask] = useState("")
  const [durationTime, setDurationTime] = useState("")
  const [show, setShow] = useState(false)
  const [updateshow, setUpdateshow] = useState("")

  // console.log(updateshow._id)

  let dispatch = useDispatch()
  let data = useSelector(getData)

  const handleClose = () => setShow(false)
  const handleShow = (id) => {
    console.log(id)
    setShow(true)

    setUpdateshow(id)
  }

  let infoData = data.payload.crud.value
  // console.log(data.payload.crud.value)

  const today = new Date()
  const date =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear()

  let inputData = {
    task: task,
    durationTime: durationTime,
    date: date,
  }

  useEffect(() => {
    dispatch(info())
  }, [])

  let handleUpdate = {
    id: updateshow._id,
    task: task,
    durationtime: durationTime,
    date: date,
  }
  return (
    <>
      <div style={{ height: "100vh", height: "100%" }}>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Col
            lg={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
              width: "auto",
            }}
          >
            <div>
              <h1
                className="text-center"
                style={{
                  color: "#fff",
                  fontSize: "50px",
                }}
              >
                Musa Kazim
              </h1>
              <div className="text-center mt-3 mb-5">
                <Button variant="danger">Logout</Button>
              </div>
              <Form>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder="Task"
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Duration in Hour"
                      onChange={(e) => setDurationTime(e.target.value)}
                    />
                  </Col>

                  <FaPlus
                    onClick={() => dispatch(addData(inputData))}
                    style={{
                      width: "50px",
                      color: "#fff",
                      fontSize: "35px",
                      cursor: "pointer",
                    }}
                  />
                </Row>
              </Form>

              <Table className="mt-5" style={{ color: "#fff" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Duration in Hour</th>
                    <th>Creation date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {infoData.map((item) =>
                    item.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.task}</td>
                        <td style={{ textAlign: "center" }}>
                          {data.durationtime}
                        </td>
                        <td style={{ textAlign: "center" }}>{data.date}</td>
                        <td>
                          <AiFillEdit
                            onClick={() => {
                              handleShow(data)
                            }}
                            style={{
                              width: "40px",
                              color: "#fff",
                              fontSize: "25px",
                              cursor: "pointer",
                            }}
                          />
                          <BsFillTrashFill
                            onClick={() => {
                              dispatch(deleteData(data._id))
                            }}
                            className="ms-4"
                            style={{
                              width: "40px",
                              color: "#fff",
                              fontSize: "25px",
                              cursor: "pointer",
                            }}
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Control
                placeholder={updateshow.task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder={updateshow.durationtime}
                onChange={(e) => setDurationTime(e.target.value)}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(updateData(handleUpdate))
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TodoList
