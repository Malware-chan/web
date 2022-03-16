<?php
/*
    Métodos de evitar la inyección de SQL
    mysqli_addslashes()
    mysqli_real_scape_string()
    Consultas preparadas

    -- Se recomienda en uso de mysqli_real_scape_string() sobre mysqli_addslashes()
    -- $input = mysqli_real_escape_string($conn, $_POST['item']);



    -- Se recomienda, sobre las anteriores, usar consultas preparadas
    --      Evitan la inyección SQL
    --      Las consultas INSERT son más rápidas y eficientes
    --
    -- Se realizan usando el comodín '?' y el método mysqli_prepare($conn, $query)
    --      $userinput = 'item' - replaced by '?'
    --      $query = "SELECT col1, col2, col3 FROM items WHERE category = ?"
    -- Se realia la consulta, esta no devuelve un Result Set, sino un Mysqli_stmt
    --      $stmt = mysqli_prepare($conn, $query);
    -- Se une el objeto Mysqli_stmt con el parámetro que sustituira al comodín, devuelve true o false
    --      $ok = mysqli_stmt_bind_param($stmt, 'datatype', $userinput);
    --      Datatypes : 's' = string, 'i' = integer, 'd' = decimal, 'b' = blob
    --      Se pondrá una de esas letras por cada columna solicitada, ex: 'issds'
    -- Se ejecuta la consulta con la siguiente función (devuelve true o false)
    --      $ok = mysqli_stmt_execute($mysqli_stmt)
    -- Se asignan los valores obtenidos a variables
    --      $ok = mysqli_stmt_bind_result($stmt, $col1, $col2, $col3);
    -- Se leen los resultados
    --      while (mysqli_stmt_fetch($stmt)) { echo $col1 $col2 $col3 }
    -- Se cierra
    --      mysqli_stmt_close($stmt)
    -- 
    -- INSERT, DELETE -> se termina en el mysqli_stmt_execute($mysqli_stmt)
    -- SELECT -> continúa hasta el mysqli_stmt_fetch($stmt)
*/

if ( isset( $_POST[ 'button' ] ) ) {
    require('db_conn_web_conf.php');

    $userinput = $_POST['username'];
    $user = '';
    $mail = '';

    /* Conexión por procedimientos */
    $conn = mysqli_connect( $db_host, $db_user, $db_pass );
    if ( $conn -> connect_errno ) {
        echo 'Connection to MySQL failed: ' . $conn -> connect_error;
        exit();
    }
    mysqli_select_db( $conn, $db_name ) or die ( 'Cannot find database' );


    $query = "SELECT username, email FROM users WHERE username = ?";
    $stmt = mysqli_prepare($conn, $query);
    $ok = mysqli_stmt_bind_param($stmt, 's', $userinput);
    $ok = mysqli_stmt_execute($stmt);
    $ok = mysqli_stmt_bind_result($stmt, $user, $mail);
    
    while (mysqli_stmt_fetch($stmt)) { 
        echo "$user, $mail";
    }

    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}
?>