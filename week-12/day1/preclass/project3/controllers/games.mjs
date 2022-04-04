export default function initGamesController(db) {
  const index = async (_, response) => {
    response.render('index');
  };

  const findstageenemies = async (request, response) => {
    try {
      console.log('hi');
      const newBug = await db.StageEnemy.findAll({
        where: {
          stageId: request.body.id,
        }
      });
      response.send(newBug);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index, findstageenemies,
  };
}
