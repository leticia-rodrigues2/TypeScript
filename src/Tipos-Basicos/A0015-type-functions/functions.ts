type MapStringCallback = (item: string) => string;

export function MapStrings(
  array: string[],
  callbackfn: MapStringCallback
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = MapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);
