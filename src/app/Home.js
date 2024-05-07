import GarageList from './GarageList'
import 'leaflet/dist/leaflet.css'
import '../css/Home.css'
import Searchbar from './Searchbar'
import Services from './Services'

function Home() {

  const services = [
    {src:'/car.png',serviceName:'Car Inspection'},
    {src:'/schedule.png',serviceName:'Periodic Service'},
    {src:'/tire.png',serviceName:'Tyre & Wheel'},
    {src:'/spray-gun.png',serviceName:'Car Painting'},
    {src:'/engine.png',serviceName:'Engine Repairing'},
    {src:'/car-wash.png',serviceName:'Car Washing'},
    {src:'/car-battery.png',serviceName:'Car Batteries'},
    {src:'/interior.png',serviceName:'Interior Issues'}
  ]

  return (
    <div className='container'>
      <Searchbar/>
      <Services lable={"Popular Car Services"} services={services}/>
      <GarageList headline={"Top Rated Auto Centers"}/>
      <GarageList headline={"Best centers of the week"}/>
      <GarageList headline={"Top of the season"}/>
    </div>
  )
}

export default Home
