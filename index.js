// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log("I\'m ${age} years old. Happy birthday to me!")
}

const gifts = ['teddy bear', 'drone', 'doll']

function wrapGifts(gifts) {
    for (let i=0; i < gifts.length; i++) {
        console.log('Wraped ${gifts[i]} and added a bowl')
    }
    
    return gifts
}

wrapGifts(gifts)


function writeCards(names, event) {
    let greeting = []
    for (let i = 0; i < names.length; i++) {
        greeting.push('Thank you, ' + names[i] + ', for the wonderful ' + event +  ' gift!')
    }

    return greeting

}

function countDown(positiveInteger) {
    let i = positiveInteger
    while (i >= 0) {
       i - 1
       console.log(i)
       i--
    }
}