const student = {
  name: "Aieman",
  age: 23,
  skills: ["HTML", "CSS", "JavaScript"]
};

const scores = [90, 85, 88];

for (let info in student) {
    console.log(`Key: ${info}, Value: ${student[info]}`)
}

for( let value of scores) {
    console.log(`Score: ${value}`)
}