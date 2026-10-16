const word = "façade";
const cleanWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
console.log(cleanWord); // Output: "cloisonne"