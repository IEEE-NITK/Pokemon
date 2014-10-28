var select_pokemon = function(poke_id){
    var pokedb = new localStorageDB("PokemonDB", localStorage);
    pokedb.query("Pokemon", function(row) {    // the callback function is applied to every row in the table
        console.log(poke_id);
    if(row.id == poke_id) {       // if it returns true, the row is selected
        pokedb.insert("UserPokemon", {"pokemon_id": row.id, "health": row.health, "experience": row.experience});
        pokedb.commit();
    }
});
    window.location.href = "map.html";
};

var poke_select=function(url,pokeid)
{
  var emailid = window.localStorage.getItem('emailid');
    var auth_token = window.localStorage.getItem('authentication_token');
    var pokemon = 
     $.ajax({
        url: url,
        type: "POST",
        data: {
            "user": {
                     "email": emailid,
                     "authentication_token": auth_token,
                     "my_pokemon":poke_id
                     
                 }
        },
         complete: function(data){
            if(data.status==200)
            {
            try{
            var obj=JSON.parse(data.responseText);
            if(obj.email!=undefined && obj.authentication_token!=undefined)
            {
                localStorage.setItem('emailid',obj.email);
                localStorage.setItem('authentication_token',obj.authentication_token);
                window.location.href="map.html";
            }
        }
        catch(e){
            //$('#failedmsg').css('display','block');
        }
        }
        },
        error : function(){
            console.log('Error');
        }
    });
};
