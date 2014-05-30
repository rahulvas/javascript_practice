function get_12th(arr){
    if(arr.length < 12){
        return null;
    }
    return arr[11];
}

var blue = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,156,164363,1313];
var red = ['ball', 'shoe', 'batman', 'robin', 'a', 'b', 'c', 'd', 'e', 'g', 'h', '13', 'ata'];
var gree = ['ball', 'shoe', 'batman', 'robin', 'a', 'b', 'c', 'd', 'e', 'g', 'h']
var pink = [1,2,3,4,5,6,7,8,9,10,11,12];

console.log(get_12th(gree));
console.log(get_12th(red));
console.log(get_12th(blue));
console.log(get_12th(pink));
console.log(red[11], red.length);
console.log(blue[11], blue.length);