import Garage from "./app/Garage"
import Home from "./app/Home"
import Layout from "./app/Layout"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Signin from "./app/Signin"
import Signup from "./app/Signup"
import Listing from "./app/Listing"
import Order from "./app/Order"
import Profile from "./app/Profile"
import Favourite from "./app/Favourite"

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="garage/:garageId" element={<Garage />}/>
            <Route path="services/:service" element={<Listing />}/>
            <Route path="orders" element={<Order />}/>
            <Route path="profile" element={<Profile />}/>
            <Route path="favourite" element={<Favourite />}/>
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    )
}

export default App
