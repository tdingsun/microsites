<script lang="ts">
  import { onMount } from "svelte";
  import * as Tone from "tone";
  import Plus from "./components/Plus.svelte";

  const noteBases = ["C3", "D3", "E3", "G3", "A3", "C4", "Gb3", "Db3", "Ab3", "Eb3", 'Bb3', 'F3'];
  let noteBase = 0;
  let notes;
  let synth;
  var rotateAllSpeed = 2000/3;

var randRotate = false;
var rotateAllNote = 0;


  let containerWidth: number = $state(0);
  let containerHeight: number = $state(0);
  let container: HTMLDivElement;
  let clockString = $state("click to begin");
  let flowerSize = $state(0);
  let numFlowers = new Array(60);
  let flowerRotationStates = $state(new Array(60).fill(0));
  let started = $state(false);

  onMount(() => {
    flowerSize = containerWidth / 10;
    if (flowerSize > containerHeight / 6) {
      flowerSize = containerHeight / 6;
    }

    let volume = new Tone.Volume(-12);
    let reverb = new Tone.Reverb(0.25);
    synth = new Tone.PolySynth(Tone.Synth).chain(volume, reverb, Tone.getDestination());

    notes = Tone.Frequency(noteBases[noteBase]).harmonize([0, 2, 4, 7, 9, 12, 16, 19, 24]);

  });

  var currM = 1;
  var currFlower = 1;
  const rotateAll = () => {

    randRotate = false;
    for(let i = 0; i < flowerRotationStates.length; i++){
      if((i + 1) % currM === 0){
          rotate(i);
      }
    }
    synth.triggerAttackRelease(notes[rotateAllNote], "1n");

    if(currM >= 60){
      currM = 0;
      noteBase++;
      if(noteBase >= noteBases.length){
        noteBase = 0;
      }

    }
    if(currFlower >= 60) {
      currFlower = 0;
      notes = Tone.Frequency(noteBases[noteBase]).harmonize([0, 2, 4, 7, 9, 12, 16, 19, 24]);

    }
    currFlower++;
    currM++;
    randRotate = true;
    rotateAllNote++;
    if(rotateAllNote > 8) {
      rotateAllNote = 0
    }
  }

  const rotateFixed = () => {
    randRotate = false;
    for(let i = 0; i < flowerRotationStates.length; i++){
      if(currFlower % (i + 1) === 0 ){
          rotate(i);
      }
    }
    synth.triggerAttackRelease(notes[rotateAllNote], "1n");
  }

  const rotate = (i) => {
    flowerRotationStates[i] = flowerRotationStates[i] === 0 ? Math.random() * 90 + 90 : 0;
  }

  const onFlowerMouseOver = (flowerIdx) => {
    rotate(flowerIdx, 0);
    synth.triggerAttackRelease(notes[0], "4n");
  }

  const checkTime = (i) => {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  const setClock = () => {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    clockString = h + ":" + m + ":" + s;
  }

  let intervals: number[] = [];

  const start = () => {
    started = true;
    let i1 = setInterval(rotateAll, rotateAllSpeed);
    let i2 = setInterval(rotateFixed, 500);
    let i3 = setInterval(() => {
      setClock();
    }, 1000)
    setClock();
    intervals = [i1, i2, i3];
  };

  const stop = () => {
    for(let i of intervals){
      clearInterval(i);
    }
  }
</script>

<svelte:head>
  <title>Plus Clock</title>
</svelte:head>



<div class="w-dvw h-dvh fixed top-0 left-0 p-16 flex ">
  <div
    bind:this={container}
    bind:clientWidth={containerWidth}
    bind:clientHeight={containerHeight}
    class="w-full flex flex-wrap content-center justify-center"
  >
    <div
      style="max-width: {flowerSize * 10.5}px;"
      class="flex flex-wrap content-center justify-center"
    >
      {#each numFlowers as _, flowerIdx}
        <Plus onMouseOver={onFlowerMouseOver} size={flowerSize} {flowerIdx} bind:rotationState={flowerRotationStates[flowerIdx]}></Plus>
      {/each}
    </div>
  </div>
</div>

<div class="clock w-full flex p-4  text-4xl text-tertiary font-wyvern tracking-tighter fixed bottom-0 left-0 w-dvw justify-center z-0 leading-none">{clockString}</div>


<div
  onclick={start}
  class="cursor-pointer {started
    ? 'hidden'
    : 'block'} fixed top-0 left-0 w-dvw h-dvh flex justify-center items-center bg-primary text-tertiary"
>
  click to begin
</div>

<a onclick={stop} href="/flower-clock"><div class="fixed bottom-4 left-4 bg-tertiary w-6 h-6 rounded-full"></div></a>

