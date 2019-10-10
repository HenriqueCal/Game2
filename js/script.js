var sorteio = [];
var escolhas = [];
var acertadas =[];

function numerosAleatorios(){
    while(sorteio.length < 24){
        var aleatorio = Math.floor(Math.random() * (24) + 1);
        if(sorteio.indexOf(aleatorio) == -1){
            sorteio.push(aleatorio);
        }

    }
}

function start(){
    sorteio = [];
    numerosAleatorios();

    let cont = 0;
    let tabela = document.getElementById('tabela');
    tabela.innerHTML = "";

    for(let i=1;i<=4;i++){
        tabela.innerHTML += `<tr id="linha${i}"></tr>`;
        for(let j=1;j<=6;j++){
            let n = sorteio[cont++];
            let classe = n;
            if(n%2==0){
                classe -= 1;
            }
            document.getElementById('linha'+i).innerHTML += `<td><img name="${classe}" src="../img/frente.jpg" onclick="seleciona(this)"></td>`;
        }
    }

}

function reset(){
    document.getElementById('acertos').innerText = 0;
    document.getElementById('erros').innerText = 0;
    document.getElementById('p').innerText = "Escolha duas cartas.";
    escolhas = [];
    acertadas = [];
    start()
}

function seleciona(imagem){

    if(escolhas.indexOf(imagem) == -1 && acertadas.indexOf(imagem) == -1){
        escolhas.push(imagem);
        imagem.src=`../img/${imagem.name}.jpg`;
        imagem.style = "box-shadow: 10px 10px 10px rgba(0, 0, 0);"
        
        if(escolhas.length == 2){
            verifica();
            escolhas = [];
        }

    }
}

function verifica(){

    if(escolhas[0].name == escolhas[1].name){
        let acerto =  document.getElementById('acertos');
        acerto.innerText = Number(acerto.innerText) + 1
        acertadas.push(...escolhas);
        document.getElementById('p').innerText = "Parabéns!"
    } else {
        let acerto =  document.getElementById('erros');
        acerto.innerText = Number(acerto.innerText) + 1;

        setTimeout(viraImagem, 2000, escolhas);

        for(let i in escolhas){
            escolhas[i].style = ""
        }
        document.getElementById('p').innerText = "Tente novamente!"

    }
}


function viraImagem(vetor){

    console.log('quadro');

    if(escolhas.indexOf(vetor[0]) == -1 && acertadas.indexOf(vetor[0]) == -1)
        vetor[0].src=`../img/frente.jpg`;
    
    if(escolhas.indexOf(vetor[1]) == -1 && acertadas.indexOf(vetor[1]) == -1)
        vetor[1].src=`../img/frente.jpg`;   
    
}

start();












