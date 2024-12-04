import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChart = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/public/financial_data.json');
        const data = await response.json();
        
        
        const processedData = {
            datasets: [{
              label: 'Bubble Chart',
              data: data.map(item => ({
                x: expenses.xValue,
                y: profits.yValue,
                r: sales.radiusValue 
              })),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          };
    
          setChartData(processedData);
        };
    
        fetchData();
      }, []);
}

export default BubbleChart;