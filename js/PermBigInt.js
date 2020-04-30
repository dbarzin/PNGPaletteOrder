var fact = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return new BigInteger("1");
  if (fact[n] > 0)
    return fact[n];
  return fact[n] = factorial(n-1).multiply(new BigInteger(n.toString()));
} 

function encode(code, psize) {
  var p=[];
  for (var i=psize-1; i>=0; i--) {
     var l=factorial(i);
	 var q=code.divideAndRemainder(l)
     p[psize-1-i]=q[0].intValue();
     code=q[1]; 
  }
  for (var i=psize-1; i>=0; i--) {
    for (var j=psize-1; j>i; j--) {
      if (p[j]>=p[i]) p[j]=p[j]+1;
    } 
  }
  return p;  
} 

function decode(permutation) {
	for (var i=0;i<permutation.length-1;i++) {
		for (var j=permutation.length-1; j>i; j--) {
			if (permutation[j] >= permutation[i]){
				permutation[j] = permutation[j] - 1;
			}
		}
    }
	var n=new BigInteger("0");
	for(var j=0; j<permutation.length; j++) {
		n=n.add(new BigInteger(permutation[permutation.length-1-j].toString()).multiply(factorial(j)));
	}
    return n;
}

