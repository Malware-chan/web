<?php
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'anything';

// Get DOM
ob_start();
include('todo_template.html');
$html = ob_get_clean();
$dom = new DOMDocument();
@$dom -> loadHTML($html);
$dom -> formatOutput = true;

// Get to-do list from MySQL and add it to the template
try {
    $conn = new PDO("mysql:host=$db_host; dbname=$db_name", $db_user, $db_pass);
    $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = 'SELECT todo FROM todos';
    $pdostmt = $conn -> prepare($query);
    $pdostmt -> execute();

    $todo_list = $dom -> getElementById('todo-list');

    while ($row = $pdostmt -> fetch(PDO::FETCH_ASSOC)) {
        $new_li = $dom -> createElement('li');
        $new_todo = $dom -> createElement('a', $row['todo']);
        $todo_list -> appendChild($new_li);
        $new_li -> appendChild($new_todo);
    }

    $pdostmt -> closeCursor();
    $html = @$dom -> saveHTML();
}
catch (Exception $e) {
    die('Error: '.$e->GetMessage());
}
finally {
    $conn = null;
}

// Add new todo
if (isset( $_POST[ 'new-todo' ])) {
    $todo = $_POST['todo'];
    $timestamp = time();

    try {
        $conn = new PDO("mysql:host=$db_host; dbname=$db_name", $db_user, $db_pass);
        $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = 'INSERT INTO todos (todo, done) VALUES (:todo, :done)';
        $pdostmt = $conn -> prepare($query);
        $pdostmt -> execute(array(':todo'=>$todo, ':done'=>$timestamp));

        // Append todo into list
        $todo_list = $dom -> getElementById('todo-list');
        $new_li = $dom -> createElement('li');
        $new_todo = $dom -> createElement('a', $todo);
        $todo_list -> appendChild($new_li);
        $new_li -> appendChild($new_todo);
        $html = @$dom -> saveHTML();
    }
    catch (Exception $e) {
        die('Error: '.$e->GetMessage());
    }
    finally {
        $conn = null;
    }
}

echo $html;
?>