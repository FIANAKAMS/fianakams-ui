import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Table from './components/table';

function App() {
  return (
   <div className='app'>
    <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="table-wrapper">
        <Table />
      </div>
   </div>
  );
}

export default App;
