#! /usr/bin/env node

const { default: Axios } = require("axios");

const readLine = require("readline").createInterface({
    input: process.stdin,
    ouput: process.stdout
})

readLine.question("what would you like to eat ?", async (answer) =>{
    const food = "" ;
    const {data} = await axios.get('http://localhost:3001/food') ;
    const it = data[Symbol.iterator]() ;
    let possition = it.next() ;
    while(!possition.done){
         food = possition.value.name ;
         if(food === item){
             console.log(`${item} has ${position.value.calories} calories`) ;
         }
    }
    readLine.close() ;
}
)