const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const transactionsRouter = require('./Routes/transactions')
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:["https://dashboard-self-sigma-37.vercel.app"],
        methods:["GET","POST", "PUT", "DELETE"],
        credentials:true
    }
));
app.options('*', cors());
require('dotenv').config(); 

mongoose.connect(process.env.MONGO_URL).then(() => console.log('Connected to MongoDB'))
.catch(console.error)

app.use('/api/transactions', transactionsRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
