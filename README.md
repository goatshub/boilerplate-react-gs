boilerplate-gs-react

init clasp to set up google script.

Use npm start/npm run build to compile react and use npm run gpush/npm run gstart to watch for update and push back to Google Script using Clasp.

For more info of this setup: [video tutorial](https://www.youtube.com/watch?v=aq2B02DuCs0&list=PLDZr7udI2ZkZKg2Nc5wCQhS8baBGArpCS&index=31)



### Steps

> 1. npm i
> 2. npm run glogin
> 3. npm run gcreate or gclone (change value in package.json)
> 4. npm run gpull
> 5. npm run start or npm run build:: dev -> compile (Some production projects will only work on GS environment if compiled with build command)
> 6. npm run gpush or npm run gwatch:: push all code back to GS or watch for change in apps-script folder and automatically push
