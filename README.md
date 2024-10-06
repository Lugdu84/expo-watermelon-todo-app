# My Ideas, Expo et watermelonDB, local first 👋

## Création du projet

Création et préparation du projet

```bash
npm create-expo-app@latest
```

```bash
npm run reset-project
```

```bash
cd my-ideas
code .
```

## Installation de watermelonDB

```bash
npm install @nozbe/watermelondb
```

```bash
npx expo install expo-build-properties
```

```bash
npm install -D @babel/plugin-proposal-decorators
```

```tsx
plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
```

(bagel.config.js)

```tsx
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "extraPods": [
              {
                "name": "simdjson",
                "configurations": ["Debug", "Release"],
                "path": "../node_modules/@nozbe/simdjson",
                "modular_headers": true
              }
            ]
          }
        }
      ]
    ]
  }
}
```

(app.json)

```tsx
"experimentalDecorators": true
```

(tsconfig.json => compilerOptions)

## developpement build

Pour utiliser watermelonDB, nous aurons besoin de sortir d'Expo Go et d'utiliser un build de développement.

```bash
npx expo prebuild
```

ou

```bash
npx expo run:ios
npx expo run:android
```

Dans le .gitignore, pensez bien à rajouter les deux dossiers qui seront générés par le prebuild :

```bash
/android
/ios
```

## Configuration de WatermelonDB
