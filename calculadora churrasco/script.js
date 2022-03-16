//kids vale por 0,5
//carne 400g por pessoa, se +6h 650g
//cerveja 1,2l se 6+ 2l
//refri 1l se 6+ 1,5l


function calcular(){
    let adult = document.getElementById("ad").value
    let kid = document.getElementById("cr").value 
    let temp = document.getElementById("du").value

    var carne
    var cerveja
    var refri
    
    if (temp > 6){
        carne = adult*650 + kid*325;
        cerveja = adult*2000;
        refri = adult*1500 + kid*750;
    }
    
    else{
        carne = adult*400 + kid*200;
        cerveja = adult*1200;
        refri = adult*1000 + kid*500;
}

     document.getElementById("rc").innerHTML = carne+"g de Carne";
     document.getElementById("rcj").innerHTML = cerveja+"ml de Cerveja";
     document.getElementById("rr").innerHTML = refri+"ml de Refrigerante";
}