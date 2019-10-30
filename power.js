const limit = Number(process.argv[2]);
const base = Number(process.argv[3]);

for (let x = 1, i = 0; i <= limit; i += 1) {
  console.log(`2^${i} = ${x}`);
  x += x;
}
