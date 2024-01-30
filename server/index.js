import Express  from "express";

const app = Express();

const port= 8000;

app.listen(port, ()=>console.log('server is running on port ${port}'));