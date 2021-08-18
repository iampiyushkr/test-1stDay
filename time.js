function Time(time) {
    if (time < 1000) {
        return("Enter time in milisecond")
    }
    if (time > 60000) {
        return (`${Math.floor(time / 60000)} minute ${Math.floor((time % 60000) / 1000)} seconds`)
    }  else {
         return(`${Math.floor(time / 1000)} seconds`)
     }
}
module.exports=Time