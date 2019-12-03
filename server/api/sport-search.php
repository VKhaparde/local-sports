<?php

if ($request['method'] === 'GET') {
  $link = get_db_link();
  $sql = 'SELECT name, lat, lng, `sport-type`, `event-name`
          FROM `location-sports`
          JOIN `location`
          ON `location-sports`.`location-id`=location.id
          JOIN sports
          ON `location-sports`.`sports-id`=sports.id
          JOIN events
          ON `location-sports`.`location-id`=events.`location-id`


          WHERE `sport-type`="Basketball"';

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
