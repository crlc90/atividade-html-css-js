/**
 * Created by Thiarlleson on 18/03/2017.
 */


teste = 0;


function desativarBotao(id){

    if (id=="btn1") {
        var botao1=document.getElementById("btn1").disabled=true;
        botao1.disabled=true;
        var botao2=document.getElementById("btn2");
        botao2.disabled=false;
    } else {
        var botao2=document.getElementById("btn2");
        botao2.disabled=true;
        var botao1=document.getElementById("btn1");
        botao1.disabled=false;
    }

}



function magica() {

        if(teste % 2 == 0) {
            var div1 = document.getElementById("conteudo1");
            var div3 = document.getElementById("conteudo3");
            div1.style.background = "#000010";
            div3.style.background = "#000010";
        }
        else {
            var div1 = document.getElementById("conteudo1");
            var div3 = document.getElementById("conteudo3");
            div1.style.background = "#FFA500";
            div3.style.background = "#FFA500";

        }
        teste++;
}