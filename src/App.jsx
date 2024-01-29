import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import MiniDrawer from './Sidebar'

import RegionChart from './Components/RegionChart'
import IntensityChart from './Components/IntensityChart'
import TopicsPolarAreaChart from './Components/TopicChart'
import PieChart from './Components/SectorChart'
import LikelihoodRadarChart from './Components/Likelihood'
import CountryChart from './Components/CountryChart'
const App = () => {
  return (
    <div>
     
      <ResponsiveAppBar/>
      <MiniDrawer/>
      <div style={{display:'flex',gap:'19rem',alignItems:"baseline"}} >
      <RegionChart/>
      <TopicsPolarAreaChart/>

      </div>

      <IntensityChart/>

      <div style={{display:'flex', alignItems:'center',gap:'13rem'} } >
      <PieChart/>
      <LikelihoodRadarChart/>

      </div>
      <CountryChart/>

    
     
    </div>
  )
}

export default App