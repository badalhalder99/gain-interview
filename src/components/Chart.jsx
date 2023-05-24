import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function calculateAverageByKey(objects, key) {
  const values = objects.map(obj => obj[key]);
  const sum = values.reduce((previous, current) => previous + current, 0);
  const average = sum / values.length;
  return average;
}

function calculatePrice(objects, props) {
  const filteredObjects = objects.filter(object => object[props]);
  let price;
  filteredObjects && (
    price = calculateAverageByKey(filteredObjects, 'phone_price')
  );
  return price;
}

const BarChart = () => {
  const products = useSelector((state) => state.products);
  const officialWarrantyPrice = calculatePrice(products, 'official_warranty');
  const unofficialWarrantyPrice = calculatePrice(products, 'unofficial_warranty');
  const withoutWarrantyPrice = calculatePrice(products, 'no_warranty');
  const usedPhonePrice = calculatePrice(products, 'used_phone');

  const data = {
    labels: ['Official', 'Unofficial', 'Without warranty', 'Used'],
    datasets: [
      {
        label: 'features',
        data: [
          officialWarrantyPrice,
          unofficialWarrantyPrice,
          withoutWarrantyPrice,
          usedPhonePrice
        ],
        backgroundColor: '#0095A0'
      }
    ]
  };

  const options = {};

  return (
    <div id='bar'>
      <h2>Conditions</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
