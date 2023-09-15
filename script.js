/*
 *  Script com a lógica do Jogo da Velha
 *  Ele possui o esqueleto dos método essenciais.
 *
 *  DICAS GERAIS:
 *  - Modifique este arquivo o quanto for necessário.
 */

/*Declaração de uma variável que retorna uma lista de elementos presentes no documento 
* que coincidam com o grupo de seletores especificado. 
O objeto retornado é uma NodeList.  
*/
const cells = document.querySelectorAll(".cell");

//Variável que retorna o valor selecionado do statusText
const statusText = document.querySelector("#statusText");

/*Insira aqui as condições de vitória, para isso utilize a lógica do funcionamento
 * do jogo da velha
 */
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

// Chamada da função para inicializar o jogo
initializeGame();

// Insira aqui a função para a inicialização do jogo
function initializeGame() {}

// Função para a verificação do clique para adicionar o valor e verifica o vencedor.
function cellClicked() {
    
    let cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return
    }
    updateCell();
    checkWinner();

}

// Função para atualizar visualização da informação
function updateCell(cell, index) {
   options[index] = currentPlayer
   cell.textContent = currentPlayer
;}

// Função para escolha e alternância de jogadores
function changePlayer(currentPlayer) {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    statusText.textContent = "Vez do jogador" + currentPlayer
}

//Função para verificar o vencedor
function checkWinner() {
    let vencedor = false
    for(i = 0; i < winConditions.length; i++){
        const condition = winConditions[i]
        const cellA = condition[0]
        const cellB = condition[1]
        const cellC = condition[2]
    }
    
}

// Função para resert das informações da tela
function restartGame() {}
