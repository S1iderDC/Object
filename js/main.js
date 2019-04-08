 function convert() {

     let inputNumber = prompt('Введите число от 0 до 999');
     let objNumber = {};

      if( 0 < parseInt(inputNumber) && parseInt(inputNumber)< 1000) {
             objNumber.сотни = parseInt(inputNumber/100);
             objNumber.десятки = parseInt((inputNumber - objNumber.сотни*100)/10);
             objNumber.единицы = parseInt(inputNumber-objNumber.десятки*10 - objNumber.сотни*100);
         } else {
               console.log('Введите правильные данные <ДО 1000>');
               return objNumber;
             }


    console.log(objNumber);
}

convert();

