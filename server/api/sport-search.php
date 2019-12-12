<?php

if ($request['method'] === 'GET') {
  $sportType = $request['query']['sport'];
  $link = get_db_link();

  $sql = "SELECT name, lat, lng, `sport-type`, `event-name`, location.id, `event-day`, `review-average`, time
          FROM `location-sports`
          JOIN `location`
          ON `location-sports`.`location-id`=location.id
          JOIN sports
          ON `location-sports`.`sports-id`=sports.id
          JOIN events
          ON `location-sports`.`location-id`=events.`location-id`

          WHERE `sport-type`=? ";

  if (!isset($sportType)) {
    throw new ApiError('need a correct sport type entered');
  }

  $preparedStatement = mysqli_prepare($link, $sql);
  mysqli_stmt_bind_param($preparedStatement, 's', $sportType);
  mysqli_stmt_execute($preparedStatement);
  $result = mysqli_stmt_get_result($preparedStatement);


  $result = (mysqli_fetch_all($result, MYSQLI_ASSOC));
  $response['body'] = $result;
  send($response);
}
