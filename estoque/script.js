// Lista de imagens para cada carro
const imagensCarros = {
    "Chevrolet Colorado 4X4": [
        "carros/Colorado_4X4/1_.jpg",
        "carros/Colorado_4X4/2_.jpg"
    ],
    "Toyota Corolla Hybrid": [
        "carros/Corolla_Hybrid/1_.jpg",
        "carros/Corolla_Hybrid/2_.jpg"
        ]
    ,
    "Hyundai Elantra": [
        "carros/Elantra/1_.jpg",
        "carros/Elantra/2_.jpg",
        "carros/Elantra/3_.jpg",
        "carros/Elantra/4_.jpg"
    ],
    "Ford F-150": [
        "carros/Ford_F-150/1_.jpg",
        "carros/Ford_F-150/2_.jpg",
        "carros/Ford_F-150/3_.jpg"
    ],
    "Ford Fusion Hibrid": [
        "carros/Ford_Fusion/1_.jpg",
        "carros/Ford_Fusion/2_.jpg",
        "carros/Ford_Fusion/3_.jpg"
    ],
    "Ford Mustang": [
        "carros/Ford_Mustang_Conversivel/1_.jpg",
        "carros/Ford_Mustang_Conversivel/2_.jpg",
        "carros/Ford_Mustang_Conversivel/3_.jpg"
    ]
};


// ------------------- Guarda o índice da imagem atual exibida para cada carro

const imagemAtual = {
    "Chevrolet Colorado 4X4": 0,
    "Toyota Corolla Hybrid": 0,
    "Hyundai Elantra": 0,
    "Ford F-150": 0,
    "Ford Fusion Hibrid": 0,
    "Ford Mustang": 0
};


// ------------------- Função para trocar a imagem

function trocarImagem(botaoClicado, direcao) {
    // Encontra o card que contém o botão clicado
    const cardDoCarro = botaoClicado.closest('.card'); 

    // Pega o nome do carro (título)
    const nomeDoCarro = cardDoCarro.querySelector("h2").innerText;

    // Pega a imagem do carro no card
    const imagemDoCarro = cardDoCarro.querySelector("img");

    // Obtém o índice atual da imagem e o total de imagens
    let indice = imagemAtual[nomeDoCarro];
    const totalImagens = imagensCarros[nomeDoCarro].length;

    // Calcula o novo índice com base na direção
    if (direcao === "esquerda") {
        // Decrementa o índice, se for menor que 0, vai para a última imagem
        if (indice === 0) {
            indice = totalImagens - 1;
        } else {
            indice--;
        }
    } else {
        // Incrementa o índice, se for maior que o total de imagens, vai para a primeira imagem
        if (indice === totalImagens - 1) {
            indice = 0;
        } else {
            indice++;
        }
    }

    // Atualiza o índice no objeto
    imagemAtual[nomeDoCarro] = indice;

    // Atualiza a imagem no card
    imagemDoCarro.src = imagensCarros[nomeDoCarro][indice];
};
