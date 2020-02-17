<?php

    ini_set( 'display_errors', 1 );
	error_reporting( E_ALL );
	
	$from = $_POST['name'];
	
	$to = "bchurlinov@gmail.com";
    $subject = $_POST['email'];
    $message = $_POST['message'];
	$headers = "From:" . $from;

	mail($to,$subject,$message,$headers) or die("Error !")

?>