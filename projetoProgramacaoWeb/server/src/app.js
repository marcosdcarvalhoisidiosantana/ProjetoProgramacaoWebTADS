// const express = require('express');
// const clienteRoutes = require('./routes/cliente/clienteRoutes');
// const cors = require('cors');

// const app = express();

// // Habilitar CORS
// app.use(cors());

// // Habilitar o parsing do JSON
// app.use(express.json());

// // Definir rotas
// app.use('/api', clienteRoutes);

// // Iniciar o servidor
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });

// module.exports = app;



const express = require('express');
const clienteRoutes = require('./routes/user/userRoutes')
const cors = require('cors');

const app = express();

// Habilitar CORS
app.use(cors());

app.use(express.json());
console.log('Rota 01')
app.use('/api', clienteRoutes);

module.exports = app;