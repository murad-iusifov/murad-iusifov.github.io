<?php

$recepient = "muradiusifov@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$title = trim($_POST["title"]);
$text = trim($_POST["text"]);
$message = "Заголовок: $title \nИмя: $name \nПочта: $email \nКомментарий: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");