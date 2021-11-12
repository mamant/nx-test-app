import ContractsList from './components/ContractsList';
import { createBrowserHistory } from 'history';
import ContractDetails from './components/ContractDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<ContractsList />} />
        <Route path="/contracts" element={<ContractsList />}></Route>
        <Route path="/contracts/:id" element={<ContractDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
