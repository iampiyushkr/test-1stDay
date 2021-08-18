function Tax(amount) {
    if (arguments.length > 1) {
        return("Invalid")
    }
    if (amount < 250000) {
        return ("No Tax")
    } else if (amount >= 250000 && amount < 500000) {
        return (`${(amount * 10) / 100} tax`)
    } else if (amount >= 500000 && amount < 1000000) {
         return (`${(amount * 20) / 100} tax`)
    } else {
         return (`${(amount * 30) / 100} tax`)
     }
}
module.exports=Tax