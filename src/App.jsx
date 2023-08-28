import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { columnsExample, rowsExample, serviceConstants } from './constants/constants';
import Table from './components/table/Table';

const App = () => {
  const [username, setUsername] = useState("Guest");
  const [services, setServices] = useState(serviceConstants);
  const [columns, setColumns] = useState(columnsExample);
  const [rows, setRows] = useState(rowsExample);

  return (
    <div className="App">
      <Sidebar username={username} services={services}/>
      <div className="TableDiv">
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  );
}

export default App;
