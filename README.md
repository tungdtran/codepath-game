# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tung Tran**

Time spent: **8.5** hours spent in total

Link to project: https://glitch.com/~simon-says-memorize

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
* Start, stop and game buttons functional
![](https://i.imgur.com/MVsgk2k.gif)
* What happens when player messes up
![](https://i.imgur.com/RkbWdV9.gif)
* What happens when player WINS
![](https://i.imgur.com/8D6UzHn.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
* w3schools (https://www.w3schools.com/)
* Stack Overflow for markdown documents (https://stackoverflow.com/questions/47344571/how-to-draw-checkbox-or-tick-mark-in-github-markdown-table)
* Michigan Tech University "Frequencies of Musical Notes" (https://pages.mtu.edu/~suits/notefreqs.html)
* attacomsian for random number generator (https://attacomsian.com/blog/javascript-generate-random-numbers)


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
* I had a lot of trouble with coming up with the logic for my game. I figured since I have little experience with HTML and CSS styling, and
I pretty much followed the guide for the rest of the program, I better come up with the part that I did have experience with myself. I have 
done simple command line games in Java before, so I immediately started trying what I had always done. Basically I was just doing everything 
by trial error, having the code output the value of what I want to change to the console and coding blindly until it changes to what I need. 
That turned into a mess really quickly. Specifically it was the incrementing of the "progress" and "guessCounter." I thought it would be too 
much to work out the particular order they should be in, so I just started moving them around within the if-else statements to see what combo 
would work. I was changing multiple parts of the code at once, so I couldn't track down what had broken. Furthermore the console was getting 
littered with messages every click, so I can't use that to track where variables change either. After struggling with that for about 2 hours 
(with several 10 minutes breaks :')), I finally gave up that strategy and started tracing the existing code. I wrote down on paper what values 
were being passed into which functions, and what was being done with them each time I click something. I also added comments next to the code 
to keep track of what each part was supposed to do and save me some time when reviewing the code. It was super satisfying when the program did 
what I wanted it to do the first try. I was also little bit proud that I didn't look at sample code provided in the walkthrough, even though 
that is such a small thing. I have a pretty hard time staying motivated, and it would be easier to just copy and paste in the code, but the 
feeling of accomplishment from figuring it out myself was very nice.
* Another minor headache was "lighting" the game buttons. I had mistyped the selector for the game buttons when they would be shown by the 
game, so instead of #button1.lit, I typed #button1:lit with a colon instead. I couldn't figured out for a second why suddenly the buttons 
wouldn't even light up when I click on it. Then I looked over the walkthrough multiple times and finally saw that small mistake. It's hard 
catch since there was apparently no error in my syntax, and I didn't know the difference between a pseudoclass and an actual class.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* Having an IDE that refreshes the webpage live as I code was really helpful. It also blew my mind because I don't know how the code is being saved,
compiled, and refreshed back to me when I'm still editing it. I wonder how websites are set up to be able to serve many people like this. What else 
do I need other than the three files in this repository for a fully functioning website? Also I don't understand how a whole team would be able to 
work on one project when everything depends on each other. Working by myself, I had trouble tracing the code that was given to me by the walkthrough
to get the logic for my game working. How different must it be to work in a team?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
* First, the biggest thing would be reading up more on the syntax of Javascript, HTML and CSS. Knowing what my code means I could spend a little more 
time on the game logic. I think I could make it simpler and more readable with a switch statement, which I did try it but I realized I don't know as 
much about types in Javascript as I thought I did. I would also make the game a little more interesting with some sort of scoreboard or difficulty. I 
just don't know feasible it is to have a scoreboard that would save and be persistent in my website.



## License

    Copyright Tung Tran

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.