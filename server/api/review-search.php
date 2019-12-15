<?php

if ($request['method'] === 'GET') {
  $locationId = $request['query']['id'];
  $link = get_db_link();
  $sql = "SELECT  `review-description`, `review-rating`, username, `review-average`, reviews.id
          FROM `reviews`
          JOIN location
          ON reviews.`location-id` = location.id
          JOIN users
          ON  reviews.`user-id` = users.id
          WHERE location.id=?";
  if (!isset($locationId)) {
    throw new ApiError('location ID is required');
  }
  $preparedStatement = mysqli_prepare($link, $sql);
  mysqli_stmt_bind_param($preparedStatement, 'i', $locationId);
  mysqli_stmt_execute($preparedStatement);
  $preparedResult = mysqli_stmt_get_result($preparedStatement);
  $result = (mysqli_fetch_all($preparedResult, MYSQLI_ASSOC));
  $response['body'] = $result;
  send($response);
}

function check_connection($link)
{
  $sql = 'select 1';
  $link->query($sql);
  return [
    'message' => 'Successfully connected to MySQL!'
  ];
}
