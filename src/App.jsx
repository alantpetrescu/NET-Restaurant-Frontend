import './App.css';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import { columnsExample, inputsExample, rowsExample, serviceConstants } from './constants/constants';
import Table from './components/table/Table';
import { InputList } from './components/inputList/InputList';
import { RequestButton } from './components/requestButton/RequestButton';

const App = () => {
  const baseUrl = 'https://localhost:7192/';
  const [username, setUsername] = useState("Guest");
  const [services, setServices] = useState(serviceConstants);
  const [columns, setColumns] = useState(columnsExample);
  const [rows, setRows] = useState(rowsExample);
  const [bodyInputs, setBodyInputs] = useState(inputsExample);
  const [paramInputs, setParamInputs] = useState(inputsExample);
  const [bodyInputsData, setBodyInputsData] = useState();
  const [paramInputsData, setParamInputsData] = useState();
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");

  console.log("body inputs data");
  console.log(bodyInputsData)

  console.log("param inputs data")
  console.log(paramInputsData)

  return (
    <div className="App">
      <Sidebar 
        username={username}
        services={services} 
        setBodyInputs={setBodyInputs}
        setParamInputs={setParamInputs}
        setBodyInputsData={setBodyInputsData}
        setParamInputsData={setParamInputsData}
        setMethod={setMethod}
        setUrl={setUrl}
      />
      <div>
        <InputList inputs={bodyInputs} inputsData={bodyInputsData} setInputsData={setBodyInputsData} />
        <InputList inputs={paramInputs} inputsData={paramInputsData} setInputsData={setParamInputsData} />
        <RequestButton url={url} baseUrl={baseUrl} method={method} params={paramInputsData} body={bodyInputsData} />
      </div>
      <div className="TableDiv">
        <Table columns={columns} rows={rows} />
      </div>
    </div>
  );
}

export default App;
