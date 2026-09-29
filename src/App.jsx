import {BrowserRouter} from "react-router-dom"
import{Routes} from "react-router-dom"
import {Route} from "react-router-dom"

import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Main from "./pages/Main"

function App() {
  return(
    <BrowserRouter>

    <Routes>

      <Route path= "/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp/>} ></Route>
      <Route path="/Main" element={<Main/>}></Route>


    </Routes>

  </BrowserRouter>
  )
}

  
export default App 
