// recuperando tweet laboratorians

$.ajax({
  method: 'GET',
  url: 'http://animu.club/prueba/api-twitter.php',
  data: { tipo: 'a' },
})
  .done(function(data) {
  	var obj = jQuery.parseJSON( data );
    console.log( obj );
    $.each( obj.statuses, function( index, comentario) {
    	var texto = comentario.text;
    	var usuario = comentario.user.screen_name;
    	$('#laboratorians').append('<p>'+'@'+usuario+": "+texto+'</p>'); 
	})
    
  })
  .fail(function() {
    alert( 'error' );
  })

// recuperando tweet codigoquetransforma

$.ajax({
  method: 'GET',
  url: 'http://animu.club/prueba/api-twitter.php',
  data: { tipo: 'b' }
})
  .done(function(data) {
  	var obj = jQuery.parseJSON( data );
    console.log( obj );
    $.each( obj.statuses, function( index, comentario) {
    	var texto = comentario.text;
    	var usuario = comentario.user.screen_name;
    	$('#codigo').append('<p>'+'@'+usuario+": "+texto+'</p>'); 
	})
  })
  .fail(function() {
    alert( 'error' );
  })

// recuperando tweet codigoquetransforma

$.ajax({
  method: 'GET',
  url: 'http://animu.club/prueba/api-twitter.php',
  data: { tipo: 'c' }
})
  .done(function(data) {

  	var obj = jQuery.parseJSON( data );
    console.log( obj );
    $.each( obj, function( index, comentario) {
    	var texto = comentario.text;
    	var usuario = comentario.user.screen_name; 
		$('#user').append('<p>'+'@'+usuario+": "+texto+'</p>');
	})
    
  })
  .fail(function() {
    alert( 'error' );
  })