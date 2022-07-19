import './carshomepage.css'
import {useState, useEffect} from 'react'
import {useNavigate } from 'react-router-dom'

function Carshomepage(props){

    const [carsData, setcarsData ]= useState()
    const [searchText , setsearchText] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        fetch('http://localhost:3000/getCarsData')
        .then(res=>{
            res.json()
            .then(carsdata=>{
                setcarsData(carsdata)
            })
        })
    },[])
    function viewUpdateHandler(cardata){
        props.setselectedCarData(cardata)
        navigate('/details/'+cardata.sales_id)
    }
    function addnewdata(){
        navigate('/addnew')
    }
    function search(){
        setcarsData(prev=>{
            return prev.filter(data => {
                if(data.sales_id==searchText || data.Customer_id==searchText){
                    return true
                }
                else if(searchText == ''){
                    search()
                }
                return false
            })
        })
    }

    return (
        <>
        <input type="text" onChange={e=>setsearchText(e.target.value)} className='searchinput' placeholder='search By sales id or Customer Id'></input>
        <button className='button' type="button" onClick={search} >Search</button>
        <button className='button' onClick={addnewdata} type="button">Add New</button>
        <table id='cars'>
            <tbody>
            <tr>
                <th>sales_id</th>
                <th>Date_of_Purchase</th>
                <th>Customer_id</th>
                <th>SellingPrice</th>
                <th>Customer_Income_group</th>
                <th>VEHICLE_SEGMENT</th>
                <th>View and Update Details</th>
            </tr>
            {carsData && carsData.length===0 && 'No Data Found'}
            {carsData && carsData.map((cardata,index)=>{
                return (
                    <tr key={index}>
                        <td>{cardata.sales_id}</td>
                        <td>{cardata.Date_of_Purchase}</td>
                        <td>{cardata.Customer_id}</td>
                        <td>{cardata.SellingPrice}</td>
                        <td>{cardata.Customer_Income_group}</td>
                        <td>{cardata.VEHICLE_SEGMENT}</td>
                        <td><button onClick={()=>viewUpdateHandler(cardata)} >View More details or Update</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </>
       
    )

}
export default Carshomepage