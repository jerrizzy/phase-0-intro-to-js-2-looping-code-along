// Code your solutions in this file
for (let age = 30; age < 30; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
};

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(array, event) {
    const card = []
    for (let i = 0; i < array.length; i++) {
        console.log(`thank you, ${array[i]}, for the wonderful ${event} gift!`)
        
        card.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    } 
    return card;
}

writeCards(names, "surprise")

function countDown(number) {
    let i = 0
    while (i <= number) {
        console.log(number)
        --number;
    }
    return number
}

countDown(10)
