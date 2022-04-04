export default function stageEnemyModel(Sequelize, DataTypes) {
  return Sequelize.define('stage enemy', {
id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stageId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stages',
          key: 'id',
        },
      },
      enemyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'enemies',
          key: 'id',
        },
      },
       level: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
       rarity: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
       level: {
        allowNull: false,
        type: Sequelize.INTEGER,
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