# Wall Destroyer:Rewritten

## Motivation
The goal of this rewritte is to create an idle game based on the original Wall Destroyer by Tellurium, with a modern and clean UI as well as bring the gameplay and flow more in line with other current titles in the genre, e.g. mutliple resources that need to be balanced, no clicking and different upgrade systems. A secondary goal is make the game open for modding and easy to read game data definitions. This should be achieved by creating a resuable functional programming API that at a later date could be released as a standalone idle game creation library.

## Structure

The `system` folder holds all the actual business logic, it is a defacto idle game engine. The original goal was to have this as a seperate package that can easily be imported and configured, but this has been shelved for the moment as the scope of this library can be best defined by first building a full game with it.

All game defining data is stored in the `Data` folder, where the definitions are simple objects to allow even people without extensive programming experience to edit the objects.

The other folders follow the general React project layout style.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.


### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run serve`

Runs the app in production mode.<br/>

Open [http://localhost:4173](http://localhost:4173) to view it in the browser.

Be aware that you need to run `npm run build` first as this simply hosts the `dist` folder

### `npm run check`

Runs the typescript linter to check for error, it is **not** run automatically at any point as there seems to be some type errors in the material ui library that I am not able to fix.

## Branching strategy
`master` holds the production build deployed to cloudflare

`dev` hold the non-prod build available on github pages

All features and bugfixes have to be branched of the `dev` branch and will be merged upon approval, where then on release after testing the `dev` branch will be merged into `master` for general availability. The `vite.config.ts` file will never be merged as the `base` parameter needs to stay different for github pages and cloudflare deploys.