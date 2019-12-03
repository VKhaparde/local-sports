<?php

if ($request['method'] === 'GET') {
  $locationId = $request['body']['id'];
  $link = get_db_link();
  $sql = "SELECT name, address, `organizer-name`, phone, email, `event-description`, `event-name`, `event-day`
          FROM events
          JOIN `location`
          ON events.`location-id`=location.id
          JOIN sports
          ON events.`sport-id`=sports.id
          JOIN `organizer-info`
          ON events.`organizer-id` = `organizer-info`.id
          WHERE location.id=$locationId";
  if(!isset($locationId)){
    throw new ApiError('location ID is required');
  }

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
