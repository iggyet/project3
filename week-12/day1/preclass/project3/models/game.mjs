export default function gameModel(Sequelize, DataTypes) {
  return Sequelize.define('game', {
  id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
       gamestate: {
        allowNull: false,
        type: Sequelize.JSON,
      },
       result: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
  }, { underscored: true });
}