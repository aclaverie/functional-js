
display(`Pipe and Compose`);
const triple = x => x * 3;
const cube = x => x ** 3;

var outputRamda = pipe(triple, cube)(2);
let output = triple(2);
let output2 = cube(output);
display(`Output triple: ${output} cube: ${output2}`);