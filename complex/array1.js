// Arrays push() and pop()

let messages = [
  "I am james mukuvi Ngandu",
  "I am a fronted developer",
  "I like coding & music",
];
messages.push("I like travelling"); // "push" adds an item

messages.pop(); // "pop" removes the last item

for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}
