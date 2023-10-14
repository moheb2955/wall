import { Route, Routes } from 'react-router'
import Nav from './Routes/Nav';
import FAQ from './Routes/FAQ';
import Home from './Routes/Home';
import Paperwallet from './Routes/Paperwallet';
import Mobilewallet from './Routes/Mobilewallet';
import Webwallet from './Routes/Webwallet';
// import FAQ from './Routes/FAQ';
// import FAQ from './Routes/FAQ';

function App() {
return (
<div className="App">
  <Routes>      
    <Route path='/' element={<Nav/>}>
      <Route path='' element={<Home />} />
      <Route path='FAQ' element={<FAQ />} />
      <Route path='Paperwallet' element={<Paperwallet />} />
      <Route path='Webwallet' element={<Webwallet />} />
      <Route path='Mobilewallet' element={<Mobilewallet />} />
    </Route>

    {/* 
    <Route path='' element={< />} />
    <Route path='' element={< />} />
    <Route path='' element={< />} /> 
    */}
  </Routes>
</div>
)}
export default App;
