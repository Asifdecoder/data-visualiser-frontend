import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
const RegionChart = () => {
    const [data,setData] = useState([])
    useEffect(()=>{

       async function fetchapi(){

            let response = await fetch('http://localhost:8080/api/jsondata')
            let data = await response.json()
            setData(data);
         
        }
        fetchapi();


    },[])
  
  const regionCounts = {};
  data.forEach(item => {
    if (item.region in regionCounts) {
      regionCounts[item.region]++;
    } else {
      regionCounts[item.region] = 1;
    }
  });
  console.log(Object.values(regionCounts))


  const chartData = {
    labels: Object.keys(regionCounts),
  
    datasets: [
      {
        data: Object.values(regionCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
        ],
      },
    ],
  };

  return (
    <Box style={{height:'600px',width:'550px',marginLeft:'95px',borderRadius: '8px',padding:'20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}} >
      <Heading as="h2" mb={4}>
        Region Distribution
      </Heading>
      <Doughnut data={chartData} />
    </Box>
  );
};

export default RegionChart;
