function updateCalculation (){
  document.querySelector('.js-calculate').innerHTML = `${calculation}`;
}

let calculation = localStorage.getItem('calculation') || '';

function calbutton(sign){
  calculation += `${sign}`;
  console.log(calculation);

  updateCalculation();  
  localStorage.setItem('calculation', calculation);
}