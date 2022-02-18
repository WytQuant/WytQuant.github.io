function askMyName() {
    const name = prompt('What is your name ?') 
 
    if (name != null) {
       document.getElementById("myname").innerHTML = "My name is " + name;
       document.querySelector('#myname').style = 'background: linear-gradient(90deg, #54BAB9 0%, #E9DAC1 60%, #F7ECDE 95%);'
       document.querySelector('.bg').style = 'background: linear-gradient(135deg, #FFBBBB 0%, #FFE4C0 60%, #F0FFC2 95%);'
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById('myname').innerHTML;
    alert(h1message + ' : ไม่ต้องเขียนคิ้วให้คม พี่มองนมไม่ได้มองหน้า')
 }


 function calAge() {

   while (true) {
      let userBirthYear = +prompt('What is your birth year ?');
      let thisYear = 2022;
      let calAge = thisYear - userBirthYear;
      
      if (isNaN(calAge) || !userBirthYear || userBirthYear > thisYear) {
         alert('Are you God ??, Please fill out your birth year again');
         continue;
        } else {
         alert(`Unfortunately, you are in hell for ${calAge} years`);
         break;
      }
        
   }
 

    document.querySelector('.bg').style = 'background: linear-gradient(135deg, #FFBBBB 0%, #FFE4C0 60%, #F0FFC2 95%);'
} 


 function loadProfile() {
    let myName = 'Wittawas';
    let myProvince = 'Chainat';

    document.querySelector('#my-name').innerHTML = myName;
    document.querySelector('#my-province').innerHTML = myProvince;
    document.querySelector('.bg').style = 'background: linear-gradient(135deg, #FFBBBB 0%, #FFE4C0 60%, #F0FFC2 95%);'
 }