import React from 'react'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Home from './HomePage';
import ESI from './pages/Esi';
import Header from './components/Header';
import ToolsList from './pages/ToolList';
import FileUpload from './FileUpload';

const App = () => {
  return (
  <Router>
    <Header/>

    {/* <Sidebar /> */}
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/esi' element={<ESI/>} />
      <Route path='/toolslist' element={<ToolsList />} />
      <Route path='/fileupload' element={<FileUpload/>} />
    </Routes>
  </Router>
  )
}

export default App;
