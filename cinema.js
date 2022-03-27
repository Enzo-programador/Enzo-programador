let catalogo = [{codigo : 1,
    titulo : "Karate Kid",
    duracao : 2.20,
    atores : ["Jaden Smith", "Jackie Chan", "Taraji Henson"],
    anoDeLancamento : 2010,
    emCartaz : false }, {

    codigo : 2,
    titulo :"Pânico 5",
    duracao : 1.54,
    atores : ["Jenna Ortega"],
    anoDeLancamento : 2022,
     emCartaz : true
    }];

let filme3 = {
    codigo : 3,
    titulo : "Homem-Aranha",
    duracao : 2.28,
    atores : ["Tom Holland"],
    anoDeLancamento : 2022,
    emCartaz : true
}

function adicionarFilme(adicionar){
    catalogo.push(adicionar)
}

adicionarFilme(filme3);
var encontrado = false;

function buscarFilme(identificador){
    for(var i =0; i < catalogo.length; i++)
    if(catalogo[i].codigo == identificador){
        encontrado = true;
        return catalogo[i].titulo
    }
}

let busca = buscarFilme(2);
if (encontrado == true){
    console.log('O filme procurado é o : ' + busca);
}else{
    console.log('Filme nao encontrado.')
}

function alterarStatusEmcartaz(identificador){
    for(var i =0; i < catalogo.length; i++)
    if(catalogo[i].codigo == identificador){
    if(catalogo[i].emCartaz == true){
        catalogo[i].emCartaz = false;
    }else{
        catalogo[i].emCartaz = true;
    }
}
}

alterarStatusEmcartaz(2);

console.log(catalogo)