'use strict';
function compute(opt) {
        console.log("this : " + this);
        console.log("opt.id : " + opt.id);
    
        let totalValue = Number(total.value);
        let totalTag = document.getElementById("total");
            
        let optvalue = Number(opt.value);
        if(opt.checked) {
            totalValue += optvalue; 
        } else {
            totalValue -= optvalue;
        }
        console.log("totalValue : " + totalValue);
        //화면에 표시
        totalTag.value = totalValue;
    };