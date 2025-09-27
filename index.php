<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List dengan Pomodoro</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>To-Do List 📝</h1>

  <div class="todo-container">
    <input type="text" id="taskInput" placeholder="Tulis tugas...">
    <br>
    <button onclick="addTask()">Tambah</button>
    <ul id="taskList"></ul>
  </div>

  <div class="timer-container">
    <h2>Pomodoro Timer 🍅</h2>
    <div class="timer-box">
      <p id="timer">1:00</p>
      <button onclick="startPomodoro()">Start</button>
      <button onclick="pausePomodoro()">Pause</button>
      <button onclick="resetPomodoro()">Reset</button>
    </div>
  </div>
  <div class="bunny">🐰</div>

  <script src="script.js"></script>
</body>
</html>
