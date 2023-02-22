require('dotenv').config();
const connectDB = require('./config/db');
connectDB();

const express = require('express');
const app = express();
app.use(express.json());

const {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
} = require('./controllers/coursesController');


app.post('/api/courses', createCourse);
app.get('/api/courses', getCourses);
app.put('/api/courses/:id', updateCourse)
app.delete('/api/courses/:id', deleteCourse)

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORT ${process.env.PORT}`)
});





