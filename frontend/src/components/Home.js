import React, { Component } from "react"
import { Container, Button, Col } from "react-bootstrap"
import TodoList from "./TodoList"

const Home = () => {
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
            <Button
              variant="danger"
              style={{ marginRight: "20px", width: "150px" }}
            >
              Login
            </Button>
            <Button variant="danger" style={{ width: "150px" }}>
              SignUp
            </Button>
          </Col>
        </Container>
      </div>

      <TodoList />
    </>
  )
}

export default Home
