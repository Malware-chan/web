<?php
ini_set( 'display_errors', 1 );
error_reporting( ~0 );

/* Web */ /*
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://localhost/dom/index.html");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$html = curl_exec($ch); 
*/ /* File System */
ob_start();
include('get_element.html');
$html = ob_get_clean();

$dom = new DOMDocument();
@$dom -> loadHTML($html);
$dom -> formatOutput = true;

// Get all H2 ::: $h2s -> DOMNodeList object
$h2s = $dom -> getElementsByTagName('h2');
$h2_array = array(); 

foreach ($h2s as $h2) {
    $h2_text = $h2 -> textContent;
    $h2_array[] = $h2_text;
    echo $h2_text;
}

// article -> a
$articles = $dom -> getElementsByTagName('article');
$article = $articles -> item(0);
$links = $article -> getElementsByTagName('a');

foreach ($links as $link) {
    echo $link -> textContent . " ::: " . $link -> getAttribute('href');
}

// Get by id
$item_list = $dom -> getElementById('item-list');
$items = $item_list -> getElementsByTagName('li');

foreach ($items as $item) {
    echo $item -> textContent;
}
?>