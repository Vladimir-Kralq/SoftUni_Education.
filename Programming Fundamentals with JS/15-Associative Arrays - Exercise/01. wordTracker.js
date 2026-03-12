function printWordTracker(arr) {
   
    let searchWords = arr.shift().split(' ');
    let wordCounts = new Map();


    for (let word of searchWords) {
        wordCounts.set(word, 0);
    }

    
    for (let word of arr) {
        if (wordCounts.has(word)) {
            let currentCount = wordCounts.get(word);
            wordCounts.set(word, currentCount + 1);
        }
    }

    
    let sortedWords = Array.from(wordCounts.entries())
        .sort((a, b) => b[1] - a[1]);


    for (let [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}
printWordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);