const listaTarefas = [];

function adicionarTarefa() {
    const descricaoInput = document.getElementById("descricao");
    const autorInput = document.getElementById("autor");
    const departamentoInput = document.getElementById("departamento");
    const importanciaInput = document.getElementById("importancia");
    const duracaoInput = document.getElementById("duracao");
    const unidadeDuracaoInput = document.getElementById("unidadeDuracao");

    const descricao = descricaoInput.value.trim();
    const autor = autorInput.value.trim();
    const departamento = departamentoInput.value;
    const importancia = parseInt(importanciaInput.value);
    const duracao = parseInt(duracaoInput.value);
    const unidadeDuracao = unidadeDuracaoInput.value;

    if (
        descricao !== "" &&
        autor !== "" &&
        departamento !== "" &&
        !isNaN(importancia) &&
        importancia >= 1 &&
        importancia <= 10 &&
        !isNaN(duracao) &&
        duracao > 0
    ) {
        const tarefa = {
            descricao: descricao,
            autor: autor,
            departamento: departamento,
            importancia: importancia,
            duracao: `${duracao} ${unidadeDuracao}`
        };

        listaTarefas.push(tarefa);
        mostrarTarefas();
        limparCampos();
    }
}

function mostrarTarefas() {
    const listaTarefasElement = document.getElementById("listaTarefas");
    listaTarefasElement.innerHTML = "";

    listaTarefas.forEach((tarefa, indice) => {
        const tarefaElement = document.createElement("li");
        tarefaElement.innerHTML = `
            <strong>Descrição:</strong> ${tarefa.descricao} 
            <strong>Autor:</strong> ${tarefa.autor} 
            <strong>Departamento:</strong> ${tarefa.departamento}
            <strong>Importância:</strong> ${tarefa.importancia}
            <strong>Duração:</strong> ${tarefa.duracao}
            <button onclick="excluirTarefa(${indice})">Excluir</button>
        `;
        listaTarefasElement.appendChild(tarefaElement);
    });
}

function excluirTarefa(indice) {
    listaTarefas.splice(indice, 1);
    mostrarTarefas();
}

function limparCampos() {
    document.getElementById("descricao").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("departamento").value = "";
    document.getElementById("importancia").value = "";
    document.getElementById("duracao").value=""
}

document.getElementById("adicionarTarefa").addEventListener("click", adicionarTarefa);



