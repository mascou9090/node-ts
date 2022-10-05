type MapStringsCallback = (item:string) => string;



//------------------------------------------------------------------------

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for(let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]));
  }

  return newArray;
}

const adc = ['a','b','c'];
const adcMapped = mapStrings(adc, (item) => item.toUpperCase());

console.log(adc);
console.log(adcMapped);
