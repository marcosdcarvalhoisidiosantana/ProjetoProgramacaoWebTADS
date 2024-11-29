const opcao1 = document.getElementById('visualisarUsuarios');
// Adicionando os itens na lista do modal de visualizar usuarios.
async function carregarUsuario() {
  fetch('http://localhost:3000/api/usuario') // Rota que devolve todos os clientes
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao buscar clientes');
          }

          return response.json();
      })
      .then(usuario => {
          const tabelaUsuarios = document.getElementById('clientes-list');
          // Limpa a tabela antes de preenchê-la
          tabelaUsuarios.innerHTML = ''; // Limpa a tabela antes de preenchê-la
          usuario.forEach(usuario => {
              const novaLinha = document.createElement('tr');
              novaLinha.innerHTML = `
                  <td>${usuario.id}</td>
                  <td>${usuario.nome}</td>
                  <td>${usuario.email}</td>
              `;
              tabelaUsuarios.appendChild(novaLinha);
          });
      })
      .catch(error => {
          console.error('Erro:', error);
          alert('Ocorreu um erro ao carregar a lista de usuarios.');
      });
}

// Adicionar listeners aos radio buttons
opcao1.addEventListener('click', () => {
  carregarUsuario();
});

// Botao de deletar
botaoDelete = document.getElementById('buttonExcludeOfficial');

async function deleteCliente() {
    const id = document.getElementById('inputIDDelete').value;
    console.log(id);

    try {
        const response = await fetch(`http://localhost:3000/api/usuario/${id}`, {
            method: 'DELETE', // Método para deletar
        });

        const data = await response.json(); // Captura a resposta em formato JSON
        console.log(data)
        // Verifique o código de status e a mensagem de sucesso do servidor
        if (response.ok && data.success) {
            alert(data.message);
            // Aqui você pode adicionar lógica para atualizar a interface, se necessário
        } else {
            // Se o servidor retornar uma falha
            alert(data.message || 'Erro ao deletar cliente');
            console.log('Status:', response.status);
            console.log('Detalhes:', data.message);
        }
    } catch (error) {
        console.error('Erro ao deletar cliente:', error);
        alert('Ocorreu um erro inesperado ao tentar deletar o cliente.');
    }
}

botaoDelete.addEventListener('click', () => {
    deleteCliente();
})