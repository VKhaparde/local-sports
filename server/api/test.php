<?php

// if (empty($request['body'])) {
//   throw new ApiError('You are not allowed', 403);
// }

$response['body'] = [
  "message" => "you are cool"
];
$response['status'] = 202;

send($response);
