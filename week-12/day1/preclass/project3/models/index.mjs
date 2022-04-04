import sequelizePackage from 'sequelize';
import allConfig from '../config/config.js';

import userModel from './user.mjs';
import characterModel from './character.mjs';
import userCharacterModel from './user_character.mjs';
import stageModel from './stage.mjs';
import enemyModel from './enemy.mjs';
import stageEnemyModel from './stage_enemy.mjs';
import gameModel from './game.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = userModel(sequelize, Sequelize.DataTypes);
db.Character = characterModel(sequelize, Sequelize.DataTypes);
db.UserCharacter = userCharacterModel(sequelize, Sequelize.DataTypes);
db.Stage = stageModel(sequelize, Sequelize.DataTypes);
db.Enemy = enemyModel(sequelize, Sequelize.DataTypes);
db.StageEnemy = stageEnemyModel(sequelize, Sequelize.DataTypes);
db.Game = gameModel(sequelize, Sequelize.DataTypes);

db.User.belongsToMany(db.Character, { through: db.UserCharacter });
db.Character.belongsToMany(db.User, { through: db.UserCharacter });

db.Stage.belongsToMany(db.Enemy, { through: db.StageEnemy });
db.Enemy.belongsToMany(db.Stage, { through: db.StageEnemy });

// db.Game.hasMany(db.UserCharacter);
// db.UserCharacter.belongsTo(db.Game);
// db.Game.hasMany(db.Stage);
// db.Stage.belongsTo(db.Game);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;