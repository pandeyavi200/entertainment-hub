
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
import Trending from './Pages/Trending/Trending';
import {Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
     <Container>
         <Switch>
           <Route path='/' component={Trending} exact/>
           <Route path='/movies' component={Movies}/>
           <Route path='/series' component={Series}/>
           <Route path='/search' component={Search}/>
         </Switch>
     </Container>
    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
