const player_btn = document.getElementById("play");

/* PingPong deplay: Paramaters DelayTime and Feedback.
DelayTime: Hz / numbers seconds / notation 8n.
Feedback: The amount of the effected signal which is fed back delay. */

//Creating an instrument and costomizing filters
const synth = new Tone.Synth();
const pingPong = new Tone.PingPongDelay("0.5", 0.2);
const autoFilter = new Tone.AutoFilter("10Hz");
const tremolo = new Tone.Tremolo(90, 0.75);

//Connections
synth.connect(pingPong);
pingPong.connect(autoFilter)
autoFilter.connect(tremolo);

//Sending the sound to output
tremolo.toDestination();

function play(btn) {
    let clicked = false;
    btn.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            console.log("Turned on");
            synth.triggerAttack("C4");
            btn.textContent = "STOP ▶ ";
        } else if (clicked) {
            clicked = false;
            btn.textContent = "PLAY ▶";
            console.log("Turned Off");
            synth.triggerRelease();
        };
    });
};

play(player_btn);