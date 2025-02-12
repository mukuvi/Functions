import url from "url";

const urlString = "https://duckduckgo.com/?q=hello+world";

//url Object
const urlObj = new URL(urlString);

console.log(urlObj);
