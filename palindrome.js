function is_palindrome(str){
	return str.split('').reverse().join('');
}

console.log(is_palindrome('hello'));