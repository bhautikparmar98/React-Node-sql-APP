const express = require('express')
const app = express()

const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodeproject','root','pass123',{
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})
const CarsData = require('./models/carsdata')

const port = 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// create application/x-www-form-urlencoded parser
app.use((req,res,next)=>{
  //for removing CORS error for having different ports
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Methods','OPTIONS,GET,POST,PUT,PATCH,DELETE')
  res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization')
  next()
}) 

app.get('/getCarsData',(req,res,next)=>{
    CarsData.findAll()
    .then(cars=>{ 
        //console.log(cars)
        res.status(200).json(cars.reverse())
    })
    .catch(e=>res.status(400).json(e))
})

app.post('/update',(req,res,next)=>{
    const sales_id = req.body.sales_id
    console.log('here',sales_id)
    const Date_of_Purchase = req.body.Date_of_Purchase
    const Customer_id = req.body.Customer_id
    const Fuel = req.body.Fuel
    const  VEHICLE_SEGMENT = req.body.VEHICLE_SEGMENT
    const  SellingPrice = req.body.SellingPrice
    const  Power_steering = req.body.Power_steering
    const  airbags = req.body.airbags
    const  sunroof = req.body.sunroof
    const  Matt_finish = req.body.Matt_finish
    const  music_system = req.body.music_system
    const  Customer_Gender = req.body.Customer_Gender
    const  Customer_Income_group = req.body.Customer_Income_group
    const  Customer_Region = req.body.Customer_Region
    const  Customer_Marital_status = req.body.Customer_Marital_status
    CarsData.update({
        sales_id: sales_id,
        Date_of_Purchase: Date_of_Purchase,
        Customer_id:Customer_id,
        Fuel:Fuel,
        VEHICLE_SEGMENT: VEHICLE_SEGMENT,
        SellingPrice:SellingPrice,
        Power_steering:Power_steering,
        airbags:airbags,
        sunroof:sunroof,
        Matt_finish:Matt_finish,
        music_system:music_system,
        Customer_Gender:Customer_Gender,
        Customer_Income_group:Customer_Income_group,
        Customer_Region:Customer_Region,
        Customer_Marital_status:Customer_Marital_status
    },{where:{sales_id:req.body.sales_id}},{ multi: true })
    .then(r=>{
        console.log(r)
        res.status(200).send(r)
    })
    .catch(e=>{
        console.log(e)
        res.status(400).send(e)
    })
})

app.post('/submit',(req,res,next)=>{
    const sales_id = req.body.sales_id
    console.log('here',sales_id)
    const Date_of_Purchase = req.body.Date_of_Purchase
    const Customer_id = req.body.Customer_id
    const Fuel = req.body.Fuel
    const  VEHICLE_SEGMENT = req.body.VEHICLE_SEGMENT
    const  SellingPrice = req.body.SellingPrice
    const  Power_steering = req.body.Power_steering
    const  airbags = req.body.airbags
    const  sunroof = req.body.sunroof
    const  Matt_finish = req.body.Matt_finish
    const  music_system = req.body.music_system
    const  Customer_Gender = req.body.Customer_Gender
    const  Customer_Income_group = req.body.Customer_Income_group
    const  Customer_Region = req.body.Customer_Region
    const  Customer_Marital_status = req.body.Customer_Marital_status
    CarsData.create({
        sales_id: sales_id,
        Date_of_Purchase: Date_of_Purchase,
        Customer_id:Customer_id,
        Fuel:Fuel,
        VEHICLE_SEGMENT: VEHICLE_SEGMENT,
        SellingPrice:SellingPrice,
        Power_steering:Power_steering,
        airbags:airbags,
        sunroof:sunroof,
        Matt_finish:Matt_finish,
        music_system:music_system,
        Customer_Gender:Customer_Gender,
        Customer_Income_group:Customer_Income_group,
        Customer_Region:Customer_Region,
        Customer_Marital_status:Customer_Marital_status
    })
    .then(r=>{
        console.log(r)
        res.status(200).send(r)
    })
    .catch(e=>res.status(400).send(e))
})

sequelize.sync() 
.then(result=>{
    //console.log(result)
  app.listen(port, () => {
    console.log(`app listening on port ${port}`) 
  }) 
}).catch(err=>console.log(err))  
