const mongoose = require('mongoose')

async function conntentToDB(){
    try{
        // /database_name?
        await mongoose.connect('mongodb+srv://omar:1234@omar-cluster.dbwrx.mongodb.net/school?appName=omar-cluster')
        console.log('Connection Successful')
    }
    catch(err){
        console.log('Error in Connection')
    }
}
conntentToDB()


// Schema
const studentSchema = new mongoose.Schema({
   name: String,
   grade: Number 
})

// model
const Student = mongoose.model('Student',studentSchema)

