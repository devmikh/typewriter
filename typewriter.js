const sentence = "hello there from lighthouse labs";

let milliseconds = 0;

for (let i = 0; i < sentence.length; i++) {
  milliseconds += 50;
  setTimeout(() => {
    if (i === sentence.length - 1) {
      process.stdout.write(sentence[i] + "\n");
    } else {
      process.stdout.write(sentence[i]);
    }
  }, milliseconds);
}