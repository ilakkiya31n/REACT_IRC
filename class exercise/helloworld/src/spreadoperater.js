function sum(...args)
{
  let sum=0;
  for(let i=0;i<args.length;i++)
  {
    sum+=args[i];
  }
  return sum;
}
console.log(sum(5,6,7,8))
console.log(sum(5,8))