export default function characterModel(Sequelize, DataTypes) {
  return Sequelize.define('character', {
   id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      health: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
       damage: {
         allowNull: false,
        type: Sequelize.INTEGER,
      },
       maxMana: {
         allowNull: false,
        type: Sequelize.INTEGER,
      },
       currentMana: {
         allowNull: false,
        type: Sequelize.INTEGER,
      },
      level: {
         allowNull: false,
        type: Sequelize.INTEGER,
      },
        ability: {
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