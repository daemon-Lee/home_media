# learn_Typescript
Simple project for learning Typescript

## First install TypeScript
TypeScript is advance of JavaScript so mush intall npm first and init new project:
```bash
" install JavaScript "
sudo apt install npm
" Then init new project "
npm init -y
```

Globally Installing TypeScript for install on your computer
```bash
sudo npm install -g typescript
```

## Run Typescript file
To run Typescript file must compile `.ts` files to `.js`
```bash
tsc index

' to run file '
node index.js
```
To watch live change on `.js` file run command:
```bash
tsc -w index.ts
```
And watch live result
```bash
' install nodemon'
npm i --save-dev nodemon
' run watch'
npm run watch
```

To init Typescipt project, typing
```bash
npx tsc --init
```