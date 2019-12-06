<?php
$response['body'] =  'you:  ' . $request['body']['username'] . 'have logged out';
send($response);

session_destroy();
