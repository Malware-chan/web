<?php

ini_set( 'display_errors', 1 );
error_reporting( ~0 );

if ( isset( $_POST[ 'button' ] ) ) {
    require( 'db_conn_web_conf.php' );

    /* Conexión por procedimientos */
    $connp = mysqli_connect( $db_host, $db_user, $db_pass );
    if ( $connp -> connect_errno ) {
        echo 'Connection to MySQL failed: ' . $connp -> connect_error;
        exit();
    }
    mysqli_select_db( $connp, $db_name ) or die ( 'Cannot find database' );

    $query = 'SELECT * FROM users';
    $result_set = mysqli_query( $connp, $query );
    while ( $row = mysqli_fetch_row( $result_set ) ) {
        for ( $i = 0; $i < count( $row );
        $i++ ) {
            echo $row[ $i ];
        }
    }

    while ( $row = mysqli_fetch_array( $result_set, MYSQLI_ASSOC ) ) {
        echo $row[ 'username' ];
        echo $row[ 'password' ];
        echo $row[ 'email' ];
    }

    mysqli_close( $connp );

    /* Conexión por objeto MySQLi */
    $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
    if ($conn -> connect_errno) {
        echo $conn -> connect_errno;
    }

    $conn -> set_charset('utf8');
    $query = 'SELECT * FROM users';
    $result_set = $conn -> query($query);
    if ($conn -> errno) {
        die($conn -> errno);
    }

    while ($row = $result_set -> fetch_assoc()) {
        echo $row[ 'username' ];
        echo $row[ 'password' ];
        echo $row[ 'email' ];
    }

    $conn -> close();
}

?>
