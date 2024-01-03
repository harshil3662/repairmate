import GarageList from './GarageList'
import 'leaflet/dist/leaflet.css'
import '../css/Home.css'
import Searchbar from './Searchbar'
import Services from './Services'

function Home() {
  return (
    <div>
      <div className='container-1'>
        <Searchbar/>
      </div>
      <div className='container-2'>
        <Services/>
      </div>
      <div className='container-3'>
        <GarageList/>
        <GarageList/>
      </div>
    </div>
  )
}

export default Home
