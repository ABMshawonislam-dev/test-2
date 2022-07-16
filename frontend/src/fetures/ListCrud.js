import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const listCrud = createSlice({
  name: "LIST_CRUD",
  initialState: {
    value: [],
  },
  reducers: {
    addData: (state, action) => {
      axios.post("http://localhost:4001/add", {
        users: action.payload,
      })
      console.log(action.payload)
    },

    getData: (state, action) => {
      state.value = [action.payload]
    },

    deleteData: (state, action) => {
      axios.post("http://localhost:4001/delete", {
        id: action.payload,
      })
      console.log(action.payload)
    },

    updateData: (state, action) => {
      axios.put("http://localhost:4001/edit", {
        updateinfo: action.payload,
      })

      console.log(action.payload)
    },
  },
})

export let info = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:4001/get")
    dispatch(getData(response.data))
  } catch (err) {
    throw new Error(err)
  }
}

export const { addData, getData, deleteData, updateData } = listCrud.actions

export default listCrud.reducer
