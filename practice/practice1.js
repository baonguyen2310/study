//cd E:/webProject/practice

//15 So nguyen to dau tien
const bai1 = function(){
	var count = 0;
	var k = 2;
	var isNguyento;
	while(count<15){
		isNguyento = true;
		for (n=2; n<=k/2; n++){
			if (k%n==0){
				isNguyento = false;
				//console.log(k, "khong la so nguyen to");
				break;
			}
		}

		if (isNguyento == true){
			console.log(k);
			count += 1;
		}

		k += 1;
	}
}


//So nguyen to tu 1000 den 2000
const bai2 = function(){
	var isNguyento;
	for (k = 1000; k<=2000; k++){
		isNguyento = true;
		for (i = 2; i<=k/2; i++){
			if (k%i == 0){
				isNguyento = false;
				break;
			}
		}
		if (isNguyento == true) {
			console.log(k);
		}
	}
}

//So duong <100 chia het cho 3 va 7
const bai3 = function(){
	for (i = 1; i < 100; i++){
		if (i%3==0 & i%7==0){
			console.log(i);
		}
	}
}

//Tinh tong S = 1+ 1/(1+2)+ 1/(1+2+3) + ... + 1/(1+2+3+...+N)
const bai4 = function(){
	const N = 2;
	var S = 1;
	var sum = 1;
	for (i = 2; i <= N; i++) {
		console.log("S = ", S, " + ", "1/(", sum, " + ", i, ")");
		S = S + 1/(sum + i);

		sum = sum + i;
	}
	console.log(S);
}

//Fibonaci de quy
const Fibonaci = function(n){
	if (n <= 1){
		return n;
		
	}
	return Fibonaci(n-1) + Fibonaci(n-2);
	
}
const bai5 = function (){
	var n = 40;
	for (i = 0; i <= n; i++){
		var result = Fibonaci(i);
		console.log(result);
	}
	
}

//Fibonaci quy hoach dong
const FibonaciDP= function(n) {
	let f = new Array (n+1);
	f[0] = 0;
	f[1] = 1;
	for (i = 2; i <= n; i++){
		f[i] = f[i-1] + f[i-2];
	}
	return f;

}
const bai6 = function (){
	var n = 40;
	var result = FibonaciDP(n);
	console.log(result);
	
}

var time = Date.now();
bai6();
console.log(Date.now() - time, " millis");