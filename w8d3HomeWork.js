function isSubstring(searchString, subString) {
    let lowerSearch = searchString.toLowerCase()
    return lowerSearch.indexOf(subString) > -1;
}


function fizzBuzz(array) {
    let result = [];

        for (i = 0; i < array.length; i++) {
            num = array[i]
            if (i % 3 === 0 && i % 5 === 0 ) {
                continue
            }
            if (i % 3 === 0 || i % 5 === 0 ) {
                result.push(num)
            }
        }
        return result
    }

    console.log(fizzBuzz([3, 5, 6, 9, 10, 12, 18]))


    function isPrime(n) {
        if (n < 2) {
            return false
        }
            for (var i = 2; i < n; i++) {
                if (n % i === 0){
                    return false
                }
            }
        return true
    }
    console.log(isPrime(7))

    function sumOfNPrimes(n) {
var primes = firstNPrimes(n)
  var sum = 0;
  ;

  for (var i = 0;  i < primes.length; i += 1) {
    sum += primes[i];
  }

  return sum;
}