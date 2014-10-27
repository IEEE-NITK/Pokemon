var pokemondb = new localStorageDB("PokemonDB", localStorage);
Pokemon = function(id, bot) {
	this.id = id;
	this.bot = bot;
	if (bot)
		this.pokemon = pokemondb.query("Pokemon", {id: id})[0];
	else
		this.pokemon = pokemondb.query("UserPokemon", {ID: id})[0];
	this.hp = this.pokemon.health;
	console.log("HEALTH = "+ this.hp);
}

Pokemon.prototype.attack = function(pokemon, attack_id) {
	count = 0;
	attack = 0;
	attack = pokemondb.query("Attack", {pokemon_id: this.id});
	factor = 1;
	pokemon.damage(pokemon, attack[attack_id].damage * factor);
	this.damage(pokemon, attack[attack_id].recoil * factor);
};

Pokemon.prototype.damage = function (pokemon, number) {
	this.hp -= number;
	if (this.hp <= 0){
		this.hp = 0;
		if (this.bot){
			// Remove it from map

			//Insert it into the DB UserPokemon
			pokemondb.insert("UserPokemon", this.pokemon);
		}
		// Calculate new Experience
		// new_exp = 
	}
	pokemondb.update("UserPokemon", {id: this.id}, (function(row) {
		console.log(this);
    row.health = this.hp;

    // the update callback function returns to the modified record
    return row;
	}).bind(this));
}