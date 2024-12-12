/* // Array de imagens para cada card
const imagensPorCard = [
    ['./carros/Colorado 4X4/1_.jpg', './carros/Colorado 4X4/2_.jpg'],
    ['./carros/Corolla Hybrid/1_.jpg', './carros/Corolla Hybrid/2_.jpg', './carros/Corolla Hybrid/3_.jpg'],
    ['./carros/Elantra/1_.jpg', './carros/Elantra/2_.jpg', './carros/Elantra/3_.jpg'],
    ['./carros/Ford F-150/1_.jpg', './carros/Ford F-150/2_.jpg', './carros/Ford F-150/3_.jpg'],
    ['./carros/Ford Fusion/1_.jpg', './carros/Ford Fusion/2_.jpg', './carros/Ford Fusion/3_.jpg'],
    ['./carros/Ford Mustang Conversivel/1_.jpg', './carros/Ford Mustang Conversivel/2_.jpg', './carros/Ford Mustang Conversivel/3_.jpg']
];

function trocarImagem(botao, direcao) {
    // Encontre o card mais próximo do botão clicado
    const card = botao.closest('.card'); // Seleciona o card pai do botão
    
    const imagem = card.querySelector('img'); // Use 'img' se não houver a classe .card-image
    
    // Converte a lista de cards em um array e encontra o índice do card atual
    const indiceCard = Array.from(document.querySelectorAll('.card')).indexOf(card);
    
     // Obtém o array de imagens correspondente ao card atual
    const imagens = imagensPorCard[indiceCard];

    // Obter o índice atual da imagem
    let indiceAtual = imagens.indexOf(imagem.src.split('/').pop());

    // Atualizar o índice com base na direção
    if (direcao === 'direita') {
        indiceAtual = (indiceAtual + 1) % imagens.length;
    } else if (direcao === 'esquerda') {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    }

    // Atualizar a imagem do card
    imagem.src = imagens[indiceAtual];
} */

/* ------------------------------- segundo codigo -------------------------------------------*/

// Definindo um objeto para armazenar as imagens de cada carro
const imagensCarros = {
    "Chevrolet Colorado 4X4": [
        "carros/Colorado 4X4/1_.jpg",
        "carros/Colorado 4X4/2_.jpg"
        
    ],
    "Toyota Corolla Hybrid": [
        "carros/Corolla Hybrid/1_.jpg",
        "carros/Corolla Hybrid/2_.jpg"
    ],
    "Hyundai Elantra": [
        "carros/Elantra/1_.jpg",
        "carros/Elantra/2_.jpg",
        "carros/Elantra/3_.jpg",
        "carros/Elantra/4_.jpg"
    ],
    "Ford F-150": [
        "carros/Ford F-150/1_.jpg",
        "carros/Ford F-150/2_.jpg",
        "carros/Ford F-150/3_.jpg"
    ],
    "Ford Fusion Hibrid": [
        "carros/Ford Fusion/1_.jpg",
        "carros/Ford Fusion/2_.jpg",
        "carros/Ford Fusion/3_.jpg"
    ],
    "Ford Mustang": [
        "carros/Ford Mustang Conversivel/1_.jpg",
        "carros/Ford Mustang Conversivel/2_.jpg",
        "carros/Ford Mustang Conversivel/3_.jpg"
    ]
};

// Inicializa um objeto para armazenar o índice atual de cada carro
const indicesAtuais = {
    "Chevrolet Colorado 4X4": 0,
    "Toyota Corolla Hybrid": 0,
    "Hyundai Elantra": 0,
    "Ford F-150": 0,
    "Ford Fusion Hibrid": 0,
    "Ford Mustang": 0
};

// Função para trocar imagem
function trocarImagem(button, direction) {
    // Obtém o card pai e o título do carro
    const card = button.closest('.card');
    const titulo = card.querySelector('h2').innerText;
    const imagem = card.querySelector('img');

    // Atualiza o índice atual com base na direção
    if (direction === 'esquerda') {
        indicesAtuais[titulo] = (indicesAtuais[titulo] - 1 + imagensCarros[titulo].length) % imagensCarros[titulo].length;
    } else if (direction === 'direita') {
        indicesAtuais[titulo] = (indicesAtuais[titulo] + 1) % imagensCarros[titulo].length;
    }

    // Troca a imagem exibida
    imagem.src = imagensCarros[titulo][indicesAtuais[titulo]];
}
