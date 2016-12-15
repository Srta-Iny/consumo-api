// recuperando tweet laboratorians

$.ajax({
  method: 'GET',
  url: 'http://animu.club/prueba/api-twitter.php',
  data: { tipo: 'a' },
  xhrFields: {
     withCredentials: true
   }
})
  .done(function(data) {
  	var obj = jQuery.parseJSON( data );
    console.log( obj );
    $('#laboratorians').html(obj.statuses[0].text);
  })
  .fail(function() {
    alert( 'error' );
  })

// recuperando tweet codigoquetransforma

$.ajax({
  method: 'GET',
  url: 'http://animu.club/prueba/api-twitter.php',
  data: { tipo: 'b' },
  xhrFields: {
     withCredentials: true
   }
})
  .done(function(data) {
  	var obj = jQuery.parseJSON( data );
    console.log( obj );
    $('#codigo').append('<p>'+obj.statuses[0].text+'</p>');
  })
  .fail(function() {
    alert( 'error' );
  })

// recuperando tweet codigoquetransforma

$.ajax({
  method: 'GET',
  url: 'http://animu.club/prueba/api-twitter.php',
  data: { tipo: 'c' },
  xhrFields: {
     withCredentials: true
   }
})
  .done(function(data) {

  	var obj = jQuery.parseJSON( data );
    console.log( obj );
    $.each( obj, function( index, comentario) {
    	var texto = comentario.text;
    	var usuario = comentario.user.name; 
		$('#user').append('<p>'+'@'+usuario+": "+texto+'</p>');
	})
    
  })
  .fail(function() {
    alert( 'error' );
  })