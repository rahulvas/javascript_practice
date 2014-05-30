function get_time_str(num){
    var hr = Math.floor(num/3600);
    var min = Math.floor((num - 3600*hr)/60);
    var sec = num - 3600*hr - 60 *min;
    var hour = hr.toString();
    var minute = min.toString();
    var second = sec.toString();
    var str = hour + " hours," + minute+" minutes," +second+" seconds";
    return str;
}

console.log(get_time_str(5000));