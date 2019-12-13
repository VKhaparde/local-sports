<?php
$link = get_db_link();

if ($request['method'] === 'GET') {
  $response['body'] = [
    'liked-events' => retrieve_favorite_sports($link)
  ];
  send($response);
}
if ($request['method'] === "POST") {
  $eventId = $request['body']['event-id'];

  if (!isset($eventId)) {
    throw new ApiError('please like an event properly yeh dingus');
  }
  $response['body'] = [
    'eventId' => $request['body']['event-id'],
    'isLiked' => add_event_to_liked_events($link, $eventId)
  ];
  send($response);
}

if ($request['method'] === "DELETE") {
  $eventId = $request['body']['event-id'];

  if (!isset($eventId)) {
    throw new ApiError('gotta put an event in there somewhere homie');
  }
  $response['body'] = [
    'eventId' => $eventId,
    'isUnliked' => remove_event_from_liked_events($link, $eventId)
  ];
  send($response);
}


function remove_event_from_liked_events($link, $eventId)
{
  $sql = "DELETE
          FROM `liked-events`
          WHERE `liked-events`.`event-id` = ?
          AND {$_SESSION['user_id']} = `user-id`";

  $stmt = mysqli_prepare($link, $sql);
  mysqli_stmt_bind_param($stmt, 'i', $eventId);
  mysqli_stmt_execute($stmt);
}

function add_event_to_liked_events($link, $eventId)
{
  $user_id = $_SESSION['user_id'];
  $sql = "INSERT INTO `liked-events` (`user-id`, `event-id`)
  VALUES (?, ?)";

  $stmt = mysqli_prepare($link, $sql);
  mysqli_stmt_bind_param($stmt, 'ii', $user_id, $eventId);
  mysqli_stmt_execute($stmt);
}

function retrieve_favorite_sports($link)
{
  $sql = "SELECT  `liked-events`.`event-id`, `event-name`, `event-description`, `event-day`
          FROM `liked-events`
          JOIN events
          ON `liked-events`.`event-id` = events.`event-id`
          WHERE `user-id` = {$_SESSION['user_id']}";
  $result = mysqli_query($link, $sql);
  return mysqli_fetch_all($result, MYSQLI_ASSOC);
}
