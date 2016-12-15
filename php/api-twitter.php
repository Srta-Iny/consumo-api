<?php
//mostrar como json
header('Access-Control-Allow-Origin: *');
header('content-type: application/json; charset=utf-8');

// muestra error en pantalla 
/*error_reporting(E_ALL);
ini_set('display_errors', 1*/

// agrega libreria by @j7mbo
require_once('TwitterAPIExchange.php');

// se agregan las credenciales 
$settings = array(
    'oauth_access_token' => "145401379-SdXn587ie6kPhc8TP0U6rrhGRVxsCfU4sH3PAHus",
    'oauth_access_token_secret' => "NWrGLUerCrOVtvSAm1XC2VfuKKLOsBNDS6VrlbU43S6n9",
    'consumer_key' => "xlYoDq1N7xMK2qhJ77pVgxOdu",
    'consumer_secret' => "MmMHXoh6y3VxGiLMuNURrrWGoSZ2fLic957Ke2sclINeIyUs2n"
);
// confirmar credenciales
$twitter = new TwitterAPIExchange($settings);


//url API twitter
//
$tipo = $_GET['tipo'];
$resp = '';

if ($tipo === 'a'){
	$resp = $twitter->setGetfield('?q=#laboratorians&count=15')
    ->buildOauth('https://api.twitter.com/1.1/search/tweets.json', 'GET')
    ->performRequest();
}else if ( $tipo === 'b'){
	$resp = $twitter->setGetfield('?q=#codigoquetransforma&count=15')
    ->buildOauth('https://api.twitter.com/1.1/search/tweets.json', 'GET')
    ->performRequest();
}else if ($tipo === 'c'){
	$resp = $twitter->setGetfield('?screen_name=laboratoriacl&include_rts=false&count=10')
    ->buildOauth('https://api.twitter.com/1.1/statuses/user_timeline.json', 'GET')
    ->performRequest();
}


echo json_encode($resp);