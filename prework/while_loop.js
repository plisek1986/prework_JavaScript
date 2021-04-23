let i = 0;
while (i != 5) {
  console.log("Pętle są fajne");
  i = Math.floor(Math.random() * 10);
}

for (let i = 0; i < 10; i++) {
  for (let j = i; j < 10; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}
