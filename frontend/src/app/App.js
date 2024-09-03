import Garage from "../routes/Garage"
import Home from "../routes/Home"
import Layout from "./Layout"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Signin from "../routes/Signin"
import Signup from "../routes/Signup"
import Listing from "../features/Listing"
import Order from "../routes/Order"
import Profile from "../routes/Profile"
import Favourite from "../routes/Favourite"

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
