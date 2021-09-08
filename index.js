function oparation(op){
    if(op != ""){
        let operador1 = document.getElementById("textNumber1").value;
        let operador2 = document.getElementById("textNumber2").value;
        let result = eval(operador1+op+operador2);
        document.getElementById("textResult").value = result;
        console.log(result);
    }else{
        alert("Por favor, informar operação válida!");
        document.getElementById("textNumber1").value = 0;
        document.getElementById("textNumber2").value = 0;
        document.getElementById("textResult").value = 0;
    }
}