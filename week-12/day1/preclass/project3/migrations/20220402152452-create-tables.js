module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create items and categories tables before the table that references them
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
       total_stars: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
       current_stars: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('characters', {
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
       max_mana: {
         allowNull: false,
        type: Sequelize.INTEGER,
      },
       current_mana: {
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('users_characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      character_id: {
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

      await queryInterface.createTable('stages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

   await queryInterface.createTable('enemies', {
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
       max_mana: {
         allowNull: false,
        type: Sequelize.INTEGER,
      },
       current_mana: {
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

  await queryInterface.createTable('stages_enemies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stage_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'stages',
          key: 'id',
        },
      },
      enemy_id: {
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable('games', {
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

  
  },

  down: async (queryInterface) => {
    // Drop tables with foreign key references first
    await Promise.all([
      queryInterface.dropTable('users_characters'),
      queryInterface.dropTable('stages_enemies'),
      queryInterface.dropTable('games'),
    ]);
    await Promise.all([
      queryInterface.dropTable('users'),
      queryInterface.dropTable('characters'),
      queryInterface.dropTable('stages'),
      queryInterface.dropTable('enemies'),
    ]);
  },
};