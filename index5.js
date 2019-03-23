function fibo(x){
  if(x==0 || x==1)
    return 1;
  else 
    return(fibo(x - 2) + fibo(x - 1));
}
function SumOfSeries(){
  var sum = 0; var i = 0;
		while(fibo(i) < 100){
		  sum += fibo(i);
		  i++
		}
	document.getElementById("result").innerText = sum;
 }

