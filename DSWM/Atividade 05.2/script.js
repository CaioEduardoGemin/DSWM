// Definição do saldo inicial do cliente
let saldo = 200.00;
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

// Função para remover um item individualmente do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o item pelo índice
    atualizarCarrinho();
}

// Função para calcular o total da compra
function calcularTotal() {
    return carrinho.reduce((total, item) => total + item.preco, 0);
}

// Função para atualizar o carrinho na interface
function atualizarCarrinho() {
    const carrinhoList = document.getElementById("carrinho-list");
    const totalCompra = document.getElementById("total");

    // Limpa o carrinho antes de adicionar novos itens
    carrinhoList.innerHTML = "";

    carrinho.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;

        // Criar botão de remoção individual
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("remover"); // Adiciona a classe CSS ao botão
        botaoRemover.onclick = () => removerDoCarrinho(index);

        li.appendChild(botaoRemover);
        carrinhoList.appendChild(li);
    });

    totalCompra.textContent = `R$${calcularTotal().toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
    const mensagem = document.getElementById("mensagem");
    let total = calcularTotal();

    if (total > saldo) {
        mensagem.textContent = "Saldo insuficiente!";
        mensagem.style.color = "red";
    } else {
        saldo -= total;
        document.getElementById("saldo").textContent = `R$${saldo.toFixed(2)}`;
        carrinho = []; // Limpa o carrinho após a compra
        atualizarCarrinho();
        mensagem.textContent = `Compra realizada com sucesso! Novo saldo: R$${saldo.toFixed(2)}`;
        mensagem.style.color = "green";
    }
}
