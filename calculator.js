let result = document.getElementById("result");
let previousOperator = ""; 
let addDot = "";

function clickButton(target) {
    console.log(target);
    if (target == "AC") {
        result.innerHTML = "0";
        previousOperator = "";
        console.log("ACが押された");
    } else if (target == "=") {
        if(previousOperator){
        result.innerHTML=result.innerHTML.slice(0,-1)
        }
        result.innerHTML = eval(result.innerHTML);
        previousOperator = "";
        console.log("=が押された");
    } else if (target == ".") {
        if (!result.innerHTML.includes(".")) {
            result.innerHTML += target;
        }
        else if(!addDot){
            result.innerHTML += target;
        }
        addDot = target
        console.log(".が押された");
    } else if (["+", "-", "*", "/"].includes(target)) {
        if (previousOperator) {
            // 演算子が2回押された場合、上書き
            result.innerHTML = result.innerHTML.slice(0, -1) + target;
        } else {
            result.innerHTML += target;
        }
        previousOperator = target; // 演算子を記録
        console.log("演算子が押された");
    } else {
        if (result.innerHTML === "0") {
            result.innerHTML = target;
            console.log("0が押された");
            previousOperator = ""
            addDot = ""
        } else {
            result.innerHTML += target;
            console.log("数字が押された");
            previousOperator = ""
            addDot = ""
        }
    }
}