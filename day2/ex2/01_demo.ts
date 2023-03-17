import { argv } from "node:process";

// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// console.log("hihihi",argv[2])

if (argv[2] == "greet") {
  console.log("Hello, World.");

  if (argv[3] && argv[4]) {
    console.log("we have 2nd and 3rd argument");
    if(argv[3] == "-t"){
        console.log(`Hello, World. ${argv[4]}`)
    }
  } else {
    console.log("we don't have 2nd and 3rd argument");
  }
}
