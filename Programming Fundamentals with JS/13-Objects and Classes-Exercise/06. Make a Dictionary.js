function printDictionary(arr) {
  let dict = {};
  for (let line of arr) {
    let obj = JSON.parse(line);

    let termin = Object.keys(obj)[0];
    let definition = obj[termin];

    dict[termin] = definition;
  }
  let sorted = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [term, def] of sorted) {
    console.log(`Term: ${term} => Definition: ${def}`);
  }
}
printDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
