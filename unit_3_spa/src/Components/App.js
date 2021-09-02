import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription.';
import Error from './Error';


const headerNav = [
  { "path": "/", "text": "Главная" },
  { "path": "/about", "text": "О сайте" },
  { "path": "/cat", "text": "Категории" },
]

const navCategory = [
  { "path": "/cat/notebooks", "text": "Ноутбуки" },
  { "path": "/cat/monitors", "text": "Мониторы" },
  { "path": "/cat/cellphones", "text": "Мобильные телефоны" },
]

function App() {
  return (
    <>
      <Header headerNav = {headerNav} />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path='/cat' ><Category navCategory={navCategory} /></Route>
          <Route path="/cat/:catDesc" component={CategoryDescription}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;