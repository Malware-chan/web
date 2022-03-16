<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <!-- Iniciar sesión : todo en una misma paǵina -->

    <!-- Verificación del inicio de sesión -->
    <?php include('session_singlepage_login_control.php'); ?>
    
    <!-- Login form -->
    <?php 
        if (!isset($_SESSION['adf'])) {
            include('session_singlepage_login.html'); 
        }
        else {
            echo $_SESSION['adf'];
        }
    ?>

    <!-- -->
    <p>Webpage content</p>
</body>
</html>