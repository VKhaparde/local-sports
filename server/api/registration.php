<?php
$link = get_db_link();
$username = $request['body']['username'];
$password = $request['body']['password'];
$confirm_password = $request['body']['confirm_password'];



if ($request['method'] === 'POST') {
  if (!isset($username)) {
    throw new ApiError('Insert a user name.');
  } else {
    $sql = "SELECT id FROM users WHERE username = ?";

    if ($stmt = $link->prepare($sql)) {
      $stmt->bind_param("s", $param_username);

      $param_username = $username;

      if ($stmt->execute()) {
        $stmt->store_result();

        if ($stmt->num_rows == 1) {
          throw new ApiError('This username already exists.');
        } else {
          $username = $request['body']['username'];
        }
      } else {
        throw new ApiError('Something went wrong.');
      }
    }
    $stmt->close();
  }

  if (!isset($password)) {
    throw new ApiError('Please enter a valid password.');
  } else {
    $password = $request['body']['password'];
  }

  if (!isset($confirm_password)) {
    throw new ApiError('Gotta confirm that password.');
  } else {
    $confirm_password = $request['body']['confirm_password'];
    if ($password != $confirm_password) {
      throw new ApiError('Your passwords don\'t match.');
    }
  }

  $sql = "INSERT INTO users (username, password) VALUES (?, ?)";

  if ($stmt = $link->prepare($sql)) {
    $stmt->bind_param("ss",$param_username, $param_password);


    $param_username = $username;
    $param_password = password_hash($password, PASSWORD_BCRYPT);

    if ($stmt->execute()) {
      $response['body'] = 'You have successfully created your account!';
      send($response);
    }
    $stmt->close();
  }
  $mysqli->close();
}
