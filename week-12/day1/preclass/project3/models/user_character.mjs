export default function userCharacterModel(Sequelize, DataTypes) {
  return Sequelize.define('user_character', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      characterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'characters',
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