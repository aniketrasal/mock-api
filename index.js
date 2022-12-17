const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;
// const express = require('express');

const dbConnect = require("./config/db");

server.use(middlewares);
server.use(router);

server.get("/",(req,res)=>{
    res.send("hello world!");
})


server.listen(PORT,()=>{
    dbConnect();
    console.log(`server listening at PORT : ${PORT}`);
})
