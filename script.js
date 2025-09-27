// ========== TO DO LIST ==========
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") return;
  
    const li = document.createElement("li");
    li.className = "task";
  
    const span = document.createElement("span");
    span.textContent = taskInput.value;
  
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.style.color = "green";
    doneBtn.onclick = () => {
      li.classList.toggle("done");
    };
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.style.color = "red";
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
    };
  
    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  
  // ========== POMODORO ==========
  let timer;
  let minutes = 1; // ganti aja 25 menit karena ku buat 1 menit untuk tes aja
  let seconds = 0;
  let isPaused = false;
  let isBreak = false; 
  
  const alarm = new Audio("alarm.mp3"); 
  alarm.loop = true; 
  
  function updateTimerDisplay() {
    const timerDisplay = document.getElementById("timer");
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    timerDisplay.textContent = m + ":" + s;
  }
  
  function startPomodoro() {
    clearInterval(timer);
    isPaused = false;
    if (!isBreak) {
      minutes = 1; // ganti 25 menit yah
    } else {
      minutes = 10; 
    }
    seconds = 0;
    updateTimerDisplay();
  
    timer = setInterval(countdown, 1000);
  }
  
  function countdown() {
    if (isPaused) return;
  
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        alarm.play();
  
        if (!isBreak) {
          isBreak = true;
          alert("Waktunya istirahat! 🐰");
          alarm.pause();
          alarm.currentTime = 0;
          minutes = 10;
          seconds = 0;
        } else {
          isBreak = false;
          alert("Yuk fokus lagi 💪");
          alarm.pause();
          alarm.currentTime = 0;
          minutes = 1;
          seconds = 0;
        }
  
        updateTimerDisplay();
        startPomodoro(); 
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateTimerDisplay();
  }
  
  function pausePomodoro() {
    isPaused = !isPaused;
  }
  
  function resetPomodoro() {
    clearInterval(timer);
    isBreak = false;
    minutes = 1;
    seconds = 0;
    updateTimerDisplay();
  }
  