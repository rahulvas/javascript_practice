for (var a=[],i=0;i<70	;++i) a[i]=i;


function get_every_7th(nums){
	var sum = 0;
	for(var i =0; i< nums.length; i++){
		if(i === 0 || i % 7 === 0){
			sum += nums[i];
			console.log(sum);
		}
	}
	return sum
}

console.log(get_every_7th(a));