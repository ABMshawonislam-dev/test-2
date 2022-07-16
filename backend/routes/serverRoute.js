import express from "express"
import serverMode from "../model/serverMode.js"
const serverRouter = express.Router()

serverRouter.post("/delete", async (req, res) => {
  serverMode.findByIdAndDelete(req.body.id, (err, docs) => {
    err ? console.log(err) : `Delete: ${docs}`
  })
  // console.log(req.body.id)
})

serverRouter.post("/add", (req, res) => {
  const details = {
    task: req.body.users.task,
    durationtime: req.body.users.durationTime,
    date: req.body.users.date,
  }

  const tododetails = new serverMode(details)
  tododetails.save()
  console.log(req.body.users)
})

serverRouter.get("/get", async (req, res) => {
  const tododetails = await serverMode.find()
  res.send(tododetails)
})

serverRouter.put("/edit", (req, res) => {
  let updatedetails = {
    task: req.body.updateinfo.task,
    durationtime: req.body.updateinfo.durationTime,
    date: req.body.updateinfo.date,
  }
  serverMode.findByIdAndUpdate(
    req.body.updateinfo.id,
    updatedetails,
    (err, docs) => {
      err ? console.log(err) : `Updated: ${docs}`
    }
  )

  console.log(req.body.updateinfo.id)
})

export default serverRouter
