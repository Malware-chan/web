<?php
ini_set( 'display_errors', 1 );
error_reporting( ~0 );

ob_start();
include('append_remove.html');
$html = ob_get_clean();

$dom = new DOMDocument();
@$dom -> loadHTML($html);
$dom -> formatOutput = true;



// Append
$container = $dom -> getElementById('container');
$new_element = $dom -> createElement('a', 'New link');
$new_element -> setAttribute('href', 'https://devhints.io/xpath');
$container -> appendChild($new_element);

// Remove
$p = $dom -> getElementById('delete');
$p -> parentNode -> removeChild($p);



$html = @$dom -> saveHTML();
echo $html;
?>