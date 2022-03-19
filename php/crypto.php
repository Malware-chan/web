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
    $password_crypt = password_hash($password, PASSWORD_DEFAULT);

    try {
        $conn = new PDO("mysql:host=$db_host; dbname=$db_name", $db_user, $db_pass);
        $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = 'INSERT INTO users VALUES (DEFAULT, :username, :password)';
        $pdostmt = $conn -> prepare($query);
        $pdostmt -> execute(array(':username' => $username, ':password' => $password_crypt));
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