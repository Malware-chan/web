<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookie Make</title>
</head>
<body>
    <?php 
        // Si no se especifica el tiempo de vida, la cookie se borra al cerrar el navegador
        setcookie('cookiename1', 'Cookie - duración 30s', time() + 30);

        // Por defecto, la cookie es accesible desde los subdirectorios del script PHP,
        // para cambiar el directorio de actuación se añade como parámetro
        // setcookie('cookiename1', 'Cookie - duración 30s', time() + 30, '/folder/a');
    ?>
</body>
</html>