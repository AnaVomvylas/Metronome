//our main synth
const synth = Tone.MembraneSynth().toMaster();

const notesSequence = ["F2", "C2", "C2", "C2"];

//play the note in the notesSequence using synth, every beat (4th)
const sequence = new Tone.Sequence(
    function (time, note) {
        synth.triggerAttackRelease(note, "10hz", time);
    },
    notesSequence,"4n"
)

//start it so it's ready to play when Transport starts
sequence.start();

function playMetronome() {
    Tone.Transport.stop();
    Tone.Transport.start();
}

function stopMetronome() {
    Tone.Transport.stop();
}

function TempoOnChange(bpm) {
    Tone.Transport.bpm = bpm;
}