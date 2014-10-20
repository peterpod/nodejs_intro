var sum=0;
var i=0;
process.argv.forEach(function(data){
i++;
if(i>=3){
  sum+=Number(data)
}
});

console.log(sum);