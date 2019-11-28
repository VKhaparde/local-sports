<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $sql = 'SELECT name
          FROM `location-sports`
          JOIN `location`
          ON `location-sports`.`location-id`=location.id
          JOIN sports
          ON `location-sports`.`sports-id`=sports.id
          WHERE sports.id=2';
  $query = $link->query($sql);
  $result = (mysqli_fetch_all($query, MYSQLI_ASSOC));
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
