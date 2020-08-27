#! /usr/bin/env node

const { default: Axios } = require("axios");

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("what would you like to eat ?", async (answer) =>{
    const food = "" ;
    const {data} = await Axios ('http://localhost:3001/food') ;
    const it = data[Symbol.iterator]() ;
    let possition = it.next() ;
    while(!possition.done){
         food = possition.value.name ;
         if(food === answer){
             console.log(`${answer} has ${position.value.calories} calories`) ;
         }
    }
    readLine.close() ;
}
)



