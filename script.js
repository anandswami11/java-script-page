



let usernumber = prompt('your exam number')
document.querySelector('#number').innerText = usernumber



console.log(usernumber)


if (usernumber < 30) {
    document.querySelector('#result').innerText = 'sorry you fail'
} else if (usernumber < 35) {
    document.querySelector('#result').innerText = 'sorry you reappar'
} else {
    document.querySelector('#result').innerText = 'very good you pass'
}



33



