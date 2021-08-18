function diff(a, b) {
    if (arguments.length != 2) {
        return("More than arguments")
    }
    return a-b
}
module.exports=diff