// calling the Deno API to read the content from a file
// permission is granted with: deno --allow-read <yourFile.js>
const input_1 = await Deno.readTextFile("array1.txt");
const input_2 = await Deno.readTextFile("array2.txt");

function transform(input) {
    return input.split(",").map((item) => Number(item.trim()));
}

function sort(array) {
    return array.sort((a, b) => a - b);
}

function compare(array1, array2) {
    let result = 0;

    const length = Math.min(array1.length, array2.length);

    for (let i = 0; i < length; i++) {
        if (array1[i] > array2[i]) {
            result += array1[i] - array2[i];
        } else {
            result += array2[i] - array1[i];
        }
    }

    return result;
}

const array_1 = transform(input_1);
const array_2 = transform(input_2);

sort(array_1);
sort(array_2);

console.log(compare(array_1, array_2));
