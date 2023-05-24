import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import BarChart from './components/Chart';
import Chart2 from './components/Chart2';
import SortTable from './components/SortTable';
import { Provider } from 'react-redux';
import store from './redux/store';
import Container from 'react-bootstrap/Container';

const App = () => {
  const [query, setQuery] = useState('');

  const handleQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  return (
    <Provider store={store}>
      <Header query={query} handleQuery={handleQuery} />
      <Container>
        <div className="chart-section">
          <Chart2 />
          <BarChart />
        </div>
      </Container>
      <SortTable query={query} />
    </Provider>
  );
};
export default App;
