<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Retrieve the JSON data from the request body
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Prepare the email
    $to = 'sparshbansal787@gmail.com'; // Replace with your email address
    $subject = 'New Contact Form Submission';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        http_response_code(200);
        echo json_encode(['status' => 'success']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Email sending failed.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Invalid input.']);
}
?>
