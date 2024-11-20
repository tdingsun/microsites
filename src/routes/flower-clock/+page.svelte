<script lang="ts">
  import { onMount } from "svelte";
  import * as Tone from "tone";
  import Flower from "./components/Flower.svelte";

  const noteBases = ["C3", "G3", "D3", "A3", "E3", "B3", "Gb3", "Db3", "Ab3", "Eb3", 'Bb3', 'F3'];
  let noteBase = 0;
  let notes;
  let synth;
  var rotateAllSpeed = 1000;
  var colors = ["gold", "yellowgreen", "tomato", "salmon", "plum", "palevioletred", "orchid", "orangered", "orange", "mediumorchid", "lightcoral", "goldenrod", "cornflowerblue", "coral", "thistle", "darkkhaki", "darkcyan", "pink", "dodgerblue", "deepskyblue"]

var randRotate = false;
var rotateAllNote = 0;


  let containerWidth: number = $state(0);
  let containerHeight: number = $state(0);
  let container: HTMLDivElement;
  let clockString = $state("click to begin");
  let flowerSize = $state(0);
  let numFlowers = new Array(60);
  let flowerRotationStates = $state(new Array(60).fill(0));
  let flowerColorStates = $state(new Array(60).fill('#c9c9b6'))
  let started = $state(false);

  onMount(() => {
    flowerSize = containerWidth / 10;
    if (flowerSize > containerHeight / 6) {
      flowerSize = containerHeight / 6;
    }

    let volume = new Tone.Volume(-12);
    synth = new Tone.PolySynth(Tone.Synth).chain(volume, Tone.getDestination());

    notes = Tone.Frequency(noteBases[noteBase]).harmonize([0, 4, 7, 12, 16, 19, 24]);

  });

  var currM = 1;
  var currFlower = 1;
  const rotateAll = () => {

    randRotate = false;
    for(let i = 0; i < flowerRotationStates.length; i++){
      if((i + 1) % currM === 0 || currFlower % (i + 1) === 0 ){
          rotate(i, rotateAllNote);
      }
    }
    synth.triggerAttackRelease(notes[Math.floor(Math.random() * notes.length)], "1n");

    if(currM >= 10){
      currM = 0;
      noteBase++;
      if(noteBase >= noteBases.length){
        noteBase = 0;
      }
      notes = Tone.Frequency(noteBases[noteBase]).harmonize([0, 4, 7, 12, 16, 19, 24]);

    }
    if(currFlower >= 60) {
      currFlower = 0;
    }
    currFlower++;
    currM++;
    randRotate = true;
    rotateAllNote++;
    if(rotateAllNote > 8) {
      rotateAllNote = 0
    }
  }

  const rotate = (i) => {
    flowerRotationStates[i] = flowerRotationStates[i] === 0 ? Math.random() * 90 + 90 : 0;
    flowerColorStates[i] = colors[Math.floor(Math.random() * colors.length)];
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

  const start = () => {
    started = true;
    setInterval(rotateAll, rotateAllSpeed);
    setInterval(() => {
      setClock();
    }, 1000)
    setClock();
  };
</script>

<svelte:head>
  <title>Flower Field Clock</title>
</svelte:head>

<div class="clock w-full flex p-4 text-[25vw] text-[cornsilk] font-bold tracking-tighter fixed top-0 left-0 w-dvw h-dvh flex justify-center items-center z-0">{clockString}</div>


<div class="w-dvw h-dvh fixed top-0 left-0 p-4 flex ">
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
        <Flower onMouseOver={onFlowerMouseOver} size={flowerSize} {flowerIdx} bind:rotationState={flowerRotationStates[flowerIdx]}  bind:colorState={flowerColorStates[flowerIdx]}></Flower>
      {/each}
    </div>
  </div>
</div>

<div
  onclick={start}
  class="cursor-pointer {started
    ? 'hidden'
    : 'block'} fixed top-0 left-0 w-dvw h-dvh flex justify-center items-center bg-slate-500"
>
  click to begin
</div>
<a href="http://tdingsun.github.io/pluses/"><div class="button"></div></a>
