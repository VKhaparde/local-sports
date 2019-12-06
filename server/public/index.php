<?php
require_once '../api/_lifecycle.php';
switch ($request['path']) {
  case '/api/test':
  case '/api/health-check':
  case '/api/sport-search':
  case '/api/event-search':
  case '/api/location-search':
  case '/api/review-search':
  case '/api/login':
  case '/api/logout':

    require_once "..${request['path']}.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
