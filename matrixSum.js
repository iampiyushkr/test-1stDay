function Mat(arr) {
    var sum = 0;
    var col=arr[0].length
    if (arr.length < 2) {
        return ("Invalid row of matrix")
    } else {
        for (i = 0; i < arr.length; i++){
            if (arr[i].length !=col) {
                return ("Invalid column of matrix")
            }
        }
    }

    for (j = 0; j < arr.length; j++){
        for (k = 0; k < arr[0].length; k++){
            sum+=arr[j][k]
        }
    }
    return sum
}
module.exports=Mat