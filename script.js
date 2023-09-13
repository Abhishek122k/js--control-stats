// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let j = 1;

while (j <= 100) {
  console.log(j);
  j += 2;
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let k = 3;

do {
  console.log(k);
  k += 3;
} while (k <= 100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

for (let l=2;l<=100;l++) {
  let prime = true;

  for (let m=2;m<l;m++) {
    if (l%m == 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    console.log(l);
  }
}
