
function sum (x, y){

    if (typeof x !== 'number' || typeof y !== 'number' ) {

        throw new Error("All parameters need to be numbers!");
    }

    return x + y;
} 

try {

    console.log(sum('3', 4));
} catch(error) {

    //console.log(error);
    console.log("something is not right");
}