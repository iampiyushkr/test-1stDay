function Password(pass) {
    var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var smal = "abcdefghijklmnopqrstuvwxyz"
    var symbol = "@#$%&*(){}[]"
    var number="1234567890"
    var count = 0;
    var temp = 0;
    var sym = 0;
    var num = 0;
    if (pass.length < 6) {
        return("Password must min 6 char")
    } else {
        for (var j = 0; j < pass.length; j++) {
            for (var i = 0; i < cap.length; i++){
                if (pass[j] == cap[i]) {
                    count++
                } else if (pass[j] == smal[i]) {
                    temp++
                } else if (pass[j] == symbol[i]) {
                    sym++;
                } else if (pass[j] == number[i]) {
                    num++
                }
            }

        }
        if (count == 0) {
            return("Capital letter missing")
        } else if (temp == 0) {
            return ("Small letter missing")
        } else if (sym == 0) {
            return("Symbol missing")
        } else if (num == 0) {
            return ("Number missinng")
        }
    }
}
module.exports=Password