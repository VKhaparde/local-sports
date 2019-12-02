<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $sql = 'SELECT name, address, `organizer-name`, phone, email, `event-description`, `event-name`
          FROM location
          JOIN `location-sports`
          ON `location-sports`.`location-id` = location.id
          JOIN `events`
          ON events.`location-id` = location.id
          JOIN `organizer-info`
          ON events.`organizer-id` = `organizer-info`.id


          WHERE location.id =6';

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
