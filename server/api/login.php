<?php

$link = get_db_link();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (!isset($request['body']['username'])) {
    throw new ApiError('please fill out username');
  }
  if (!isset($request['body']['password'])) {
    throw new ApiError('please enter a password');
  }

  $sql = "SELECT id, password
    FROM `users`
    WHERE username = ?";

  if ($stmt = $link->prepare($sql)) {
    $stmt->bind_param('s', $request['body']['username']);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
      $stmt->bind_result($user_id, $password);
      $stmt->fetch();

      if ($request['body']['password'] === $password) {
        session_regenerate_id();
        $_SESSION['loggedin'] = TRUE;
        $_SESSION['name'] = $request['body'];
        $_SESSION['user_id'] = $user_id;
        $response['body'] =  'Welcome ' . $request['body']['username'] . '!';
        // header('Locaton: https://local-sports.localsports.site/search');
        send($response);
      } else {
        $response['body'] = 'incorrect password';
        send($response);
      }
    } else {
      $response['body'] = 'incorrect username';
      send($response);
    }
  }
}
$stmt->close();


function check_connection($link)
{
  $sql = 'select 1';
  $link->query($sql);
  return [
    'message' => 'Successfully connected to MySQL!'
  ];
}

// http post localhost:9000/api/login username=OldManJenkins420 password=420blazeit
