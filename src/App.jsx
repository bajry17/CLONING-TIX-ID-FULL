import { useState } from "react"
import { Routes, Route} from "react-router-dom";
import Careers from "./pages/careers";
import Dashboard from "./pages/dashboard";
import TixEvent from "./pages/tixevents";
import TixNow from "./pages/tixnow";

function App()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/tixnow" element={<TixNow/>}/>
        <Route path="/careers" element={<Careers/>}></Route>
        <Route path="/tix-events" element={<TixEvent/>}></Route>
      </Routes>
    </> 
  )
}

export default App