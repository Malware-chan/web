<?php
    // Redirigir a otra página
    header('location:login.html');

    // Formularios
    $username = htmlentities($_POST['username']);   -- Convierte simbolos en HTML

    // Bases de datos
    $var = $_SERVER['PHP_SELF'];    -- La página del servidor a la que tiene que llamar 
                                    -- ex. El formulario y los resultados del formulario se encuentran en la misma página.
    mysqli_set_charset( $conn, 'utf8' );
    mysqli_affected_rows($conn);    -- Devuelve (int) el número de filas afectadas por INSERT, UPDATE, DELETE
    mysqli_num_rows()               -- Devuelve el número de registros en una consulta SELECT
    mysqli_query($conn, $query)     -- boolean : true si se ejecutó la consulta

    bindValue(), bindParam() --> execute();
    execute(array(':bks' => $var ...))



    // Syntax
    function greet($fname, $lname) {
        echo "Hi, $fname $lname!";
    }
?>