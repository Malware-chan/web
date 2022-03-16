<?php

    if (isset($_POST['button'])) {
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        greet($fname, $lname);
    }

    function greet($fname, $lname) {
        echo "Hi, $fname $lname!";
    }

?>
