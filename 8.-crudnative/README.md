<p>
<img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
<img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

# Screenshots
![](screenshot/Untitled.png)

## Descripción
CRUD de Clientes con [JSON-SERVER](https://github.com/typicode/json-server)
##
**CRUD** es el acrónimo de "Crear, Leer, Actualizar y Borrar" 

## Desarrollo Local
### Pre-requisitos

Tener instalado Xcode y Android Studios

#### 1. Instalar los paquetes 
```bash
    npm install 
```

#### 2.1 Paso adicional para iOS
```bash
    cd ios && pod install
```

#### 3. Instalar Json-Server
[JSON-SERVER](https://github.com/typicode/json-server)
```bash
    npm install -g json-server
```

#### 4. Inicie el servidor JSON
```bash
    json-server db.json
```

#### 5 Inicie la aplicación en modo de desarrollo
```bash
    npx react-native run-ios
    or
    npx react-native run-android
```

