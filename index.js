// Code your solutions in this file

function writeCards(nameArray, occasion) {
    let messages = []
    for (let i = 0; i < nameArray.length; i++) {
        messages.push(`Thank you, ${nameArray[i]}, for the wonderful ${occasion} gift!`);
    }

    return messages
}

function countDown(n) {
    while (n > -1) {
        console.log(n)
        n--
    }
}