import express from "express"
import data from "./data/data.json"

const app = express();
const PORT = 5000;

app.get("/", (req, res)=>{
    res.send(`Get request sent from route / on port ${PORT}`);
})


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
    console.log(data);
})