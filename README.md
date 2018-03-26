# Jest demo

> Live coding content for Jest demo during:
> - SnowCampIO 2018:
>   - https://snowcamp2018.sched.com/event/D2nn/tester-son-javascript-dans-la-joie-et-la-bonne-humeur
>   - http://slides.com/npayot/snowcamp2018-modern-js-testing
> - LyonJS (27/03/2018):
>   - https://www.meetup.com/fr-FR/LyonJS/events/248402297/
>   - https://slides.com/npayot/lyonjs-modern-js-testing

## Requirements

- Chrome V61+ (use of ES6 modules directly in the browser)
- node v8+ (use of `async` / `await`) / npm / yarn

## Usage

### For `yarn` fans

```bash
yarn # install dependencies
```

```bash
yarn server # start HTTP server for API on http://127.0.0.1:3000 
yarn start # start development HTTP server for src/ files on http://127.0.0.1:8080
```

```bash
yarn test
yarn test --watch
```

### For `npm` fans

```bash
npm install # install dependencies
```

```bash
npm run server # start HTTP server for API on http://127.0.0.1:3000 
npm start # start development HTTP server for src/ files on http://127.0.0.1:8080
```

```bash
npm test
npm test -- --watch
```
