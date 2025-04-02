// import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./Routes/userRoute');
const blogRouter = require('./Routes/blogRoute')

// initialization
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// default api
app.get('/' , (req, res) => {
    res.send("Server is online ...");
})

app.use('/api/users', userRouter);
app.use('/api/users', blogRouter);

app.listen(5000);










async function main(){
    const res = await mongoose.connect('mongodb+srv://mandarm9977:OMmyFamily2604@cluster0.pkqzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' )
    const data = await res.default
    const response = data.STATES['1']
    console.log(response);
}

main()
