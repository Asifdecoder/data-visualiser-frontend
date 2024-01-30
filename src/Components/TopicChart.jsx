import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Box, Heading } from '@chakra-ui/react';
import { useState,useEffect } from 'react';

const TopicsPolarAreaChart = () => {

    const [data,setData] = useState([])
    useEffect(()=>{

       async function fetchapi(){

            let response = await fetch('https://visualiser-iaab.onrender.com/api/jsondata')
            let data = await response.json()
            setData(data);
        
        }
        fetchapi();


    },[])
  const topics = data.map(item => item.topic);

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: data.map(item => item.relevance),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };

  return (
    <Box style={{height:'650px',width:'600px',borderRadius: '8px',padding:'20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
      <Heading as="h2" mb={4}>
        Topics Chart
      </Heading>
      <PolarArea    data={chartData} options={chartOptions} />
    </Box>
  );
};

export default TopicsPolarAreaChart;
