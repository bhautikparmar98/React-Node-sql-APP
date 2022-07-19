import './carsdetailpage.css'
import React from "react"; 
import Addnewcardata from './addnewcardata';

function Carsdetailpage(props){

    const carData = props.selectedCarData
    console.log(carData)
    return (
        <Addnewcardata carData={carData} />
    ) 

}
export default Carsdetailpage