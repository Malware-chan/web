<?php
    $db_host = 'localhost';
    $db_user = 'root';
    $db_pass = '';
    $db_name = 'login';

    if ( isset( $_POST[ 'button' ] ) ) {
        $username = htmlentities($_POST['username']);
        $password = htmlentities($_POST['password']);

        try {
            $conn = new PDO("mysql:host=$db_host; dbname=$db_name", $db_user, $db_pass);
            $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $query = 'SELECT id_user, username, password FROM users WHERE username = :username AND password = :password';
            $pdostmt = $conn -> prepare($query);
            $pdostmt -> execute(array(':username' => $username, ':password' => $password));

            if ($pdostmt -> rowCount() != 0) {
                session_start();
                // Le damos un nombre para identificar la sesión de este usuario, en este caso 'adf'
                $_SESSION['adf'] = $username;
                //header('location:session_in.php');
            }
            else {
                //header('location:session_login.html');
                echo 'Usuario o contraseña incorrectos';
            }
        }
        catch (Exception $e) {
            die('Error: ' . $e -> getMessage());
        }
        finally {
            $conn = null;
        }
    }
?>