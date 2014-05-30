function maxlen_string(x,y,z){
    var xl = x.length;
    var yl = y.length;
    var zl = z.length;
    if(Math.max(xl,yl,zl) === xl){
        return x;
    }
    else if(Math.max(xl,yl,zl) === yl){
        return y;
    }
    else{
        return z;
    }
}

console.log(maxlen_string('hi','hello','hi'));