<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "adnankhmalik500@gmail.com";  // Replace with your actual email address

    // Set email subject
    $subject = "New Message from $name";

    // Compose email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    // Set headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    $mailSuccess = mail($to, $subject, $email_message, $headers);

    // Display success or failure message
    if ($mailSuccess) {
        echo '<p class="success-message">Message sent successfully!</p>';
    } else {
        echo '<p class="error-message">Failed to send message. Please try again later.</p>';
    }
}
?>
