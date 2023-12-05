console.log('JS-FIZZBUZZ')

const list = document.getElementById('list');
console.log ('lista ' + list +' '+ typeof list);

for (let x = 1 ; x <= 100 ; x++) {
    const myLi = document.createElement('li');
    myLi.append(x);

    const resto3 = x % 3;
    const resto5 = x % 5;

    const div3= resto3 == 0
    const div5= resto5 == 0

    if (div3 && div5) {
        console.log(x + ' Fizz AND Buzz')
    }

    else if (div3) {
        console.log(x + ' Fizz')
    }

    else if (div5) {
        console.log(x + ' Buzz')
    }

    else {
        console.log(x)
    }
}

