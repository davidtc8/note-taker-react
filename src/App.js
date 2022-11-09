import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'


function App() {
  return (
    <Router>
      <div className="App">
        {/* You always have to return a single div, there 
        can be nested divs, but there can only be a father */}
        <Header />
        <Route path='/' exact component={NotesListPage} />
        <Route path='/note/:id' component={NotePage} />
      </div>
    </Router>
  );
}

export default App;
