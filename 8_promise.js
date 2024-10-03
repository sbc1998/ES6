
let complete=true;
let prom= new Promise( function(resolve, reject) {
    
    if(complete==true) {
        resolve("Successful");
    }
    else {
        reject("Unsuccessful");
    }
    
})

console.log(prom);
