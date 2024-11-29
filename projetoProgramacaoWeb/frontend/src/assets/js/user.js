document.getElementById('deleteButton').onclick = async function() {
    const clienteId = prompt("Digite o ID do cliente que deseja deletar:"); // Solicita o ID do cliente
    if (clienteId) {
        const confirmDelete = confirm('Tem certeza que deseja deletar este cliente?');
        if (confirmDelete) {
            await deleteCliente(clienteId); // Chama a função para deletar o cliente
            carregarClientes();
        }
    }
};

async function deleteCliente(id) {
    try {
        const response = await fetch(`http://localhost:3000/api/cliente/${id}`, {
            method: 'DELETE', // Método para deletar
        });

        if (response.ok) {
            alert('Cliente deletado com sucesso!');
            // Aqui você pode adicionar lógica para atualizar a interface, se necessário
        } else {
            alert('Erro ao deletar cliente');
        }
    } catch (error) {
        console.error('Erro ao deletar cliente:', error);
    }
}

// Função para preencher o formulário com os dados do cliente selecionado
function preencherFormulario(clienteId) {
    fetch(`http://localhost:3000/api/cliente/${clienteId}`) // Supondo que essa rota retorne um cliente específico pelo ID
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar cliente');
            }
            return response.json();
        })
        .then(cliente => {
            // Preenche os campos do formulário com os dados do cliente
            document.getElementById('inputNome').value = cliente.nome;
            document.getElementById('inputEmail3').value = cliente.email;
            document.getElementById('inputEndereco').value = cliente.endereco;
            document.getElementById('inputBairro').value = cliente.bairro;

            // Adiciona um atributo de ID ao formulário para saber que cliente está sendo editado
            document.getElementById('cadastro-form').setAttribute('data-cliente-id', cliente.id);
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao carregar os dados do cliente.');
        });
}

// Chama a função para carregar os clientes quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarClientes);