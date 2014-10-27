var loginsend = function(url){
	var emailid = $('#emailid').val();
	var passwd = $('#passwd').val();
	  $.ajax( {
        url: url,
        type: 'POST',
        data: {
        	"user":       {
                     "email": emailid,
                     "password": passwd
                 }
        },
        complete: function(data){
        	if(data.status==200)
        	{
        	try{
        	var obj=JSON.parse(data.responseText);
        	if(obj.email!=undefined)
        	{
        		localStorage.setItem('emailid',obj.email);
        		localStorage.setItem('authentication_token',obj.authentication_token);
        		window.location.href="map.html"
        	}
        }
        catch(e){
        	$('#failedmsg').css('display','block');
        }
    	}
        },
        error : function(){
        	console.log('Error');
        }
    });
};

var registersend = function(url){
	var emailid = $('#emailidreg').val();
	var passwd = $('#passwdreg').val();
	var passwdconfm = $('#cnfmpasswd').val();
	 $.ajax({
        url: url,
        type: "POST",
        data: {
        	"user": {
                     "email": emailid,
                     "password": passwd,
                     "passwordconfirm":passwdconfm
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
        	$('#failedmsg').css('display','block');
        }
    	}
        },
        error : function(){
        	console.log('Error');
        }
    });
};

var select_pokemon = function(url,poke_id){
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
