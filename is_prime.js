function is_prime(num){
	for(var i = 1; i <= num; i++){
		console.log(Math.pow(i, num) % num);
	// 	if(Math.pow(i, num) % num === i)
	// 		return true;
	// }
	// return false;
}
}



// function is_prime(num){
//     for(var i = 2; i < num; i++){
//         if (num % i === 0){;
//             return false;
//         }
//     }
//     return true;
// }


for(var j = 1; j < 10; j++){
	console.log(is_prime(j));
};