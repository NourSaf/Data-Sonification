//Fetch the button from the DOM
const player_btn = document.getElementById("play");

//Creating a Synth 
const synth = new Tone.Synth();

//Send the Synth to the output (Speakers)
synth.toDestination();

//Create a function to play the sound
function playSound(btn) {
    
    //Intiate a buttn state.
    let clicked = false;
    //Create an EventListener
    btn.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            console.log("Turned on");
            //Play the Synth on C4 note
            synth.triggerAttack("C4");
            btn.textContent = "STOP";
        } else if (clicked) {
            clicked = false;
            btn.textContent = "PLAY";
            console.log("Turned Off");
            //Stop the Synth 
            synth.triggerRelease();
        };
    });
};

//Pass DOM button to PlaySound function
playSound(player_btn);