<?php
$link = get_db_link();
$username = $request['body']['username'];
$password = $request['body']['password'];
$confirm_password = $request['body']['confirm_password'];

if ($request['method'] === 'POST') {
  if (!isset($username)) {
    throw new ApiError('insert a user name yo');
  } else {
    $sql = "SELECT id FROM users WHERE username = ?";

    if ($stmt = $link->prepare($sql)) {
      $stmt->bind_param("s", $param_username);

      $param_username = $username;

      if ($stmt->execute()) {
        $stmt->store_result();

        if ($stmt->num_rows == 1) {
          throw new ApiError('This username already exists my dude');
        } else {
          $username = $request['body']['username'];
        }
      } else {
        throw new ApiError('something went wrong my guy');
      }
    }
    $stmt->close();
  }

  if (!isset($password)) {
    throw new ApiError('gotta get that password in mate');
  } else {
    $password = $request['body']['password'];
  }

  if (!isset($confirm_password)) {
    throw new ApiError('gotta confirm that password egghead');
  } else {
    $confirm_password = $request['body']['confirm_password'];
    if ($password != $confirm_password) {
      throw new ApiError('your passwords dont match dude');
    }
  }

  $sql = "INSERT INTO users (username, password) VALUES (?, ?)";

  if ($stmt = $link->prepare($sql)) {
    $stmt->bind_param("ss", $param_username, $param_password);

    $param_username = $username;
    $param_password = password_hash($password, PASSWORD_BCRYPT);

    if ($stmt->execute()) {
      $response['body'] = 'you have successfully created your account!';
      send($response);
    }
    $stmt->close();
  }
  $mysqli->close();
}


//http post localhost:9000/api/registration username=test password=test confirm_password=test
