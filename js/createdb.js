var lib = new localStorageDB("PokemonDB", localStorage);

if(lib.isNew())
{
	lib.createTable("pokemon",["id","name","health","image","category_id"]);

	var rows = [
		{id: 1,name: 'Bulbasaur', health: 100, image: "bulbasaur.png", category_id: 1,experience: 500},
		{id: 2,name: 'Ivysaur', health: 200, image: "ivysaur.png", category_id: 1,experience: 1000},
		{id: 3,name: 'Venusaur', health: 300, image: "venusaur.png", category_id: 1,experience: 1500},
		{id: 4,name: 'Treecko', health: 100, image: "treecko.png", category_id: 1,experience: 500},
		{id: 5,name: 'Grovyle', health: 200, image: "grovyle.png", category_id: 1,experience: 1000},
		{id: 6,name: 'Sceptile', health: 300, image: "sceptile.png", category_id: 1,experience: 1500},
		{id: 7,name: 'Meganium', health: 300, image: "meganium.png", category_id: 1,experience: 1500},
		{id: 8,name: 'Charmander', health: 100, image: "charmander.png", category_id: 2,experience: 500},
		{id: 9,name: 'Charmeleon', health: 200, image: "charmeleon.png", category_id: 2,experience: 1000},
		{id: 10,name: 'Charizard', health: 300, image: "charizard.png", category_id: 2,experience: 1500},
		{id: 11,name: 'Torchic', health: 100, image: "torchic.png", category_id: 2,experience: 500},
		{id: 12,name: 'Combusken', health: 200, image: "combusken.png", category_id: 2,experience: 1000},
		{id: 13,name: 'Blaziken', health: 300, image: "blaziken.png", category_id: 2,experience: 1500},
		{id: 14,name: 'Typhlosion', health: 300, image: "typhlosion.png", category_id: 2,experience: 1500},
		{id: 15,name: 'Squirtle', health: 100, image: "squirtle.png", category_id: 3,experience: 500},
		{id: 16,name: 'Watortle', health: 200, image: "watortle.png", category_id: 3,experience: 1000},
		{id: 17,name: 'Blastoise', health: 300, image: "blastoise.png", category_id: 3,experience: 1500},
		{id: 18,name: 'Mudkip', health: 100, image: "mudkip.png", category_id: 3,experience: 500},
		{id: 19,name: 'Marshtomp', health: 200, image: "marshtomp.png", category_id: 3,experience: 1000},
		{id: 20,name: 'Swampert', health: 300, image: "swampert.png", category_id: 3,experience: 1500},
		{id: 21,name: 'Feraligatr', health: 300, image: "feraligatr.png", category_id: 3,experience: 1500},
];

	lib.createTableWithData("pokemon", rows);	
	lib.commit();

	var row = [ 
	{id: 1,pokemon_id: 8,damage: 10,recoil: 2,name: "Ember"},
	{id: 2,pokemon_id: 8,damage: 20,recoil: 7,name: "Fire Spin"},
	{id: 3,pokemon_id: 11,damage: 10,recoil: 1,name: "Ember"},
	{id: 4,pokemon_id: 11,damage: 20,recoil: 8,name: "Fire Spin"},
	{id: 5,pokemon_id: 9,damage: 30,recoil: 10,name: "Flamethrower"},
	{id: 6,pokemon_id: 9,damage: 20,recoil: 4,name: "Fire Spin"},
	{id: 7,pokemon_id: 12,damage: 30,recoil: 7,name: "Flamethrower"},
	{id: 8,pokemon_id: 12,damage: 30,recoil: 7,name: "Fire Punch"},
	{id: 9,pokemon_id: 10,damage: 50,recoil: 15,name: "Fire Blast"},
	{id: 10,pokemon_id: 10,damage: 40,recoil: 15,name: "Blast Burn"},
	{id: 11,pokemon_id: 14,damage: 30,recoil: 9,name: "Fire Fang"},
	{id: 12,pokemon_id: 14,damage: 40,recoil: 15,name: "Flame Wheel"},
	{id: 13,pokemon_id: 13,damage: 30,recoil: 10,name: "Flamethrower"},
	{id: 14,pokemon_id: 13,damage: 50,recoil: 17,name: "Blaze Kick"},
	{id: 15,pokemon_id: 1,damage: 10,recoil: 2,name: "Razor Leaf"},
	{id: 16,pokemon_id: 1,damage: 20,recoil: 5,name: "Vine Whip"},
	{id: 17,pokemon_id: 4,damage: 10,recoil: 3,name: "Razor Leaf"},
	{id: 18,pokemon_id: 4,damage: 20,recoil: 4,name: "Vine Whip"},
	{id: 19,pokemon_id: 2,damage: 30,recoil: 7,name: "Solar Beam"},
	{id: 20,pokemon_id: 2,damage: 20,recoil: 5,name: "Vine Whip"},
	{id: 21,pokemon_id: 5,damage: 30,recoil: 9,name: "Solar Beam"},
	{id: 22,pokemon_id: 5,damage: 20,recoil: 3,name: "Vine Whip"},
	{id: 23,pokemon_id: 3,damage: 30,recoil: 7,name: "Solar Beam"},
	{id: 24,pokemon_id: 3,damage: 30,recoil: 10,name: "Leaf Blade"},
	{id: 25,pokemon_id: 7,damage: 30,recoil: 8,name: "Solar Beam"},
	{id: 26,pokemon_id: 7,damage: 40,recoil: 11,name: "Leaf Storm"},
	{id: 27,pokemon_id: 6,damage: 30,recoil: 9,name: "Solar Beam"},
	{id: 28,pokemon_id: 6,damage: 50,recoil: 12,name: "Leaf Tornado"},
	{id: 29,pokemon_id: 15,damage: 10,recoil: 1,name: "Bubble"},
	{id: 30,pokemon_id: 15,damage: 20,recoil: 5,name: "Water Gun"},
	{id: 31,pokemon_id: 16,damage: 20,recoil: 2,name: "Water Gun"},
	{id: 32,pokemon_id: 16,damage: 30,recoil: 7,name: "Bubblebeam"},
	{id: 33,pokemon_id: 18,damage: 10,recoil: 1,name: "Bubble"},
	{id: 34,pokemon_id: 18,damage: 20,recoil: 4,name: "Water Gun"},
	{id: 35,pokemon_id: 19,damage: 20,recoil: 3,name: "Water Gun"},
	{id: 36,pokemon_id: 19,damage: 30,recoil: 6,name: "Bubblebeam"},
	{id: 37,pokemon_id: 20,damage: 50,recoil: 10,name: "Surf"},
	{id: 38,pokemon_id: 20,damage: 30,recoil: 7,name: "Muddy Water"},
	{id: 39,pokemon_id: 21,damage: 30,recoil: 7,name: "Waterfall"},
	{id: 40,pokemon_id: 21,damage: 35,recoil: 8,name: "Hydro Pump"},
	{id: 41,pokemon_id: 17,damage: 30,recoil: 7,name: "Waterfall"},
	{id: 42,pokemon_id: 17,damage: 40,recoil: 9,name: "Hydro Cannon"},
	];

	lib.createTableWithData("Attack", row);
	lib.commit();

	lib.createTable("UserPokemon", ["pokemon_id", "health", "experience"]);
	lib.commit();
}

