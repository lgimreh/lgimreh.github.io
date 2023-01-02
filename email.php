<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $to = 'lgimreh@outlook.com';
  $subject = 'MESSAGE SITE WEB: '.$subject;
  $body = "From: $name\n E-Mail: $email\n Message:\n $message";
  if (mail($to, $subject, $body)) {
    echo '<p>Your message has been sent!</p>';
  } else {
    echo '<p>Something went wrong, please try again.</p>';
  }
}
?>