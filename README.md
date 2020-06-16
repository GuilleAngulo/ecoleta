
# ♻️ Ecoleta App
App desenvolvido na NLW da Rocketseat para cadastrar pontos de coleta de resíduos na parte web (navegador) e filtrar esses pontos na versão mobile. O projeto foi desenvolvido com Typecript e consiste nas seguintes partes:

- 📡 Server. Desenvolvido com Node.js e Typescript, fornece uma API conectada com o banco de dados (sqlite) conectado pelo query builder [Knex.js](http://knexjs.org/). Fornece a capacidade de cadastrar e listar pontos de coleta. Tambem faz uso do modulo [Multer](https://www.npmjs.com/package/multer) para subir arquivos de fotos e o [Celebrate](https://github.com/arb/celebrate) para a validação dos dados enviados.

- 🖥️ Web. Desenvolvido com ReactJS e Typescript para acessar pelo navegador, fornece a capacidade de cadastrar pontos de coleta que depois serão listados na versão mobile. Funciona com [Axios](https://github.com/axios/axios) como modulo para fazer requisições pro server. Tambem utiliza a API do [IBGE](https://servicodados.ibge.gov.br/api/docs) para lidar com os UFs e cidades e [Leaflet](https://leafletjs.com/) para a inclusão do mapa.

- 📱 Mobile. Desenvolvido com React Native e Typescript para acessar no celular utilizando o [Expo](https://expo.io/).  

## 🎥 Video Demo
[![Watch the demo](https://github.com/GuilleAngulo/ecoleta/blob/master/server/uploads/ecoleta.png)](https://youtu.be/3fAo0kZj-zg)
