<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $people = $_POST["people"];
    $date = $_POST["date"];
    $time = $_POST["time"];

    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Number of People: $people\n";
    $message .= "Date: $date\n";
    $message .= "Time: $time\n";

    $to = "@resto123321@i.ua";
    $subject = "Новая заявка с вашего сайта";
    $headers = "From: restaurantex@restaurantex.zzz.com.ua";

    $smtpServer = "mail.zzz.com.ua";
    $smtpPort = 587; 

    $smtpUsername = "restaurantex@restaurantex.zzz.com.ua";
    $smtpPassword = "11101997vV11V24A26P";

    ini_set("SMTP", $smtpServer);
    ini_set("smtp_port", $smtpPort);
    ini_set("sendmail_from", $headers);

    if (mail($to, $subject, $message, $headers)) {
        header("Location: /"); 
        exit();
    } else {
        header("Location: /");
        exit();
    }
} else {
    echo "No access.";
}
?>