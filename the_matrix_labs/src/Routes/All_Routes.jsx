import {Routes,Route} from "react-router-dom"
import Home from "../Component/Home"

export default function AllRoutes(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
        </>
    )
}