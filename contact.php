<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

require 'vendor/autoload.php';

function sendmail($receiverEmail, $senderEmail, $senderEmailToDisplay, $senderName, $senderPassword, $receiverName, $subject, $body)
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->SMTPDebug = 0;
    $mail->Debugoutput = 'html';
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = $senderEmail;
    $mail->Password = $senderPassword;
    $mail->setFrom($senderEmailToDisplay, $senderName);
    $mail->addAddress($receiverEmail, $receiverName);

    $mail->Subject = $subject;
    $mail->Body = $body;
    if (!$mail->send()) {
        return false;
    } else {
        return true;
    }
}

$receiverEmail = 'prateekagrawal89760@gmail.com';
$senderEmailToDisplay = 'prateek.agrawal_me15@gla.ac.in';
$senderEmail = 'prateek.agrawal_me15@gla.ac.in';
$senderName = "Prateek Agrawal";
$senderPassword = "rYjqum-duqna8-nibhuz";
$receiverName = "Prateek Agrawal";

$error = false;
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];
$subject = 'Contact : Te Amo Customer Query';
$body = "From: $name\n E-Mail: $email\n Phone: $number\n Message:\n $message";
if (sendmail($receiverEmail, $senderEmail, $senderEmailToDisplay, $senderName, $senderPassword, $receiverName, $subject, $body))
    $error = true;
echo $error;
die();
