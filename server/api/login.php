<?php
$link = get_db_link();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (!isset($request['body']['username'])) {
    throw new ApiError('please fill out username', 400);
  }
  if (!isset($request['body']['password'])) {
    throw new ApiError('please enter a password', 400);
  }
  $sql = "SELECT id, password
    FROM `users`
    WHERE username = ?";

    $stmt = $link->prepare($sql);
    $stmt->bind_param('s', $request['body']['username']);
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows === 0){
      throw new ApiError('Invalid login', 401);

    }
    $stmt->bind_result($user_id, $password);
    $stmt->fetch();
    if(!password_verify($request['body']['password'], $password)){
      throw new ApiError('Invalid Login', 401);
    }
    $_SESSION['user_id'] = $user_id;
    $response['body'] = [
      'message' => 'Welcome ' . $request['body']['username'] . '!'
    ];
    send($response);
}
