<? 

	$recepient = "hoopsek20@yandex.ru";
	$sitename = "Portfplio";

	// $userName	=	$_GET['name'];
	// $userEmail 	= 	$_GET['name'];

	// echo 'Ваше имя '.$userName.' и вам 23 года', 'Ваш емайл '.$userEmail;
	
	// var_dump($_POST);

	$name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
	$skype = trim($_POST["skype"]);
	$phone = trim($_POST["phone"]);
	$text = trim($_POST["message"]);
	$message = "Имя: $name \nЕмайл: $email \nСкайп: $skype \nТелефон: $phone \nТекст: $text";

	$pagetitle = "Новая заявка с сайта \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


	