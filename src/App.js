import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { MainContainer } from './components/MainContainer';
import { RightMenu } from './components/RightMenu';
import { Route, Routes} from 'react-router-dom';
import { AppLogReg } from './components/AppLogReg';

/*NOTE FOR ROUTES: ANYTHING OUTSIDE THE ROUTE TAGS WILL BE DISPLAYED IN ALL PAGES. 
ANYTHING INSIDE THE ROUTE TAGS WILL BE DISPLAYED FOR A SPECIFIC PAGE */
//INSIDE ALL ROUTES TAG, WE WILL HAVE AN INDIVIDUAL ROUTE

//TO ADD MULTIPLE JS PAGES TO A SINGLE ROUTE, WRAP THEM IN FRAGMENTS "<> </>" AS SHOWN BELOW 
function App() {

  return (

    <div className="App">
      
      
      <Routes>

        <Route exact path='/' element={<AppLogReg/>} />
        <Route exact path='/melloamp' element={<><LeftMenu/><MainContainer/><RightMenu/></>} />
        

      </Routes>

    </div>
  );
}

export default App;
