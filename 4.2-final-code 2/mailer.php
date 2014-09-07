<?php
	###################################
	# Jonathan Grover - Simple Mailer #
	# v0.1 Beta for PHP 5             #
	# Date Modified: 12/22/2012       #
	# MIT License (see details below) #
    ###################################

	// Set email address to send to i.e: you@yoursite.com
	$sendTo		=	'you@yoursite.com';

	// Set email subject (appears as subject)
	$subject 	= 	'ZHW Shoes - Contact Form Submission';

	/* No need to touch the code below this line! */

	// get posted form values
	$name 		= 	$_POST['name'];
	$email 		= 	$_POST['email'];
	$phone 		= 	$_POST['phone'];
	$message 	= 	$_POST['message'];
	$verify 	= 	$_POST['verify'];

	// setup email header
	$header 	= 	"From: ".$email;

	// construct email body 
	$body 		=	"Name: ".$name."\r\n".
					"Email: ".$email."\r\n".
					"Phone: ".$phone."\r\n".
					"\r\n".
					"Message: ".$message;


	// make sure verification is correct
	if(md5($verify).'a4xn' == $_COOKIE['tntcon']) {

		// send email
		mail($sendTo, $subject, $body, $header);
		//set verify cookie
		setcookie('tntcon','');
		//go to success page
		header('Location: contact_success.html');
		exit;
	} 
	else {
		// error
		echo 'Error. Message not sent! Please go back and fill in all required fields.';
		exit;
	}
	/*
	Copyright (c) 2013 Jonathan Grover

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/
?>