//Global variables
var pattern = [2, 2, 2, 1, 2, 3, 4, 4];
var progress = 0;
var gamePlaying = false;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 250; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

var guessCounter = 0;

//sound variables
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 to 1.0


function startGame(){
  //initializes game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  
  //display length of pattern array as "Number of turns" in console
  console.log("Number of turns in game "+pattern.length);
  
  //hides start and unhide stop button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame(){
  //resets gamePlaying
  gamePlaying = false;
  
  //generate a different pattern
  for(let i=0;i<pattern.length;i++){
    pattern[i] = Math.ceil(Math.random()*4);
    console.log("pattern["+i+"]="+pattern[i]);
  }
  
  //hides stop and unhide start button
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

//
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}


function playClueSequence(){
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  clueHoldTime -= 100;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  //game logic
  if(btn != pattern[guessCounter]){        //incorrect guess, game over, exits function
    loseGame();
    return;
  }
  
  //correct guess
  if(guessCounter != progress){            //guessCounter is not progress, turn is not over
    ++guessCounter;                        //increment guessCounter
    return;                                //exit function
    console.log("guessCounter: "+guessCounter);
  }
  else if (guessCounter == progress){      //guessCounter is progress, turn is over
    ++progress;                            //increment progress
    playClueSequence();                    //play sequence
    console.log("progress: "+progress);
  }
  if(progress == pattern.length){
    winGame();
    return;
  }
}


function loseGame(){
  stopGame();
  alert("Game Over... You lost");
}
function winGame(){
  stopGame();
  alert("Game Over. YOU WON!")
}

//restore the original pattern
function resetPattern(){
  gamePlaying = false;
  
  pattern = [2, 2, 2, 1, 2, 3, 4, 4];
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 196
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)