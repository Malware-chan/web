<?php

ini_set( 'display_errors', 1 );
error_reporting( ~0 );

if ( isset( $_POST[ 'button' ] ) ) {
    $db_host = 'localhost';
    $db_user = 'root';
    $db_pass = '';
    $db_name = 'login';
    $username = $_POST['username'];
    $password = $_POST['password'];

    try {
        $conn = new PDO("mysql:host=$db_host; dbname=$db_name", $db_user, $db_pass);
        echo 'Connected';
        $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = 'SELECT id_user, username, password FROM users WHERE username = :username';
        $pdostmt = $conn -> prepare($query);
        $pdostmt -> execute(array(':username' => $username));

        while ($row = $pdostmt -> fetch(PDO::FETCH_ASSOC)) {
            if (password_verify($password, $row['password'])) {
                echo $row['id_user'] . $row['username'] . $row['password'];
            }
        }

        $pdostmt -> closeCursor();
    }
    catch (Exception $e) {
        die('Error: '.$e->GetMessage());
    }
    finally {
        $conn = null;
    }
}

?>