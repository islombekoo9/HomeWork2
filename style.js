let firstName = prompt("Ismingizni kiriting...")
let surName = prompt("Familiyangizni kiriting...")
let age = prompt("Yoshingizni kiriting...")
let yourSchool = prompt("O`qish joyingizni kiriting...")

let object = {
    name: firstName,
    lastName: surName,
    age: age,
    school: yourSchool
}

console.log("Ism: " + object["name"])
console.log("Familiya: " + object["lastName"])
console.log("Yosh: " + object["age"])
console.log("O`qish joy : " + object["school"])