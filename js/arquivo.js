const tarefas = []; // O array que vai guardar as tarefas

function adicionarTarefa() {
    const novaTarefaInput = document.getElementById("novaTarefa");
    const novaTarefa = novaTarefaInput.value; // Pega o valor do input

    if (novaTarefa) { /// Só adiciona se tiver algo digitado
        tarefas.push(`Tarefa ${novaTarefa} `); // Adiciona no array
        novaTarefaInput.value = ""; // Limpa o input

        mostrarTarefas(); // Atualiza a lista de tarefas
    }
}

function mostrarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""; // Limpa a lista

    for (let i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li"); // Cria um item da lista
        li.className = "tarefa-item"; // Adiciona uma classe para o estilo CSS

        const tarefaSpan = document.createElement("span"); // Cria um elemento span
        tarefaSpan.textContent = tarefas[i]; // Põe o texto da tarefa
        li.appendChild(tarefaSpan); // Adiciona o span na li

        const botaoExcluir = document.createElement("button"); // Cria um botão
        botaoExcluir.textContent = "X"; // Texto do botão

        // Usar uma função anônima para preservar o valor de "i"
        botaoExcluir.onclick = (function(indice) {
            return function() {
                excluirTarefas(indice); // Chama a função de excluir com o índice certo
                mostrarTarefas();
            };
        })(i);

        li.appendChild(botaoExcluir); // Adiciona o botão na li

        listaTarefas.appendChild(li); // Adiciona a li na lista
    }
}

function excluirTarefas(indice){
    tarefas.splice(indice, 1);
    mostrarTarefas();
}

// Chamar a função mostrarTarefas para inicializar a lista
mostrarTarefas();