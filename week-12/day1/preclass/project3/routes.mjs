import db from './models/index.mjs';

import initGamesController from './controllers/games.mjs';


export default function bindRoutes(app) {
  const GamesController = initGamesController(db);
  
  // main page
  app.get('/', GamesController.index);
  app.post('/stageenemies', GamesController.findstageenemies);
}
