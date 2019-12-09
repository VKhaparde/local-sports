<?php
$link = get_db_link();
$name = $request['body']['name'];
$phone = $request['body']['phone'];
$email = $request['body']['email'];
$gender = $request['body']['gender'];
$username = $request['body']['username'];
$password = $request['body']['password'];
$confirm_password = $request['body']['confirmPassword'];



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
    $confirm_password = $request['body']['confirmPassword'];
    if ($password != $confirm_password) {
      throw new ApiError('Your passwords don\'t match.');
    }
  }

  if (!isset($name)) {
    throw new ApiError('Please enter your name');
  } else {
    $name = $request['body']['name'];
  }

  if (!isset($phone)) {
    throw new ApiError('Please enter your phone number');
  } else {
    $phone = $request['body']['phone'];
  }

  if (!isset($email)) {
    throw new ApiError('Please enter your email');
  } else {
    $email = $request['body']['email'];
  }

  if (!isset($gender)) {
    $gender = "default";
  } else {
    $gender = $request['body']['gender'];
  }

  $sql = "INSERT INTO users (name, phone, email, gender, username, password) VALUES (?, ?, ?, ?, ?, ?)";

  if ($stmt = $link->prepare($sql)) {
    $stmt->bind_param("ssssss", $param_name, $param_phone, $param_email, $param_gender, $param_username, $param_password);

    $param_name = $name;
    $param_phone= $phone;
    $param_email= $email;
    $param_gender= $gender;
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


//http -v post localhost:9000/api/registration name=Kelly phone=123456789 email=kelly@gmail.com username=kellyrocks password=test confirm_password=test
