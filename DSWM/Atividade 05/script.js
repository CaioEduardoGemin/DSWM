let tentativas = 0;
const maxTentativa = 3;
const senhacerta = "12345";

function togglePassword() {
    const passwordField = document.getElementById("senha"); 
    if (passwordField) {
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    }
}

function login() {
    const username = document.getElementById("username")?.value.trim();
    const senha = document.getElementById("senha")?.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (!mensagem) {
        console.error("Elemento de mensagem não encontrado.");
        return;
    }

    if (!username || !senha) {
        mensagem.textContent = "Todos os campos devem ser preenchidos.";
        return;
    }

    if (tentativas >= maxTentativa) {
        mensagem.textContent = "Usuário bloqueado. Número máximo de tentativas atingido.";
        return;
    }

    if (senha === senhacerta) {
        mensagem.textContent = `Login bem-sucedido! Bem-vindo, ${username}!`;
    } else {
        tentativas++;
        mensagem.textContent = "Senha incorreta. Tente novamente.";
    }
}