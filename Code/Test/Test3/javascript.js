  //배열 + 조건문

 const plusBtn = document.querySelector('.plus_btn');
 const minusBtn = document.querySelector('.minus_btn');
const divText = document.querySelector('.text');

 let counter = -1;
 let i = 0;

 plusBtn.addEventListener('click' , () => {
     counter++;
     i++;
     console.log(`i = ${i} , counter = ${counter}(배열)`);

     if(counter >= coworkers.length){
         alert('end');
         console.log('end');
         divText.innerHTML = 'end';
         counter = coworkers.length;
         i = coworkers.length + 1;
     }else{
         console.log(`${i}.${coworkers[counter]}`);
         divText.innerHTML = `${i}.${coworkers[counter]}`;
     };
 });

 minusBtn.addEventListener('click' , () => {
     counter--;
     i--;
     console.log(`i=${i} , counter=${counter}(배열)`);

     if(counter <= -1){
         alert('end');
         console.log('end');
         divText.innerHTML = 'end';
         counter = -1;
         i = 0;
     }
     else{
         console.log(`${i}.${coworkers[counter]}`);
         divText.innerHTML = `${i}.${coworkers[counter]}`;
     };
 });



  //배열

     //기본순서       1       2        3       4   ~    
 let coworkers = ['강비호','한점숙','강선구','강민주'];
     //배열의순서     0       1        2       3   ~



 //Template literals(템플릿 리터널) 
 console.log('안녕하세요. ' + '저는 ' + 6*coworkers.length + '살 입니다.'); //기본
 console.log(`안녕하세요. 저는 ${6*coworkers.length}살 입니다.`); //템플릿 리터널 적용!




 const pushText = document.querySelector('.push_btn');

 pushText.addEventListener('click', () => {
     coworkers.push('홍길동');
 });

 const popText = document.querySelector('.pop_btn');

 popText.addEventListener('click', () => {
     coworkers.pop(coworkers[counter]);
 });

