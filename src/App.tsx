import './App.scss';
import Grid from './components/Grid'
import Users from './data/users'

function App() {
  return (
    <div className="App">
      <Grid Users={Users}/>
    </div>
  );
}

export default App;
