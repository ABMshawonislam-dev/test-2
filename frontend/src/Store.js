import { configureStore } from "@reduxjs/toolkit"
import ListCrud from "./fetures/ListCrud"

export default configureStore({
  reducer: {
    crud: ListCrud,
  },
})
