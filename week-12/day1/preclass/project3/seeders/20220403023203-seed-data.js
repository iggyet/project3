module.exports = {
  up: async (queryInterface) => {
    const usersData = [
      {
        email: 'gmail',
        password: 123,
        name: 'kai',
        total_stars: 5,
        current_stars: 5,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ];

    queryInterface.bulkInsert('users', usersData, {
        returning: true,
      });

    const charactersData = [
    {
      name: 'Khan',
      title: 'Knight',
      health: 100,
      damage: 20,
      max_mana: 60,
      current_mana: 0,
      level: 1,
      ability: 'Swing',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Erza',
      title: 'Huntress',
      health: 100,
      damage: 20,
      max_mana: 60,
      current_mana: 0,
      level: 1,
      ability: 'Snipe',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ];

  queryInterface.bulkInsert('characters', charactersData, {
        returning: true,
      });

  const usersCharactersData = [
    {
      user_id: 1,
      character_id: 2,
      level: 1,
      rarity: 'rare',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: 1,
      character_id: 2,
      level: 1,
      rarity: 'rare',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ];

  queryInterface.bulkInsert('users_characters', usersCharactersData);

  const stagesData = [
    {
      status: 'incomplete',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ];

  queryInterface.bulkInsert('stages', stagesData, {
        returning: true,
      });

   const enemiesData = [
    {
      name: 'Khan',
      title: 'Knight',
      health: 100,
      damage: 20,
      max_mana: 60,
      current_mana: 0,
      level: 1,
      ability: 'Swing',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Erza',
      title: 'Huntress',
      health: 100,
      damage: 20,
      max_mana: 60,
      current_mana: 0,
      level: 1,
      ability: 'Snipe',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ];

  queryInterface.bulkInsert('enemies', enemiesData, {
        returning: true,
      });

  const stagesEnemiesData = [
    {
      stage_id: 1,
      enemy_id: 1,
      level: 1,
      rarity: 'rare',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      stage_id: 1,
      enemy_id: 2,
      level: 1,
      rarity: 'rare',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ];

  queryInterface.bulkInsert('stages_enemies', stagesEnemiesData);

  const gamesData = [
    {
      gamestate: 'canlah',
      result: 'win',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ];

  queryInterface.bulkInsert('games', gamesData);

  },

  

  down: async (queryInterface) => {
    await Promise.all([
    await queryInterface.bulkDelete('users_characters', null, {}),
    await queryInterface.bulkDelete('stages_enemies', null, {}),
    ]);
    await Promise.all([
    await queryInterface.bulkDelete('users', null, {}),
    await queryInterface.bulkDelete('characters', null, {}),
    await queryInterface.bulkDelete('stages', null, {}),
    await queryInterface.bulkDelete('enemies', null, {}),
    await queryInterface.bulkDelete('games', null, {}),
    ]);
  },
};