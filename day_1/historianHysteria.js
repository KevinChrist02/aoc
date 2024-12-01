// calling the Deno API to read the content from a file
// permission is granted with: deno --allow-read <yourFile.js>
const test = await Deno.readTextFile("test.txt");

console.log(test);

