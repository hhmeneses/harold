$(function(){

	var objFirebase = new Firebase("https://chatucc.firebaseio.com/");

	$('#btnLoginTwitter').click({redSocial:"twitter"}, clickAutenticar);

	$('#btnLoginFacebook').click({redSocial:"facebook"}, clickAutenticar);

	function clickAutenticar(event){

		var redSocial = event.data.redSocial;

		objFirebase.authWithOAuthPopup(redSocial, function(error, authData){

			if (error) {
				console.log("Login Failed", error);
			}else{
				if(redSocial === "twitter"){
					console.log("Exito!!!", authData);				
					sessionStorage.setItem('token', authData.token);
					sessionStorage.setItem('profileImageURL', authData.twitter.profileImageURL);
					sessionStorage.setItem('displayName', authData.twitter.displayName);
					sessionStorage.setItem('username', authData.twitter.username);
				}

				if(redSocial === "facebook"){
					console.log("Exito!!!", authData);				
					sessionStorage.setItem('token', authData.token);
					sessionStorage.setItem('profileImageURL', authData.facebook.profileImageURL);
					sessionStorage.setItem('displayName', authData.facebook.displayName);
					sessionStorage.setItem('username', authData.facebook.displayName);
				}
				
				window.location.href = "../pages/ppal.html"
			}

		});
	}	
	
});