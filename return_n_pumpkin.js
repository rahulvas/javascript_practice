function return_n_pumpkin(num){
	var text = 'pumpkin';
	var newtext = "";
	for(i = 0; i < num; i++){
		newtext += text + " ";
	}
	var final_text = newtext.substring(0, newtext.length - 1);
	console.log(final_text);
	return final_text;
}

console.log(return_n_pumpkin(4));
