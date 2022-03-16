<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website</title>
</head>
<body>
    <?php
        session_start();
        if (! isset($_SESSION['adf']) ) {
            header('location:session_login.html');
        }
        else {
            echo 'Welcome, '.$_SESSION['adf'];
        }
    ?>

    <p>Website ...</p>
    <p><a href='session_logout.php'>Log out</a></p>
</body>
</html>