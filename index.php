<!DOCTYPE html>

<html lang="en" ng-app="myApp" class="no-js"> 
    <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title ng-class="timer" class="timer">Pomodoro</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="libs/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="libs/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/jmbotron-narrow.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="api/libs/jquery/jquery-1.9.1.min.js"></script>
    <script src="js/angular.js"></script>
    <script src="js/angular-route.js"></script>
    <script src="app/app.js"></script>
    <script src="app/data.js"></script>
    <script src="app/TimerController.js"></script>
    <script src="app/SettingController.js"></script>
</head>

<body>
     <div class="container">
      <div class="header">
        <ul class="nav nav-pills pull-right" role="tablist">
          <li role="presentation"  class="active"><a href="#/timer">Timer</a></li>
          <li role="presentation"><a href="#/settings">Settings</a></li>
        </ul>
        <h3 class="text-muted">Pomodoro</h3>
      </div>
         
    <div ng-view ></div>         

      <div class="footer">
        <p>&copy; Denis Alustau 2014</p>
      </div>
    </div>
</body>
</html>
