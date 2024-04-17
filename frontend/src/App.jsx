import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import AddData from './components/AddData';
import EditData from './components/EditData';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/add' element={<AddData/>}/>
        <Route path='/edit/:id' element={<EditData/>}/>
      </Routes>
    </Router>
  )
}

export default App
