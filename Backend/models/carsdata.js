const Sequelize = require('sequelize')

const sequelize = new Sequelize('nodeproject','root','pass123',{
    host: 'localhost',
    dialect: 'mysql'
})

const CarsData = sequelize.define('carsdata',{
    sales_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    Date_of_Purchase:{
        type: Sequelize.STRING
    },
    Customer_id:{
        type: Sequelize.INTEGER
    },
    Fuel:{
        type: Sequelize.STRING
    },
    VEHICLE_SEGMENT:{
        type: Sequelize.STRING
    },
    SellingPrice:{
        type: Sequelize.INTEGER
    },
    Power_steering: {
        type: Sequelize.INTEGER
    },
    airbags:{
        type: Sequelize.INTEGER
    },
    sunroof:{
        type: Sequelize.INTEGER
    },
    Matt_finish:{
        type: Sequelize.INTEGER
    },
    music_system:{
        type: Sequelize.INTEGER
    },
    Customer_Gender:{
        type: Sequelize.STRING
    },
    Customer_Income_group:{
        type: Sequelize.STRING
    },
    Customer_Region:{
        type: Sequelize.STRING
    },
    Customer_Marital_status:{
        type: Sequelize.NUMBER
    }
},{
    timestamps: false
}) 

module.exports = CarsData