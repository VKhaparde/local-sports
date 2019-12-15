<?php

if ($request['method'] === 'POST') {
  if (isset($_SESSION['user_id'])) {
    session_destroy();
  }
};
