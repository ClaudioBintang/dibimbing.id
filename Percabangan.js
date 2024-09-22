//PERCABANGAN

//IF
let totalBelanja = 10000;

if (totalBelanja > 15000) {
    console.log("SELAMAT, ANDA DAPAT HADIAH")
}

console.log("Terimakasih telah berbelanja")

//IF ELSE
const password = "dibimbing"

const userInput = "dibimbing"

if(userInput === password) {
    //console.log("selamat datang di sini")
    //pindah ke halaman beranda
} else {
    //console.log("password salah")
    //ulangi password sampai benar
}
userInput === password ? console.log("selamat datang di sini") : console.log("password salah")


console.log("terimakasih telah berkunjung ke web")

//IF/ELSE/IF
const nilaiStudent = 80
let grade = ""

if (nilaiStudent > 80) {
    grade = "A"
} else if (nilaiStudent > 70) {
    grade = "B"
} else {
    grade = "error"
}
//console.log(grade)

//switch case
const nilaiStudent2 = 85
let grade2 =""
switch (true) {
    case nilaiStudent2 > 80:
        grade2 = "A"
        break;
    case nilaiStudent2 > 70:
        grade2 = "B"
    default:
        grade2 = "error"
        break;
}

console.log(grade2)

//
 let namaHari = "selasa"
 let jenisHari = ""

 switch (namaHari) {
     case "senin":
          "selasa";
          "rabu";
          "kamis";
          "jumat";
          jenisHari = "hari kerja"
          break;
          "sabtu";
          "minggu";
          jenisHari = "hari Libur"
         break;
     default:
            jenisHari = "invalid"
         break;
}
console.log(jenisHari)

if (nama === "senin" || namaHari === "selasa" || namaHari === "selasa" || namaHari === "selasa")

//PENGULANGAN

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
