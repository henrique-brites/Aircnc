<h1 align="center"><br><img src=".github/logo.png" width="250px" alt="Aircnc"><br><br>Aircnc - Air Code and Coffee💻☕️</h1>

Projeto desenvolvido durante a semana OmniStack 9 da [Rocketseat](https://rocketseat.com.br). Aplicação fullstack que permite realizar a reserva de Spots para empresas e desenvolvedores, em tempo real utilizando **socket.io**.

<h1 align="center"><img align="center" alt="Frontend" src=".github/aircnc.png" width="700"></img></h1>

## 💻 Projeto

O Aircnc é um projeto que visa conectar empresas que querem abrir spots e desenvolvedores que procuram um lugar para trocar ideias com devs, conhecer a empresa e trabalhar lá por um período.

## Instalação
### Backend/API
Clone este repositório e instale as dependências dentro da pasta `aircnc/backend`
```sh
git clone https://github.com/henrique-brites/Aircnc.git
cd aircnc/backend
yarn
# ou
npm install
```
- No arquivo `.env` incluir em `PORT` a porta que vai executar a api, na `MONGO_URL` sua URL de conexão com o banco de dados **MongoDB** e em `THUMBNAIL_URL` sua URL onde estão as imagem na api ou IP da máquina caso utilize dispositivo físico
### Rodar Backend/API
```
yarn dev
```
> Lembre-se de deixar rodando o backend...
### Frontend
Instale as dependências dentro da pasta `aircnc/frontend`
> Em um novo terminal execute os comandos:
```sh
cd frontend
yarn
# ou
npm install
```
### Rodar Frontend
```
yarn start
```
### App Mobile
O modo mais fácil de rodar esse aplicativo no **Android** é utilizando o [Expo](https://expo.io/).
Primeiro instale o `expo-cli` de forma global em sua máquina. 
Dentro da pasta `aircnc/mobile` instale as dependências do app, em seguida execute o app.
```
npm install -g expo-cli
yarn
yarn start
``` 
Ao abrir uma aba em seu navegador do **Expo DevTools** com o **QRCode**, baixe o aplicativo do **Expo** em sua [play store](https://play.google.com/store/apps/details?id=host.exp.exponent) e faça o Scan do QRCode em seu celular.

- No arquivo `src/config/server-config.js` incluir em `URL` a mesma configuração do Backend.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com :purple_heart: by  Henrique Brites :wave: