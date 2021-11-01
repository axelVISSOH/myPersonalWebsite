<?php
  $receiving_email_address = 'axelvissoh@gmail.com';
  if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = $_POST['email'];
    $to = $receiving_email_address;
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "De :" .$_POST['name']." ".$from.
                        'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers);
    echo "L'email a été envoyé.";
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }
?>
