// Selecionar os radio buttons
const opcao = document.getElementById('masculino');
const opcao2 = document.getElementById('feminino');
const opcao3 = document.getElementById('outro');

// Selecionar o campo a ser preenchido
const campo = document.getElementById('inputGenero');

// Adicionar listeners aos radio buttons
opcao.addEventListener('click', () => {
  campo.value = '1';
});

opcao2.addEventListener('click', () => {
  campo.value = '2';
});

opcao3.addEventListener('click', () => {
    campo.value = '3';
  });
// Adicionando usuario.
document.getElementById('insertButton').addEventListener('click', function (event) {

  event.preventDefault(); // Evita o comportamento padrão do botão

  const nome = document.getElementById('inputNome').value;
  const email = document.getElementById('inputEmail').value;
  const senha = document.getElementById('inputPassword').value;
  const genero = document.getElementById('inputGenero').value;
  const data_nascimento = document.getElementById('inputNascimento').value;
  const pais = document.getElementById('inputPais').value;

  // Chamada à API para enviar os dados
  fetch('http://localhost:3000/api/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, email, senha, genero, data_nascimento, pais })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na resposta da rede');
      }
      return response.json();
    })
    .then(data => {
      console.log('Sucesso:', data);
      alert('Cliente cadastrado com sucesso!'); // Mensagem de sucesso
      
      // Limpar o formulário
      const formulario = document.getElementById('cadastro-form')
      // Adiciona o evento ao botão
      formulario.reset(); // Reseta todos os campos do formulário
    }).catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao cadastrar o cliente.'); // Mensagem de erro
    });
}); 