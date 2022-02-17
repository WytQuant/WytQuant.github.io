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