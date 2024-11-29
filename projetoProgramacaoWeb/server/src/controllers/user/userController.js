const User = require('../../models/user/User');

class UserController {
  
  // Adicionar um novo usuario
  async adicionarUsuario(req, res) {
    const { nome, email, senha, genero, data_nascimento, pais_origem } = req.body;
    try {
      console.log('Dados recebidos:', req.body);
      const novoUsuario = await User.create({ nome, email, senha, genero, data_nascimento, pais_origem });
      console.log('Usuario criado com sucesso:', novoUsuario);
      res.status(201).json(novoUsuario);
    } catch (error) {
      console.error('Erro ao criar o usuario:', error);
      res.status(500).json({ error: 'Erro ao criar o usuario', descricao: error.message });
    }
  }

  // Listar todos os usuarios
  async listarUsuario(req, res) {
    try {
      const usuarios = await User.findAll();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuarios' });
    }
  }

  // Listar usuarios com filtro usando parâmetros de rota
  async listarUsuarioFiltro(req, res) {
    const { id } = req.params; // Captura o email da URL

    // Verifica se o email foi fornecido
    if (!id) {
      return res.status(400).json({ error: 'O id é um parâmetro obrigatório.' });
    }

    try {
      // Busca os usuarios filtrando pelo email
      const usuarios = await User.findAll({ where: { id } });

      // Verifica se encontrou usuario
      if (usuarios.length === 0) {
        return res.status(404).json({ message: 'Nenhum usuario encontrado com o email fornecido.' });
      }

      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuarios', descricao: error.message });
    }
  }

  // Atualizar informações de um usuario por `id`
  async atualizarInformacoesUsuario(req, res) {
    const { id } = req.params;
    const {  nome, email, senha, genero, data_nascimento, pais_origem } = req.body;
    
    try {
      await Cliente.update({ nome, email, senha, genero, data_nascimento, pais_origem }, { where: { id } });
      res.status(202).json({ message: 'Usuario atualizado com sucesso!' });
    } catch (error) {
      console.error('Erro ao atualizar informações do usuario:', error);
      res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
  }

  // Remover um usuario por `id`
  async removerUsuario(req, res) {
    const { id } = req.params;
    
    try {
      // Supondo que você usa Sequelize ou outro ORM
      const resultado = await User.destroy({ where: { id } });

      if (resultado) {
          res.status(200).json({ success: true, message: 'Registro excluído com sucesso.' });
      } else {
          res.status(404).json({ success: false, message: 'Registro não encontrado.' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Erro ao excluir registro.' });
  }
  }
}

module.exports = new UserController();
