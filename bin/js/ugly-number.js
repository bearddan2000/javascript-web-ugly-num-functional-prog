function ToInt(id) {
  var x = $('#' + id).val();
  return parseInt(x);
}
/*This function divides a by greatest
 divisible power of b*/
 function maxDivide(a, b)
 {
     if(a % b != 0) return a;
     a = a/b;
     return maxDivide(a, b);
 }

 /* Function to check if a number
 is ugly or not */
 function isUgly(n, args, no)
 {
   if(n >= args.length) return (no == 1)? 1 : 0;
   no = maxDivide(no, args[n]);
   return isUgly(n+1, args, no);
 }
function findUgly(n, i, count) {
  if(n < count) return i-1;
  if(isUgly(0, [2,3,5], i++) == 1) count++;
  return findUgly(n, i, count);
}
 /* Function to get the nth ugly
 number*/
 function getNthUglyNo(n)
 {
     return findUgly(n, 1, 1);
 }
