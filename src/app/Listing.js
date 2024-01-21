import '../css/Listing.css'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

function Listing() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8080/garages')
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then((responseData) => {
            setData(responseData.list)
        })
        .catch((err) => {
            console.log(err)
        })
    },[data])

    return (
        <div>
            <div className='listing'>
                {data.map((garage)=>{
                    return (
                        <Link to={`/garage/${garage._id}`} state={{garage}} className='link'>
                            <div className='listing-card'>
                                <div className='listing-gHeading'>{garage.name}</div>
                                <div className='listing-g'>{garage.location}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Listing