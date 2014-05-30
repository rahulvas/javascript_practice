function get_seconds(str){
	var diffelms= str.split(',');
	var nospace = [];
	var hms = []
	for(var i = 0; i<diffelms.length; i++){
		nospace[i] = diffelms[i].trim();
	}
	for(var i = 0; i< nospace.length; i++){
		hms[i] = parseInt(nospace[i]);
	}
	var seconds = 360*hms[0]+60*hms[1] + hms[2];
	return seconds;
}

console.log(get_seconds("1 hours, 23 minutes, 20 seconds"));


//split at ","
//for each element split on  " "
//then first element is number and parseint that bitch. 