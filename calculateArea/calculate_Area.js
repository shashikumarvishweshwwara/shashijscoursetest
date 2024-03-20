let length;
let width;
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }
   function totalExpenditure() {
    grocery1 = parseInt(document.getElementById('grocery1').value);
    grocery2 = parseInt(document.getElementById('grocery2').value);
    grocery3 = parseInt(document.getElementById('grocery3').value);
    let totalexpenditure = grocery1 + grocery2 + grocery3;
    document.getElementById('totalexpenditureresult').innerText = `The total expenditure is: ${totalexpenditure}`;
   }   