const addPriceBtn = document.getElementById('calBtn');
addPriceBtn.addEventListener('click', function(){
    console.log('dd');
    const inputFoodName = document.getElementById('input-Food').value;
    const inputRentName = document.getElementById('input-Rent').value;
    const inputClothesName = document.getElementById('input-Clothes').value;

    // console.log(inputFoodName);
    // console.log(inputRentName);
    // console.log(inputClothesName);
    const totalexpence =  parseInt(inputFoodName)+ parseInt(inputRentName)+ parseInt(inputClothesName);
     document.getElementById('total-exp').innerText = totalexpence;
     const income = document.getElementById('income').value;
     const blance =  parseInt(income) - totalexpence;
     
     document.getElementById('blance').innerText = blance;


})
const saveamount = document.getElementById('saveamount');
saveamount.addEventListener('click', function(){
    //console.log('dd');
    const parcentagemany = document.getElementById('parcentagemany').value;

     console.log(parcentagemany);
    // console.log(inputRentName);
    // console.log(inputClothesName);
    const blance = document.getElementById('blance').innerText;
    console.log(blance);
     const saving =parseInt(blance) * parseInt(parcentagemany) /100 ;
     console.log(saving);
     document.getElementById('saving').innerText = saving;

     const remainingb =  blance - saving;
     
     document.getElementById('remainingb').innerText = remainingb;



})

