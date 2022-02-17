function calBtn() {
    const foodCost = document.getElementById('input-food').value;
    const rentCost = document.getElementById('input-rent').value;
    const clothesCost = document.getElementById('input-clothes').value;
    const totalexpence =  parseInt(foodCost)+ parseInt(rentCost)+ parseInt(clothesCost);
     document.getElementById('total-exp').innerText = totalexpence;
     const income = document.getElementById('income').value;
     const blance =  parseInt(income) - totalexpence;
     
     document.getElementById('blance').innerText = blance;
  };
function saveamount() {
    const parcentagemany = document.getElementById('parcentagemany').value;
    const blance = document.getElementById('blance').innerText;
     const saving =parseInt(blance) * parseInt(parcentagemany) /100 ;
     document.getElementById('saving').innerText = saving;
     const remainingb =  blance - saving;
     document.getElementById('remainingb').innerText = remainingb;
 }

