console.log('JS-FIZZBUZZ')

/* 
1)
-Creare un ciclo che porta x da 1 a 100
--SE x è divisibile per 3 E per 5
---scrivi FizzBuzz
--SE INVECE x è divisibile per 3
---scrivi Fizz
--SE INVECE x è divisibile per 5
---scrivi Buzz
--ALTRIMENTI scrivi x

2)
-Creare un container nel DOM
-Appendere una card che mostra x

3)
- Personalizza i singoli fizz buzz fizzbuzz con delle classi
*/

const myRow = document.querySelector('.row');


for (let x = 1 ; x <= 100 ; x++) {
    const myDiv = document.createElement('div');
    myDiv.classList.add('col-auto', 'd-flex' , 'justify-content-center');
    myRow.append(myDiv);

    const myCard = document.createElement('div');
    myCard.classList.add('box' , 'm-2')
    myDiv.append(myCard);

    const resto3 = x % 3;
    const resto5 = x % 5;

    const div3= resto3 == 0
    const div5= resto5 == 0

    if (div3 && div5) {
        myCard.append('FizzBuzz')
        myCard.classList.add('box-red')
    }

    else if (div3) {
        myCard.append('Fizz')
        myCard.classList.add('box-green')
    }

    else if (div5) {
        myCard.append('Buzz')
        myCard.classList.add('box-yellow')
    }

    else {
        myCard.append(x)
        myCard.classList.add('box-blue')
    }
}

