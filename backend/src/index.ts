import express from 'express';
import cors from 'cors';
import "dotenv/config"


const app=express();

app.use(express.json);
app.use(express.urlencoded({extended:true}))

console.log(process.env.MONGO_URL)

app.use(cors());

app.get('/api/test', async(req : any,res: any)=>{
    res.json({
        message:"hi"
    })
});

app.listen(8000,()=>{
    console.log('server   ')
})