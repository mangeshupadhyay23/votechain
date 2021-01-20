import './App.css';
import CandidateList from './components/list/candidateList';
import Auth from './components/login/authPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Auth/> */}
      <CandidateList/>
    </div>
  );
}

export default App;
