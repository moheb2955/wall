import { Route, Routes } from 'react-router'
import Nav from './Routes/Nav';

function App() {
return (
<div className="App">
  <Routes>      
    <Route path='/' element={<Nav/>}>
      {/* <Route path='' element={< />} />
      <Route path='' element={< />} />
      <Route path='' element={< />} />
      <Route path='' element={< />} /> */}
    </Route>

    {/* 
    <Route path='' element='' />
    <Route path='' element={< />} />
    <Route path='' element={< />} />
    <Route path='' element={< />} />
    <Route path='' element={< />} /> 
    */}
  </Routes>
</div>
)}
export default App;
