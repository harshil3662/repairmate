import GarageList from './GarageList'
import Map from './Map'
import 'leaflet/dist/leaflet.css'
import '../css/Home.css'
import Searchbar from './Searchbar'

function Home() {
  return (
    <div>
      <div className='container-1'>
        <Searchbar/>
      </div>
      <div className='container-2'>
        <GarageList/>
        <Map/>
      </div>
    </div>
  )
}

export default Home
