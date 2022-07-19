import './addnewcardata.css'
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function Addnewcardata(props){

    const navigate = useNavigate()
    const params = useParams()
    const sales_id = params.id
    const [disabled, setdisabled ]=  useState(false)
    console.log(sales_id)

    const defaultformData = {
        sales_id: sales_id ? props.carData.sales_id:'',
        Date_of_Purchase:sales_id ? props.carData.Date_of_Purchase:'',
        Customer_id:sales_id ? props.carData.Customer_id:'',
        Fuel:sales_id ? props.carData.Fuel:'',
        VEHICLE_SEGMENT:sales_id ? props.carData.VEHICLE_SEGMENT:'',
        SellingPrice:sales_id ? props.carData.SellingPrice:'',
        Power_steering:sales_id ? props.carData.Power_steering:1,
        airbags:sales_id ? props.carData.airbags:1,
        sunroof:sales_id ? props.carData.sunroof:1,
        Matt_finish:sales_id ? props.carData.Matt_finish:1,
        music_system:sales_id ? props.carData.music_system:1,
        Customer_Gender:sales_id ? props.carData.Customer_Gender:'Male',
        Customer_Income_group:sales_id ? props.carData.Customer_Income_group:'',
        Customer_Region: sales_id ? props.carData.Customer_Region:'North',
        Customer_Marital_status: sales_id ? props.carData.Customer_Marital_status:1
    }
    console.log(props.carData)

    useEffect(()=>{
        if(sales_id){
            setdisabled(true)
        }
    })

    const [formdata, setformdata ] = useState(defaultformData)

    function onsubmit(e){
        e.preventDefault()
        if(formdata.SellingPrice > 100000){
            alert('selling Price cannot be greater then 100000')
        }
        else{
            fetch('http://localhost:3000/submit',{
                headers : { 
                    "Content-Type": "application/json",
                },
                method:'POST',
                body:JSON.stringify(formdata)
            })
            .then(()=>{
                console.log(formdata)
                navigate('/')
            })
            .catch()
        }
    }
    function update(e){
        e.preventDefault()
        if(formdata.SellingPrice > 100000){
            alert('selling Price cannot be greater then 100000')
        }else{
            fetch('http://localhost:3000/update',{
                headers : { 
                    "Content-Type": "application/json",
                },
                method:'POST',
                body:JSON.stringify(formdata)
            })
            .then(()=>{
                console.log(formdata)
                navigate('/')
            })
            .catch(e=>console.log(e))
        }
    }

    function handleChange(e){
        const data = {...formdata}
        data[e.target.id] = e.target.value
        setformdata(data)
    }
    return(
    <main>
        <form>
            <label >Sales Id</label>
            <input disabled={disabled} onChange={e=>handleChange(e)} value={formdata.sales_id} type="number" id="sales_id"/>
            <label >Customer ID</label>
            <input disabled={disabled} onChange={e=>handleChange(e)} type="number" value={formdata.Customer_id} id="Customer_id" />
            <label >Date of Purchase</label>
            <input disabled={disabled} onChange={e=>handleChange(e)} type="date" value={formdata.Date_of_Purchase} id="Date_of_Purchase" />
            <label >Fuel</label>
            <input onChange={e=>handleChange(e)} type="text" value={formdata.Fuel} id="Fuel" />
            <label >Vehicle Segment</label>
            <input onChange={e=>handleChange(e)} type="text" value={formdata.VEHICLE_SEGMENT} id="VEHICLE_SEGMENT" />
            <label  >Selling Price</label>
            <input  onChange={e=>handleChange(e)} type="number" min="1" max="100000" value={formdata.SellingPrice} id="SellingPrice" />
            <label  >Power Steering</label>
            <select onChange={e=>handleChange(e)} id="Power_steering">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label >AirBags</label>
            <select onChange={e=>handleChange(e)} id="airbags">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label >Sun roof</label>
            <select onChange={e=>handleChange(e)} id="sunroof">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label >Matt Finish</label>
            <select onChange={e=>handleChange(e)} id="Matt_finish">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label >Music System</label>
            <select onChange={e=>handleChange(e)} id="music_system">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <label >Gender</label>
            <select onChange={e=>handleChange(e)} id="Customer_Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <label>Region</label>
            <select onChange={e=>handleChange(e)} value ={formdata.Customer_Region} id="Customer_Region">
                <option value="North">North</option>
                <option value="South">South</option>
            </select>
            <label >Income Group</label>
            <input onChange={e=>handleChange(e)} type="text" value={formdata.Customer_Income_group} id="Customer_Income_group"/>
            <label >Maried</label>
            <select onChange={e=>handleChange(e)} id="Customer_Marital_status">
                <option value="Male">Yes</option>
                <option value="Female">No</option>
            </select>
            {sales_id && <button type="submit" onClick={e=>update(e)}>Update</button>}
            {!sales_id && <button type="submit" onClick={e=>onsubmit(e)}>Submit</button>}
        </form>
        </main>
    )
}
export default Addnewcardata 