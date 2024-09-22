//for loop
for (let index = 1; index < 20; index++) {
    //console.log(index)
}

//while loop
let index = 3
while (index < 10) {
    //console.log(index)
    index++
}    //kondisi ini bisa dibalik (kaya jadi --)

//loop do while
let i = 10

do {
    //console.log(10)
    i++
} while (i < 10);

//for in loop
const user = {
    nama: "dio",
    umur: "18",
    alamat: "jakarta"
}

for (const key in user) {
    console.log(key + ": " + user[key])
}

//For of loop
const isNumber = [1, 2, 3, 4, 5]

for (const element of isNumber) {
    console.log(element)
}

//for each loop
const fruits = ["Apple", "banana", "grape", "orange", "mango"]

fruits.forEach(function (fruit) {
    if (fruit !== "mango") {
    console.log(fruit)
    }
})
