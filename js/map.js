var pokemondb = new localStorageDB("PokemonDB", localStorage);
var path=0;
var grass=1;
var bushes=2;
var plant=3;
var water=4;
var lpost=5;
var mb=6;
var hcc=7;
var lib=8;
var ccc=9;
var fountain=10;
var fpot=11;
var cliff=12;
var sea=13;
var srock=14;
var steps=15;
var sand=16;
var map=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,0,7,7,7,7,7,7,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,1,7,7,7,7,7,7,1,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,7,7,7,7,7,7,7,1,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,7,7,7,7,7,7,7,1,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,7,7,7,7,7,7,7,1,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,7,7,7,7,7,7,7,1,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,7,7,7,7,7,7,7,1,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,1,7,1,1,1,1,1,1,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
[3,3,3,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,1,1,9,9,9,9,9,9,9,1,1,3],
[3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,9,9,9,9,9,9,9,9,9,1,3],

[3,3,3,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,0,1,9,9,9,9,9,9,9,9,9,1,3],
[3,3,3,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,0,1,9,9,9,9,9,9,9,9,9,1,3],
[3,3,3,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,0,1,9,9,9,9,9,9,9,9,9,1,3],
[3,3,3,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,0,1,1,1,9,9,9,9,9,9,1,1,3],

[3,3,3,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,0,1,1,1,1,1,1,1,1,1,1,1,3],
[3,3,3,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,0,0,0,0,0,0,0,0,1,1,1,1,3],
[3,3,3,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,0,0,0,0,0,0,0,0,1,3,3,3,3],
[3,3,3,2,2,2,2,2,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,0,0,1,3,3,3,3],
[3,3,3,2,2,2,2,2,2,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,0,0,1,3,3,3,3],
[3,3,3,3,3,3,2,2,2,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,0,0,1,3,3,3,3],
[3,3,3,3,3,3,3,3,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,1,3,3,3,3],
[3,3,3,3,3,3,3,3,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,3],
[3,3,3,3,3,3,3,3,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,3,3],
[3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,3],
[3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,3],
[3,3,3,1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,1,1,0,0,1,0,0,0,0,0,0,1,3],
[3,3,3,1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,1,1,0,0,1,0,0,0,0,0,0,1,3],
[3,3,3,1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,1,1,0,0,1,0,8,8,8,8,0,1,3],

[3,3,3,1,0,0,0,0,0,0,0,6,6,0,0,0,0,0,0,0,1,1,0,0,1,0,8,8,8,8,0,1,3],
[3,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3],

[3,3,3,1,1,1,1,1,0,0,11,10,10,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3],
[3,3,3,1,1,1,1,1,5,0,11,10,10,11,0,0,0,0,5,0,0,5,0,0,5,0,0,5,0,0,0,1,3],
[3,3,3,3,3,3,1,1,0,0,11,11,11,11,0,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
[3,3,3,3,3,3,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
[3,3,3,3,3,3,1,1,5,0,0,0,0,0,0,5,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,1,1,1,1,5,0,0,5,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,1,1,1,1,0,0,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3,1,1,5,0,0,5,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3,1,1,0,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3,1,1,5,0,0,5,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3,1,1,0,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,3,3,3,3,3,3,3,1,1,5,0,0,5,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[12,12,12,12,12,12,12,12,12,12,0,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
[16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16],
[13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13],
[13,13,13,13,13,13,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,13,13,13,13,13,13,13,13,13,13],
[13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,13,13,13],
[13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13]]

water_array = [];
fire_array = [];
green_array = [];
pokemon_map = {};

function setup_water(){
	for(i=0;i<60;i++){
  for(j=0;j<33;j++){
    if (map[i][j] == water || map[i][j] == sea)
      water_array.push([i,j]);
	}}
}

function setup_fire(){
	for(i=0;i<60;i++){
  for(j=0;j<33;j++){
    if (map[i][j] == path || map[i][j] == sand)
      fire_array.push([i,j]);
	}}
}

function setup_grass(){
	for(i=0;i<60;i++){
  for(j=0;j<33;j++){
    if (map[i][j] == grass || map[i][j] == bushes)
      green_array.push([i,j]);
	}}
}

function generate_pokemons() {
  current_time = new Date();
  if (localStorage.getItem("map_time") === null) {
    create_random_pokemons();
  }
}

function create_random_pokemons(){
	start_num = localStorage.getItem("water_pokemon")
	if (start_num === null) {
    add_water_pokemon(1);
  }
  else
  {
  	add_water_pokemon(start_num+2);
  }
  start_num = localStorage.getItem("fire_pokemon")
  if (start_num === null) {
    add_fire_pokemon(1);
  }
  else
  {
  	add_fire_pokemon(start_num+2);
  }
  start_num = localStorage.getItem("green_pokemon")
  if (start_num === null) {
    add_green_pokemon(1);
  }
  else
  {
  	add_green_pokemon(start_num+2);
  }
}

function add_green_pokemon(start_id){
	if (start_id > 7){
		start_id=1;
	}
	first_pokemon_id = start_id;
	second_pokemon_id = start_id+1;
	if (second_pokemon_id > 7){
		second_pokemon_id = 1;
	}
	localStorage.setItem("green_pokemon", first_pokemon_id);
	// first_pokemon = pokemondb.query("Pokemon", {id: first_pokemon_id})[0];
	// second_pokemon = pokemondb.query("Pokemon", {id: second_pokemon_id})[0];
	random_number_1 = Math.floor(Math.random() * green_array.length+1);
	random_number_2 = Math.floor(Math.random() * green_array.length+1);
	pokemon_map[String(green_array[random_number_1][0])] = {}
	pokemon_map[String(green_array[random_number_1][0])][String(green_array[random_number_1][1])] = first_pokemon_id
	pokemon_map[String(green_array[random_number_2][0])] = {}
	pokemon_map[String(green_array[random_number_2][0])][String(green_array[random_number_1][1])] = second_pokemon_id
}

function add_fire_pokemon(start_id){
	if (start_id > 14){
		start_id=8;
	}
	first_pokemon_id = start_id;
	second_pokemon_id = start_id+1;
	if (second_pokemon_id > 14){
		second_pokemon_id = 8;
	}
	localStorage.setItem("fire_pokemon", first_pokemon_id);
	first_pokemon = pokemondb.query("Pokemon", {id: first_pokemon_id})[0];
	second_pokemon = pokemondb.query("Pokemon", {id: second_pokemon_id})[0];
	random_number_1 = Math.floor(Math.random() * fire_array.length+1);
	random_number_2 = Math.floor(Math.random() * fire_array.length+1);
	pokemon_map[String(fire_array[random_number_1][0])] = {}
	pokemon_map[String(fire_array[random_number_1][0])][String(fire_array[random_number_1][1])] = first_pokemon_id
	pokemon_map[String(fire_array[random_number_2][0])] = {}
	pokemon_map[String(fire_array[random_number_2][0])][String(green_array[random_number_1][1])] = second_pokemon_id
}

function add_water_pokemon(start_id){
	if (start_id > 21){
		start_id=15;
	}
	first_pokemon_id = start_id;
	second_pokemon_id = start_id+1;
	if (second_pokemon_id > 21){
		second_pokemon_id = 15;
	}
	localStorage.setItem("water_pokemon", first_pokemon_id);
	first_pokemon = pokemondb.query("Pokemon", {id: first_pokemon_id})[0];
	second_pokemon = pokemondb.query("Pokemon", {id: second_pokemon_id})[0];
	random_number_1 = Math.floor(Math.random() * water_array.length+1);
	random_number_2 = Math.floor(Math.random() * water_array.length+1);
	console.log(random_number_1);
	console.log(random_number_2);
	pokemon_map[String(water_array[random_number_1][0])] = {}
	pokemon_map[String(water_array[random_number_1][0])][String(water_array[random_number_1][1])] = first_pokemon_id
	pokemon_map[String(water_array[random_number_2][0])] = {}
	pokemon_map[String(water_array[random_number_2][0])][String(green_array[random_number_1][1])] = second_pokemon_id
}

setup_water();
setup_grass();
setup_fire();
generate_pokemons();
