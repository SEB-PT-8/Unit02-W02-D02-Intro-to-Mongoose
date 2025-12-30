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


// Create in DB
async function createStudent(){
    // model.create({}): adds a document to the db
    const createdStudent = await Student.create({
        name: 'Hasan',
        grade: 99
    })
}
// createStudent()


// Getting values from database

async function getAllStudents(){
    const allStudents = await Student.find()
    console.log(allStudents)
}

// getAllStudents()


async function getOneStudent(){
    const foundStudent = await Student.findOne({name:'Mohammad'})
    console.log(foundStudent)
}
getOneStudent()