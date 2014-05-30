function prefix_suffix_7(x,y){
	var newx = x.substring(0,6);
	var newy = y.substring(0,6);
	return newx === newy;
}

console.log(prefix_suffix_7('Ha Potter', 'Harry smells'));