const btn = document.querySelector('.res-btn');
const input1 = document.querySelector('.a')
const input2 = document.querySelector('.b')
const input3 = document.querySelector('.c')


btn.addEventListener('click', function (event) {

    let a = input1.value;
    let b = input2.value;
    let c = input3.value;
    let d = Math.pow(b, 2) - 4 * a * c;
    alert(d);

   if(d > 0){
      
            let x1 = (-b1 + Math.sqrt(d1))/ (2*a1);
            let x2 = (-b1 - Math.sqrt(d1))/ (2*a1);
            alert(x1);
            alert(x2);
        
    }

    if(d > 0){
        
        let x1 = (-b1 + Math.sqrt(d1))/ (2*a1);
        let x2 = (-b1 - Math.sqrt(d1))/ (2*a1);
        alert(x1);
        alert(x2);
    }

    if(d < 0){
        alert("Нет решения");
    }

    if(d == 0){
        let x = (-b1 + Math.sqrt(d1))/ (2*a1);
        alert(x);
    }
}
)