## Versões das ferramentas usadas no desenvolvimento desse projeto

- react-native-cli: 2.0.1
- react-native: 0.61.2
- yarn: 1.17.3
- nodejs: v12.11.1
- npm: 6.11.3

### Funcionalidades implementadas no projeto 
- Renderizar um mapa na tela
- Pedir permissão para pegar a localização atual do usuario 
    - (Issue) Se GPS tá desligada, app dá crash

- Api para gerencias acesso aos dados de pontos geograficos, guardados num banco que servirão a aplicação. 
- App vai renderezar na tela os pontos trazidos do backend
- Pontos só serão renderizados se tiverem a 10 km da posição inicial

### Dependências do Projeto

- [react-native-maps](https://github.com/react-native-community/react-native-maps)

  `yarn add react-native-maps`

- [react-native-community/geolocation](https://github.com/react-native-community/react-native-geolocation)

  `yarn add @react-native-community/geolocation`

**Problema: na hora de instalar maps, faltou uma dependência no node_modules/lib/android/build.gradle** 

- Para resolver: adicionar nas *dependecies* do *node_modules/lib/android/build.gradle* a linha abaixo.

  `def supportLibVersion = safeExtGet('supportLibVersion', '28.0.0')`

- [Fonte para correção do bug](https://github.com/react-native-community/react-native-maps/pull/3106/files)

## Backend
`yarn add express pg pg-hstore sequelize`
`yarn add  sequelize-cli -D`
`yarn add  nodemon -D `