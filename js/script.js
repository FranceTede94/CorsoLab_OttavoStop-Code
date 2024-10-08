document.addEventListener("DOMContentLoaded",function(){
    let bomba= parseInt(Math.random() * 16);
    let click = 0;

    console.log(bomba);

    for(let i=0; i<16;i++){
    document.querySelector("#gioco ul").innerHTML += "<li>"+"</li>";
    }

    let lista = document.querySelectorAll("li");
    console.log(lista);


    for (let i = 0; i < lista.length; i++) {

        lista[i].onclick = function(){
            if (i == bomba) {
                lista[i].style.backgroundImage = "url(immagini/bomb.png)";
                document.getElementById("fine").style.display = "inline-block";
                document.querySelector("#gioco span").innerHTML= "<span class='bloccaGioco'></span>";
                document.querySelector("#fine p span").innerHTML= click;
                }
             else {
                lista[i].style.backgroundImage = "url(immagini/rainbow.png)";
            }
            click++; 
        }
    }

document.getElementById("new").onclick = function(){
        location.reload();
}


});//DOMContentLoaded

