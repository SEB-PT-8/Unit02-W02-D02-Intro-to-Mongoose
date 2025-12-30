const mongoose = require('mongoose')

async function conntentToDB(){
    try{
        await mongoose.connect('mongodb+srv://omar:1234@omar-cluster.dbwrx.mongodb.net/ga?appName=omar-cluster')
        console.log('Connection Successful')
    }
    catch(err){
        console.log('Error in Connection')
    }
}
conntentToDB()