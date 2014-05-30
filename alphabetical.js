function alphabetical(x,y){
	x = x.toLowerCase();
    y = y.toLowerCase();
    if (x === y){
    	return false;
    };
    var strs = [x,y];
    var alphstrs= strs.sort();
    if(alphstrs[0] === x){
        return true;
    }
    return false;
}

console.log(alphabetical('aaron', 'aaron'));