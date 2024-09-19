<script lang="ts">
  import { onMount } from "svelte";
  import Slide from "./Slide.svelte";
  import IntroMP3 from "$lib/media/Intro.mp3"
  import landscape from "$lib/images/minecraft/landscape.jpg";

  import mattia from "$lib/images/minecraft/mattia.png";
  import mattiaYT from "$lib/images/minecraft/mattia-youtube.png";
  import mattiaBeginning from "$lib/images/minecraft/mattia-beginning.png";
  import mattiaBirth from "$lib/images/minecraft/mattia-birth.png";
  import mattiaNeighborhood from "$lib/images/minecraft/mattia-neighborhood.png";
  import mattiaEntrance from "$lib/images/minecraft/mattia-entrance.png";
  import mattiaFace from "$lib/images/minecraft/mattia-face.png";
  import mattiaFindingRails from "$lib/images/minecraft/mattia-finding-rails.png";
  import mattiaHouse from "$lib/images/minecraft/mattia-house.png";
  import mattiaSoccer from "$lib/images/minecraft/mattia-soccer.png";
  import mattiaGif0 from "$lib/images/minecraft/mattia-0.gif";
  import mattiaGif1 from "$lib/images/minecraft/mattia-1.gif";
  import mattiaGif2 from "$lib/images/minecraft/mattia-2.gif";
  import mattiaGif3 from "$lib/images/minecraft/mattia-3.gif";

  import animalCrossing from "$lib/images/minecraft/animal-crossing.webp";
  import botw from "$lib/images/minecraft/botw.jpeg";
  import eldenRing from "$lib/images/minecraft/elden-ring.webp";
  import firewatch from "$lib/images/minecraft/firewatch.jpg";
  import atmosphere from "$lib/images/minecraft/minecraft-atmosphere.webp";
  import nature from "$lib/images/minecraft/nature.jpg";

  import diagram1 from "$lib/images/minecraft/diagram-1.png";
  import diagram2 from "$lib/images/minecraft/diagram-2.png";

  import diagram1a from "$lib/images/minecraft/diagram1-a.png";
  import diagram1b from "$lib/images/minecraft/diagram1-b.png";
  import diagram1c from "$lib/images/minecraft/diagram1-c.png";

  import minecraftOfficial from "$lib/images/minecraft/minecraft-official.webp"
  import basicWorld from "$lib/images/minecraft/overworld.webp"
  import vinyl from "$lib/images/minecraft/vinyl.jpeg";
  import enderdragonGif from "$lib/images/minecraft/enderdragon.gif";

  import crossSection from "$lib/images/minecraft/cross-section.jpg";
  import firstCave from "$lib/images/minecraft/first-cave.png";
  import fourBlocks from "$lib/images/minecraft/four-blocks.png";
  import herobrineSighting from "$lib/images/minecraft/herobrine-sighting.jpg";
  import treeOfLife from "$lib/images/minecraft/tree-of-life.png";
  import treeOfLife2 from "$lib/images/minecraft/tree.png";
  import mobs from "$lib/images/minecraft/mobs.png"
  import theEnd from "$lib/images/minecraft/the-end.png"
  import theEnd2 from "$lib/images/minecraft/the-end-2.webp"
  import nether from "$lib/images/minecraft/nether.webp"
  import mojang from "$lib/images/minecraft/mojang.png"
  import nostalgiaComment from "$lib/images/minecraft/comment-3.png"
  import minecon1 from "$lib/images/minecraft/minecon1.png"
  import minecon2 from "$lib/images/minecraft/minecon2.jpg"
  import fogOfWar from "$lib/images/minecraft/fog-of-war.webp"
  import mingPainting1 from "$lib/images/minecraft/ming-painting-1.jpg"
  import dad from "$lib/images/minecraft/dad.png"
  import lifeGame from "$lib/images/minecraft/life-game.png"
  import monument from "$lib/images/minecraft/monument.png"
  import parkour from "$lib/images/minecraft/parkour.gif"
  import bedWars from "$lib/images/minecraft/bed-wars.jpg"
  import threeBody from "$lib/images/minecraft/three-body-problem.jpg"
  import youtubers from "$lib/images/minecraft/youtubers.png"
  import crafting from "$lib/images/minecraft/crafting.png"
  import enchanting from "$lib/images/minecraft/enchanting.webp"
  import roofs from "$lib/images/minecraft/roofs.webp"
  import bridges from "$lib/images/minecraft/bridges.webp"
  import circles from "$lib/images/minecraft/circles.webp"
  import dyingArmor from "$lib/images/minecraft/dying-armor.webp"
  import walden from "$lib/images/minecraft/walden.webp"
  import waldenInside from "$lib/images/minecraft/walden-inside.webp"
  import pond from "$lib/images/minecraft/pond.png"
  import scholarRock from "$lib/images/minecraft/scholar-rock.jpg"
  import mingPainting2 from "$lib/images/minecraft/ming-painting-2.jpg"
  import animaMundi from "$lib/images/minecraft/anima-mundi.jpg"
  import crush from "$lib/images/minecraft/crush.png"
  import flowers from "$lib/images/minecraft/flowers.gif"
  import fish from "$lib/images/minecraft/fish.png"
  import redBook from "$lib/images/minecraft/red-book.jpg"
  import mundusImaginalis from "$lib/images/minecraft/mundus-imaginalis.jpg"
  import sohravardi from "$lib/images/minecraft/sohravardi.jpg";
  import redBookMisc from "$lib/images/minecraft/red-book-misc.png";
  import torus from "$lib/images/minecraft/torus.png";
  import zoomedOutMulti from "$lib/images/minecraft/zoomed-out-multi.png"
  import lostWorldComment from "$lib/images/minecraft/lost-world-reddit.png"
  import convo from "$lib/images/minecraft/convo.gif"
  import dogs from "$lib/images/minecraft/dogs.webp"
  import endPoemTattoo from "$lib/images/minecraft/end-poem-tattoo.jpg"
  import netherPortal from "$lib/images/minecraft/nether-portal.webp"
  import magicCircle from "$lib/images/minecraft/magic-circle.webp"
  import wakeUp from "$lib/images/minecraft/wake-up.jpg"
  import herobrineSteve from "$lib/images/minecraft/herobrine.jpg"
  import herobrineIsometric from "$lib/images/minecraft/herobrine-isometric.png"
  import liminal from "$lib/images/minecraft/liminal.png"
  import gameMagicCircle from "$lib/images/minecraft/game-magic-circle.png"
  import ex from "$lib/images/minecraft/ex.png"
  import twoWeekPhase from "$lib/images/minecraft/two-week-phase.png"
  import twoWeekGif from "$lib/images/minecraft/two-week-gif.gif"
  import farming from "$lib/images/minecraft/farming.png"
  import operas from "$lib/images/minecraft/operas.png"
  import oulipo from "$lib/images/minecraft/oulipo.jpg"
  import americanFootball from "$lib/images/minecraft/american-football.jpg"
  import sheep from "$lib/images/minecraft/sheep.jpg"
  import froebel1 from "$lib/images/minecraft/froebel1.jpg"
  import froebel2 from "$lib/images/minecraft/froebel2.jpg"
  import froebel3 from "$lib/images/minecraft/froebel3.jpg"
  import fallingwater from "$lib/images/minecraft/fallingwater.jpg"
  import artificialLight from "$lib/images/minecraft/artificial-light.gif"
  import procedural from "$lib/images/minecraft/procedural.png"

  import misc1 from "$lib/images/minecraft/misc1.jpg"
  import misc2 from "$lib/images/minecraft/misc2.webp"
  import misc3 from "$lib/images/minecraft/misc3.jpg"
  import collectiveUnconscious from "$lib/images/minecraft/collective-unconscious.png"

  import egg from "$lib/images/minecraft/ender-egg.jpg"

  import endPoemText from "$lib/images/minecraft/end-poem-text.jpg"
  import endPoemText2 from "$lib/images/minecraft/end-poem-text-2.jpg"
  import treeRedBook1 from "$lib/images/minecraft/tree-red-book-1.png"
  import treeRedBook2 from "$lib/images/minecraft/tree-red-book-2.png"
  import slain from "$lib/images/minecraft/slain.png"
  import dragonRedBook from "$lib/images/minecraft/dragon-red-book.png"
  import killingEnderdragon from "$lib/images/minecraft/killing-enderdragon.png"
  import tweet1 from "$lib/images/minecraft/tweet1.png"
  import sad from "$lib/images/minecraft/sad.jpg"
  import mining from "$lib/images/minecraft/mining.webp"
  import firstNight from "$lib/images/minecraft/first-night.png"
  import cozy from "$lib/images/minecraft/cozy.jpg"
  import sun from "$lib/images/minecraft/sun.webp"
  import recipes from "$lib/images/minecraft/crafting-recipes.png"
    import treePunching from "$lib/images/minecraft/tree-punching.jpg"
  import diamonds from "$lib/images/minecraft/diamonds.png"
    import tnt from "$lib/images/minecraft/tnt.webp"
import woodenTools from "$lib/images/minecraft/wooden-tools.jpg"
import industrial from "$lib/images/minecraft/industrial.png"
import jungEgg from "$lib/images/minecraft/jung-egg.png"
import peters from "$lib/images/minecraft/peters.jpg"

import mountain from "$lib/images/minecraft/mountain.jpg"
import moon from "$lib/images/minecraft/moon.jpg"
import ancestors from "$lib/images/minecraft/ancestors.jpg"
import animalSpirit from "$lib/images/minecraft/animal-spirit.png"
import jinn from "$lib/images/minecraft/jin.jpg"
import ghosts from "$lib/images/minecraft/ghosts.webp"
import greenman from "$lib/images/minecraft/greenman.jpg"
import gods from "$lib/images/minecraft/gods.jpg"
import demons from "$lib/images/minecraft/demons.jpg"
import angels from "$lib/images/minecraft/angels.webp"
import ufo from "$lib/images/minecraft/ufo.webp"
import lepton from "$lib/images/minecraft/lepton.png"
import languages from "$lib/images/minecraft/languages.jpg"
import poltergeist from "$lib/images/minecraft/poltergeist.png"
import fatherSun from "$lib/images/minecraft/fatherSun.webp"



  let title = "In Defense of the Simulation of Nature: A Hermeneutics of Minecraft";
  let author = "Tiger Dingsun";

  let slides: any = [
    {
      imageURL: landscape,
      caption: null,
      text: title,
      title: true,
    },
    {
      imageURL: mattiaYT,
      caption: null,
      text: "I’m going to start with a youtube video called Mattia Polibio World.",
    },
    {
      imageURL: mattia,
      caption: null,
      text: "This is Mattia Polibio, a pretty typical mainstream tiktok influencer with 5 million followers. In this video he is a guest on a youtube gaming channel called “Slushy Noobz,” hosted by Hamzah and Martin, who both also initially gained a following on tiktok.",
    },
    {
      imageURL: mattiaBeginning,
      caption: null,
      text: "The first half of the video is a pretty boring interview with Mattia, conducted while starting a presumably new survival-mode game in Minecraft. Mattia has never played before, so the two hosts are showing him what to do. They sporadically and abruptly interject this with basic interview questions, like “Life can get cray, man. how did you find that balance between social media fame and personal life?” It seems like they don’t know or care that much about Mattia at all.",
    },
    {
      imageURL: mattiaFindingRails,
      caption: null,
      text: "Then, about halfway through the video they discover a set of powered mine-cart rails. they follow the path and…",
    },
    {
      imageURL: mattiaGif0,
      caption: null,
      text: "It turns out to lead to this huge structure that Hamzah and Martin had built, filled with impressively minute details of Mattia’s life, including",
      upscale: true,
    },
    {
      imageURL: mattiaFace,
      caption: null,
      text: "pixel art of his social media posts made from Minecraft blocks",
    },
    {
      imageURL: mattiaHouse,
      caption: null,
      text: "a recreation of the house he grew up in in New Jersey",
    },
    {
      imageURL: mattiaBirth,
      caption: null,
      text: "vignettes of moments in his life, like his birth,",
    },
    {
      imageURL: mattiaSoccer,
      caption: null,
      text: " or his first time playing soccer, ",
    },
    {
      imageURL: mattiaNeighborhood,
      caption: null,
      text: "but it doesn’t stop there, as a huge cavernous space is revealed to be filled with hundreds of copies of his house, each one representing a moment in his life.",
    },
    {
      imageURL: mattiaGif1,
      caption: null,
      text: "By the end of the tour, Mattia is incapacitated with fits of incredulous laughter. Then, this is what Hamzah and Martin say to Mattia, in half-sincere half-deadpan tones:",
      upscale: true,
    },
    {
      imageURL: mattiaGif1,
      caption: null,
      text: "We brought you here … to make you realize that the future’s actually in your hands",
      upscale: true,
    },
    {
      imageURL: mattiaGif1,
      caption: null,
      text: "Mattia, every decision you make has an effect on your life. you are in control of your future. every single house … represents a single moment in your life. and you have control, at every decision, every fork in the road, to pick your destiny. ",
      upscale: true,
    },
    {
      imageURL: mattiaGif1,
      caption: null,
      text: "I hope this resonates with you and makes you realize how delicate life is and how fragile it is, where every single decision you make can change the outcome of your life. This is Mattia world. This is Mattia Polibio world. and we’re just living in it. ",
      upscale: true,
    },
    {
      imageURL: mattiaGif1,
      caption: null,
      text: "All your friends, your family, your tiktok trends you started, toilet bowl licking and what not, […] it wasn’t an accident. ",
      upscale: true,
    },
    {
      imageURL: mattiaGif1,
      caption: null,
      text: "Do you understand the message we’re trying to tell you?",
      upscale: true,
    },
    {
      imageURL: mattiaGif2,
      caption: null,
      text: "Mattia, catching his breath,  replies, ‘yes, I think so. Where are we going now?’",
      upscale: true,
    },
    {
      imageURL: mattiaGif2,
      caption: null,
      text: "Hamzah replies with as much profundity as he can muster, “We’re going right back to where we started.”",
      upscale: true,
    },
    {
      imageURL: mattiaGif2,
      caption: null,
      text: "And that's where the video ends.",
      upscale: true,
    },
    {
      imageURL: mattiaGif2,
      caption: null,
      text: "It’s an admittedly dumb video, and the profound tone is probably more tongue-in-cheek than sincere. But as the characteristically introspective Minecraft music kicked in towards the end, I wondered if the expression left on Mattia’s face betrayed a real sense of uncanny introspection as he saw his life, his past, and his memories spatialized as a sprawling dream-like grid of suburban homes—in Minecraft, of all places.",
      upscale: true,
    },
    {
      imageURL: mattiaGif3,
      caption: null,
      text: "I couldn't help but be struck by the last shot of the video, a trancelike ascension back toward the surface. They had gotten me. It reminded me of similar numinous feelings I've had before, while investing hours in various video games and being struck by their vistas:",
      upscale: true,
    },
    {
      imageURL: botw,
      caption: null,
      text: "like this,",
      upscale: true,
    },
    {
      imageURL: firewatch,
      caption: null,
      text: "or this,",
      upscale: true,
    },
    {
      imageURL: eldenRing,
      caption: null,
      text: "or this,",
      upscale: true,
    },
    {
      imageURL: animalCrossing,
      caption: null,
      text: "or this.",
      upscale: true,
    },
    {
      imageURL: nature,
      caption: null,
      text: "And this feeling, of course, is not unlike being in proximity to IRL nature’s sublime, but it also felt distinct, unique to the particular detached space of a game. ",
    },
    {
      imageURL: diagram1,
      caption: null,
      text: "I wanted to map out the  relationship between game worlds, the physical world, and the inner world of the psyche, so I drew this diagram of how they bleed into one another, how they all operate under similar metaphors, and how ‘space’ and ‘world’ themselves were metaphors I had previously taken for granted.",
    },
    {
      imageURL: diagram1,
      caption: null,
      text: "To explain the diagram a little:",
    },
    {
      imageURL: diagram1,
      caption: null,
      text: "1. Games like Minecraft are simulations of the physical world and of nature",
    },
    {
      imageURL: diagram1,
      caption: null,
      text: "2. We form symbolic and archetypal relationships between our interiority and whats in our environment",
    },
    {
      imageURL: diagram1,
      caption: null,
      text: "3. We project our psyche onto the games we play and the virtual worlds we inhabit.",
    },
    {
      imageURL: diagram1,
      caption: null,
      text: "But then I immediately felt the need to redraw it from another perspective:",
    },
    {
      imageURL: diagram2,
      caption: null,
      text: "In which material reality encompasses both virtual spaces and psychic spaces. Even though we tend to separate 'mind' from 'matter', and the 'virtual' from the 'real', one could argue that they still come from the same physical, biological, and evolutionary roots as we do. Humans make media, but nature makes us.",
    },
    {
      imageURL: diagram2,
      caption: null,
      text: "I also wanted to represent the Jungian idea of the collective unconscious, which, paradoxically, is found deep within us and yet permeates the world. In this way, the 'inside becomes outside', a process described as 'topographical inversion' by the French philosopher and theologian Henry Corbin, a concept that I will return to later.",
    },
    {
      imageURL: minecraftOfficial,
      caption: null,
      text: "I'm going to be using Minecraft as an object lesson to explore these relations, although I’m hoping that these ideas can be expanded to any virtual space that feels ‘inhabited.’",
    },
    {
      imageURL: vinyl,
      caption: null,
      text: "So why Minecraft?",
    },
    {
      imageURL: basicWorld,
      caption: null,
      text: "Minecraft is an open-world block-based sandbox game in which players explore a near-infinite, procedurally-generated landscape. Each world spans 30 million blocks in every direction, and 1 block is meant to represent 1 cubic meter. This means that the size of a world is approximately 8 times the area of the surface of the Earth. ",
    },
    {
      imageURL: fourBlocks,
      caption: null,
      text: "The environment is entirely made up of different types of blocks, like dirt, cobblestone, sand, as well as many more exotic materials. Players can mine any block, craft items and tools from them, and build practically anything. ",
    },
    {
      imageURL: mobs,
      caption: null,
      text: "Depending on the game mode setting, there are also hostile mobs to defeat.",
    },
    {
      imageURL: crossSection,
      caption: null,
      text: "As the title suggests, a large part of the game involves venturing underground to mine for materials. There are also two other realms besides the main overworld:",
    },
    {
      imageURL: nether,
      caption: null,
      text: "The ‘Nether’,  an eerie, hostile hell-world containing seas of lava and hostile mobs. Space works differently here: every 8 blocks traveled on the overworld equates to 1 block in the Nether.",
    },
    {
      imageURL: theEnd2,
      caption: null,
      text: "And The End, a dark, empty-feeling world consisting of one large island surrounded by many smaller islands, all floating in a void.",
    },
    {
      imageURL: enderdragonGif,
      caption: null,
      text: " It is here that players encounter the supposed final boss—the Enderdragon, although defeating the Enderdragon is merely one available ‘telos’ of the game out of many.",
    },
    {
      imageURL: mojang,
      caption: null,
      text: `Minecraft was created by Mojang, a Swedish game development studio founded by Markus "Notch" Persson. It was officially released in 2011, and acquired by Microsoft in 2014 for 2.5 billion US dollars. It’s the best-selling video game of all time with over 300 million sales to date. `,
    },
    {
      imageURL: nostalgiaComment,
      caption: null,
      text: "At this point, multiple generations have grown up playing Minecraft, and is often talked about in nostalgic tones. It is a great source of meaning that is hard to explain for people who haven’t played. And yet its cultural importance remains somewhat under-examined.",
    },
    {
      imageURL: dad,
      caption: null,
      text: "Minecraft is often thought of as children's media despite a wide age demographic. In fact, the average player age is 24.  ",
    },
    {
      imageURL: lifeGame,
      caption: null,
      text: "Even so,  the virtual worlds children spend time in (like Minecraft, Roblox, Fortnite, etc)—should be examined more critically, since it shapes their relationship to media both structurally and aesthetically, which really starts to matter as they grow up to be cultural producers in their own right.",
    },
    {
      imageURL: tweet1,
      caption: null,
      text: "Minecraft is a game with very few guardrails, inviting players to create their own structures—both in the architectural sense, and in terms of structuring one’s own game play style.",
    },
    {
      imageURL: tweet1,
      caption: null,
      text: "For instance, media researchers Joel Schneier and Nicholas Taylor make a distinction between time-biased “monumentary” play, which entails building long-lasting structures, grounding themselves to specific in-game locations, and returning to the same Minecraft world;  and space-biased “momentary” play—characterized by nomadic exploration, survivalist fantasies, and ephemeral worlds that were routinely deleted and replaced.",
    },
    {
      imageURL: minecon1,
      caption: null,
      text: "But Minecraft isn’t just a game. Minecraft had a big part in the evolution of new forms of media ecologies that we now find ourselves in today: extensive online participatory cultures, in which the lines between media production and consumption blur—a multi-centered “videogame commons” that exist on youtube, forums, wikis, etc. ",
    },
    {
      imageURL: minecon2,
      caption: null,
      text: "Here are some different aspects of this media ecology:",
    },
    {
      imageURL: parkour,
      caption: null,
      text: "Relaxing Minecraft parkour videos that serve as the background for AI-voiced reddit stories that feel ubiquitous on social media, intended to induce a vicarious ‘flow state’ in the viewer to maintain attention",
    },
    {
      imageURL: bedWars,
      caption: null,
      text: "User-created game-servers in which people play structured games, like the capture-the-flag style “bed wars.” Like Roblox, Minecraft also functions as a game engine that allows community members to create games for others to play, with a relatively low-barrier to entry. ",
    },
    {
      imageURL: threeBody,
      caption: null,
      text: "Animations and other scripted works, like this fan-made adaptation of the entirety of Liu Cixin’s 3 body problem.",
    },
    {
      imageURL: youtubers,
      caption: null,
      text: "And many, many youtube communities of vloggers and streamers. Youtube is probably the largest platform for Minecraft content. In 2014, ‘minecraft’ was the second most searched term in youtube, the first being ‘music’. In 2023, this fell down to 12th place, below ‘asmr’, ‘mr.beast’, skibidi toilet, etc. but above ‘taylor swift’, ‘andrew tate’, and ‘ukraine.’",
    },
    {
      imageURL: enchanting,
      caption: null,
      text: "A  huge part of “playing Minecraft” is the ‘metagaming’ of interacting with the online community, especially because it does nothing to orient players on how they should interact with the software. There is no tutorial. One has to rely on trial and error, assumptions carried from other video games, and searching for information online.",
    },
    {
      imageURL: crafting,
      caption: null,
      text: "The writer Robin Sloan calls Minecraft ‘a game about secret knowledge’, and ‘A generative, networked system laced throughout with secrets.” and describes the process of learning how to craft as working with ‘arcane runes’ and ‘secret recipes’ that need to be learned about outside the game.",
    },
    {
      imageURL: bridges,
      caption: null,
      text: "The Minecraft Wiki, YouTube guides, modding, etc., represent not only a community and a repository of knowledge but also alternative “readings” of the game software. Minecraft, like works of literature, has a much more expansive domain than is conventionally understood. Put more simply, we can take Derrida’s famous dictum that “there is nothing outside of the text” and say that there is no metagame. It's all part of the game.",
    },
    {
      imageURL: roofs,
      caption: null,
      text: "To extend that even further, what if I said that there is  no virtual, it’s all part of reality?  Or  that there is no artifice — it's all part of nature? Or, even more broadly, that there is no outside — it's all part of some interior?",
    },
    {
      imageURL: diagram1b,
      caption: null,
      text: "Interior Landscapes",
      title: true,
      multipy: true,
    },
    {
      imageURL: walden,
      caption: null,
      text: "This is a fan-made recreation of Henry David Thoreau’s cabin at Walden Pond.",
    },
    {
      imageURL: pond,
      caption: null,
      text: "Thoreau wrote in Walden that “the lake is the most beautiful and expressive feature of the landscape; it is the eye of the earth, and by looking into it we can measure the depth of our own heart”",
    },
    {
      imageURL: pond,
      caption: null,
      text: "Throughout the history of art and literature, landscape has always been a metaphor for inner life. Certainly, there is an argument to be made for a transcendentalist reading of Minecraft — however transcendentalists would have probably been quick to point out the difference between nature and its representations. ",
    },
    {
      imageURL: pond,
      caption: null,
      text: "Ralph Waldo Emerson writes in Nature about the connection between joy, reason, and time spent in nature, decrying everything else that comes in between. Emerson asks, “Why should not we also enjoy an original relation to the universe?” To which I might respond, what makes a relation with media not an original relation to the universe?",
    },
    {
      imageURL: mingPainting1,
      caption: null,
      text: "This is a Chinese landscape painting from the late-Ming era.",
    },
    {
      imageURL: mingPainting1,
      caption: null,
      text: "While all landscape paintings are meant to evoke emotion, landscape paintings from this era were not regarded as closed objects available to the viewer for mere aesthetic appreciation. Instead, they were thought to possess an interiority that afforded space for the human spirit to roam in.",
    },
    {
      imageURL: scholarRock,
      caption: null,
      text: "A similar dynamic might be said of Chinese scholar’s rocks,  somewhat in between sculptural representation and natural specimen proper, which were also meant to be contemplative objects—the mind wanders in and around the scholar’s rock’s intricate  nooks and crannies.",
    },
    {
      imageURL: scholarRock,
      caption: null,
      text: "Both mediums bridge an empirical distance separating the inner mind from the external world. This particular mode of perception has its roots in premodern Daoist thought, which suggest that human beings and landscapes are connected through a shared interiority, a realm of being where objective differences become less acute, where the self is no longer defined by social identity but through its symbolic equivalence with environment, world, and cosmos.",
    },
    {
      imageURL: scholarRock,
      caption: null,
      text: "In this view, the ontology of a landscape, whether it is painted or not, is equivalent to that of a human being, and vice versa; so much so that they are formulated in each other’s image, embodying each other’s image.",
    },
    {
      imageURL: fish,
      caption: null,
      text: "This sort of “as above, so below” relation also echoes western medieval worldviews, in which the microcosm and macrocosm is one of the main semantic axes. For example, in biblical mythology the human flesh of the first man appeared “from the soil, his blood from the dew and the sun, his eyes from the deep sea waters, bones from stones, his veins and hair from the grass”",
    },
    {
      imageURL: mingPainting2,
      caption: null,
      text: "There’s a certain teleology associated with the practice of viewing Chinese landscape paintings, which involves the merging of the beholder’s human body with that of a purported broader cosmic body, thereby also giving interiority to the physical world – including landscape. Access to this space, or, “entering the mountains,” allowed for a momentary yet reproducible experience of transcendence.",
    },
    {
      imageURL: redBook,
      caption: null,
      text: "This sounds a lot like Carl Jung’s ‘active imagination’, a technique he developed to explore his unconscious through dreams and visions, as extensively documented in Jung’s Red Book. ‘’Active Imagination’ is a process of consciously engaging with one unconscious and its manifold characters and symbols, entering a sort of ‘imaginal realm’, or ‘mundus imaginalis,’ as philosopher Henry Corbin calls it. There is an actual ‘place-ness’ at work here, and I’m speaking in a manner that’s a bit more real than metaphor.",
      multiply: true,
    },
    {
      imageURL: animaMundi,
      caption: null,
      text: "When you venture deep within yourself, you encounter the terrain of the collective unconscious, which permeates the world, the “anima mundi” or “world-soul” which makes itself accessible to all of us.",
    },
    {
      imageURL: mundusImaginalis,
      caption: null,
      text: "This is what Corbin means by ‘topographical inversion’: at some point when we delve so deep in our interiority, we find ourselves in some sort of 'outside place.'",
    },
    {
      imageURL: redBookMisc,
      caption: null,
      text: "There’s a distinction to be made between “imaginal” and “imaginary.”",
    },
    {
      imageURL: redBookMisc,
      caption: null,
      text: "“Imaginary” refers to consciously making stuff up",
    },
    {
      imageURL: redBookMisc,
      caption: null,
      text: "“Imaginal” has more to do with the word “image” rather than “imagination”, and refers to images that ‘comes through to us’ from the unconscious, like what happens during Jung's active imagination process, and in dreams, and in hypnagogic states.",
    },
    {
      imageURL: torus,
      caption: null,
      text: "Video game worlds are both ‘imaginary’ and ‘imaginal’. Various new media scholars have also made the analog between video games and dreams.",
    },
    {
      imageURL: collectiveUnconscious,
      caption: null,
      text: "One such scholar, Matthew Horrigan, writes that “dreams, digital games, and the imagination all involve imaginary worlds, with digital games intersubjectively distributing the practice of imagination by means of audiovisual signifiers and interaction patterns.” That sounds a lot like the collective unconscious to me. Beyond interactivity, what a video game promises is not just rendered image and sound, not just narrative, not even just the joy of play, but inhabitation of an imaginary and imaginal realm that is shared with others.",
      multiply: true,
    },
    {
      imageURL: sohravardi,
      caption: null,
      text: "Corbin traces the idea of the ‘imaginal realm’ to the ideas of Sohravardi, a notable 12th century Persian philosopher who describes a place that he calls “Na-Koja-Abad” literally ‘no-where-land’, a “realm of suspended images,”  that is not geographically locatable but is yet ontologically ‘real’.",
    },
    {
      imageURL: zoomedOutMulti,
      caption: null,
      text: "I’d like to posit Minecraft as a “no-where:” a place that one can’t actually physically enter, and yet exists nonetheless. a place that has very little history or myth built in, but in which the player creates lore just by inhabiting it. in a randomly generated landscape that is essentially homogeneous from a zoomed out view, in this place outside of ‘where’, it is up to the player to construct the ‘where’, to build and recognize landmarks and places with meaning to the player through exploration of the world.",
    },
    {
      imageURL: diagram1a,
      caption: null,
      text: "Magic Circles",
      title: true,
      multiply: true,
    },
    {
      imageURL: liminal,
      caption: null,
      text: "The construction of a ‘place outside of place’ segues very neatly into what Jung has written about “liminal space.” The concept of liminality was originally used in anthropology to refer to a transitory stage during a rite of passage, in which one has left one state of being  but has yet to reach the next. In psychotherapy, a liminal space is a space in which a transformation occurs. In that sense, Jung describes the therapist's office as a liminal space.",
    },
    {
      imageURL: magicCircle,
      caption: null,
      text: "Other psychologists note something similar. The psychologist Carl Rogers describes the 'out-of-this-world' quality of a therapeutic session, a sort of “trance-like feeling in the relationship that client and therapist emerge from at the end of the hour, as if from a deep well or tunnel.” Marion Milner describes it as “a temporal-spatial frame also marks off the special kind of reality of a psychoanalytic session.” Jung himself describes it as “a magic circle […] in which the transformation inherent in the patient’s condition would be allowed to take place.”",
    },
    {
      imageURL: gameMagicCircle,
      caption: null,
      text: "Game structures echo and amplify the languages of ritual space. The metaphor of a “magic circle” is also used by video game theorists to describe game-space, in which the normal rules and reality of the world are suspended and replaced by the artificial reality of a game world, separate from the typical routines of life, and occupying its own time and space.",
    },
    {
      imageURL: crush,
      caption: null,
      text: "If Minecraft is one of these liminal spaces, “a place outside of place, a time outside of time”, then what is the transformation that is being allowed to happen? What Minecraft enables is, of course, not specifically a therapeutic breakthrough, but something similar between the ego and the unconscious, in a space that allows for free enactment of creation and destruction— a server of one’s own, as Virgina Woolf might call it if she had played Minecraft.",
    },
    {
      imageURL: convo,
      caption: null,
      text: "Minecraft also transforms the space between players and other people, creating an environment in which friends feel more free to have deeper conversations, similar to the atmosphere of sitting with a friend around a campfire at night, or on a long train ride (another liminal space). ",
    },
    {
      imageURL: ex,
      caption: null,
      text: "Sociality in Minecraft becomes intrinsically linked to the terrain—which simultaneously becomes an artifact of being together. The Minecraft world becomes a preserved and revisitable record of time spent together with someone.",
    },
    {
      imageURL: lostWorldComment,
      caption: null,
      text: "This is why ‘losing one’s world’ is a huge point of grief.",
    },
    {
      imageURL: twoWeekPhase,
      caption: null,
      text: "Minecraft is the locus of so much nostalgia for people, that it’s crystalized in the trope of the ‘two week Minecraft phase’. The trope describes the phenomena of how people who grew up with the game occasionally get the urge to pick it back up, yet inevitably quickly abandon it again.",
    },
    {
      imageURL: twoWeekGif,
      caption: null,
      text: "Nostalgia pulls us back into the magic circle, but as many Jungians have noted, there are two mistakes one can make in regards to these spaces: we provide no ritual space at all in our lives […], or we stay in them too long. Perhaps the two-week phase of Minecraft represents a re-centering, a necessary but temporary enclave to step outside of daily life.",
    },
    {
      imageURL: diagram1c,
      caption: null,
      text: "Simulations of Nature",
      title: true,
      multiply: true
    },
    {
      imageURL: procedural,
      caption: null,
      text: "A defining characteristic of Minecraft is that its terrain is procedurally-generated based on a random seed, which is just a numeric string. There are 2^64 or ~18 quintillion possible seeds, meaning there are 18 quintillion possible unique worlds that Minecraft can generate.",
    },
    {
      imageURL: misc3,
      caption: null,
      text: "This is one of the main reasons why Minecraft has such staying power—The sheer amount of unique content provides a continuous sense of discovery and serendipity that random content creation provides.",
    },
    {
      imageURL: misc3,
      caption: null,
      text: "However, some critics suggest that the procedural generation is somewhat incidental, merely a “numbers game” providing only “technically” unique content that doesn’t actually offer that much novelty, and that it is the social aspect that actually sustains Minecraft as a platform.",
    },
    {
      imageURL: misc3,
      caption: null,
      text: "The answer probably lies in both. For example, part of the pleasure of playing with others in Minecraft is precisely in the “numbers game” of dividing up labor to find, harvest, and build more efficiently.  The randomness and procedural generation in Minecraft scaffolds both single and multiplayer experiences and in fact provide the drive for much of its social aspects.",
    },
    {
      imageURL: jungEgg,
      caption: null,
      text: "One of Jung's foundational precepts is about “holding the tension of the opposites”— learning how to make space for seemingly diametrically-opposed ideas or perspectives.",
    },
    {
      imageURL: farming,
      caption: null,
      text: "Minecraft holds a certain tension between its  systematic mathematical side, and its emotional creative side. Some players dive deep into the technical mechanics of the game, learning how to create the most yield-optimal crop and livestock  farms, for example. Others are more interested in role-playing detailed narratives.",
    },
    {
      imageURL: operas,
      caption: null,
      text: "Game designer Frank Lantz calls video games “operas made out of bridges,” combining the technical engineering complexity of constructing bridges with the artistic complexity of composing an opera.",
    },
    {
      imageURL: oulipo,
      caption: null,
      text: "In that sense, video games are reminiscent of Oulipo, that french literature movement from the 60s that championed constrained writing. Christian Bök writes that, for Oulipo, “to compose poetry is to undertake a mathematical analysis of language itself.” ",
    },
    {
      imageURL: americanFootball,
      caption: null,
      text: "Minecraft can be seen as a vocabulary and grammar that people use to create so many things that exist both within and without the game. For Oulipo, both the rules of a piece of constrained writing as well as the author’s choices act as co-authors for the text.  For Minecraft, the ‘game’ does not solely come from the procedural structure of the game, but also from the player’s activation of the software, which could be affected by any number of external circumstances, perspectives, and attitudes that the player may hold. ",
    },
    {
      imageURL: industrial,
      caption: null,
      text: "Simulations of nature are ways to imagine alternate relations with nature. Often, these computational simulations can easily be read as fantasies of capitalist frontier expansionism, enabled by the reduced material constraints of the digital. ",
    },
    {
      imageURL: misc2,
      caption: null,
      text: "But within Minecraft, player and game share “a subtle copresence.” The 'numbers game'  combines with ecological aesthetics, atmospheric music, and the player’s own choices, to create a digital ecology that points to both “the embeddedness of the human in an environmental system as well as their irrelevance to its mundane operations.” There are processes in Minecraft that go on without user interaction, but the user is also able to interact with every element in the game. In writing about games that strive to model ecological principles, media theorist Alenda Chang observes that one fundamental mistake video game designers make is that they relegate environments to the background. But everything in Minecraft is interactable — that's the whole point—the environment is entirely foregrounded.",
    },
    {
      imageURL: sheep,
      caption: null,
      text: "While colonial frontier archetypes are absolutely present in Minecraft, the game also offers many more options for alternative relations. The beauty of the game comes from the emptiness of its  terrains, dotted with only a few sentient creatures and no industrial communities. There is plenty of space, literally and figuratively, for coexisting with the natural world rather than conquering it.",
    },
    {
      imageURL: sheep,
      caption: null,
      text: "Some game mechanics seem to more explicitly suggest the value of stewardship. For example, killing a sheep yields 1 wool, but shearing it yields 3 wool and the sheep can grow more wool. Whether one sees the bountiful resources of each block as a gift or as something to take, is dependent on the player’s perspective.",
    },
    {
      imageURL: froebel1,
      caption: null,
      text: "This is another kind of block-based ‘Gift’. Friedrich Froebel,  often called the inventor of kindergarten, developed block-based toys called Fröbelgaben (literally “Froebel gifts”) that he claimed would illustrate the “spiritual connectedness of all things.” Children would start with simple blocks, build up to more complex patterns, then begin to see these patterns in the world around them, and see the connection between human life and life in nature.",
    },
    {
      imageURL: froebel2,
      caption: null,
      text: "Many modernist architects were exposed as children to Fröbel's ideas about geometry, including Frank Lloyd Wright, Le Corbusier, and Buckminster Fuller.",
    },
    {
      imageURL: froebel2,
      caption: null,
      text: "Wright cites the influence of Froebel block in his autobiography:",
    },
    {
      imageURL: froebel3,
      caption: null,
      text: "“For several years I sat at the little kindergarten table-top ruled by lines about four inches apart each way making four-inch squares; and, among other things, played upon these ‘unit-lines’ with the square (cube), the circle (sphere) and the triangle (tetrahedron or tripod)—these were smooth maple-wood blocks. All are in my fingers to this day.”",
    },
    {
      imageURL: froebel3,
      caption: null,
      text: "Wright later continues,",
    },
    {
      imageURL: fallingwater,
      caption: null,
      text: "“The virtue of all this lay in the awakening of the child-mind to rhythmic structures in Nature… I soon became susceptible to constructive patterns evolving in everything I saw.”",
    },
    {
      imageURL: fallingwater,
      caption: null,
      text: "If Wright played Minecraft, he would definitely be one of those people that start seeing everything IRL as made of blocks.",
    },
    {
      imageURL: woodenTools,
      caption: null,
      text: "It’s significant, also, that Froebel blocks are made of wood, because wooden toys have a long association with timelessness, quality, and craftsmanship, especially within Scandinavia (remember Mojang’s Swedish origins).  In Minecraft, wood is one of the first resources new players can gather, and allows them to build tools that can harvest other materials.",
    },
    {
      imageURL: dogs,
      caption: null,
      text: "For generations of kids who grew up with childhoods entangled in Minecraft worlds, how does that affect how they relate with nature? How does it affect how they relate with media? How do nature and media relate to each other?",
    },
    {
      imageURL: peters,
      caption: null,
      text: "Well, all media has to do with resisting entropy and mortality.",
    },
    {
      imageURL: peters,
      caption: null,
      text: "I always find myself returning to the writing of media theorist  John Durham Peters, who frames media as something ecological and existential:",
    },
    {
      imageURL: flowers,
      caption: null,
      text: "“Media show up wherever we humans face the unmanageable mortality of our material existence: the melancholy facts that memory cannot hold up and body cannot last, that time is, at base, the merciless and generous habitat for humans and things. Media lift us out of time by providing a symbolic world that can store and process data, in the widest sense of that word.”",
    },
    {
      imageURL: flowers,
      caption: null,
      text: "All media offers us a  magic circle,  'a space outside of space, and a time outside of time'",
    },
    {
      imageURL: flowers,
      caption: null,
      text: " I want to posit artifice as the most natural thing to human beings. The greatest gift of being human is that we have the ability to make media—artifacts of not just information, but also of play, art, emotion, profundity. It’s a gift that we are able to bring interiority ‘outward’ and imbue artifacts with meaning.",
    },
    {
      imageURL: flowers,
      caption: null,
      text: "This is something so fundamental that it almost isn’t worth talking about. As Peters puts it, “Culture is part of our natural history.” Which means that the Internet is a naturally occurring phenomena. Computation is a naturally occurring phenomena. Metaphor is a naturally occurring phenomena.",
    },
    {
      imageURL: diagram2,
      caption: null,
      text: "An Archetypal Analysis of Minecraft",
      title: true
    },
    {
      imageURL: diagram2,
      caption: null,
      text: "At this point we’ve explored the relationship between these three domains from a couple of different vantage points. For this last section, I want to offer a somewhat rudimentary archetypal analysis of Minecraft. In other words, what can Minecraft teach us about being human?",
    },
    {
      imageURL: null,
      caption: null,
      text: "Creation and Destruction",
    },
    {
      imageURL: tnt,
      caption: null,
      text: "Generally, Minecraft holds the tension of opposing desires to create and to destroy, as player conflicts lead to ‘griefing’ ( intentionally destroying other people’s creations), as new goals necessitate the destruction of old structures, as exploration demands the abandonment of old basecamps. Playing the game reflects the very rhythms of life: birth, death, and rebirth.",
    },
    {
      imageURL: null,
      caption: null,
      text: "Emptiness and Fecundity",
    },
    {
      imageURL: diamonds,
      caption: null,
      text: "Related to creation and destruction is the dual nature of emptiness and fecundity. Minecraft is often noted for its sense of emptiness conveyed through its vast wilderness landscape, yet all materials are overly generous (1 block yields 4 wooden planks yields 8 sticks), and every block is a potential resource in an infinitely malleable and fertile landscape.",
    },
    {
      imageURL: null,
      caption: null,
      text: "The Random Seed",
    }, 
    {
      imageURL: misc1,
      caption: null,
      text: "A world entails a cosmology (how and why the world is). In the beginning was the random seed, from which the universe was born of predetermined functions like Brownian motion and Perlin noise. It’s actually quite an apt metaphor for the fact that every individual’s psychic landscape is ‘unique’ but subject to the same underlying processes and structures.",
    },
    {
      imageURL: fogOfWar,
      caption: null,
      text: "The classical scholar Gilbert Murray sees religion as a sort of technology of uncertainty, a necessary method and a relation “towards the uncharted, mysterious, tracts of life which surround him on every side.” In a similar sense, games are the art form of uncertainty. Video games confront players with a very controlled type of uncertainty, and teach us something about the decidedly uncontrolled uncertainty in our lives.",
    },
    {
      imageURL: null,
      caption: null,
      text: "Punching a Tree",
    },
    {
      imageURL: treePunching,
      caption: null,
      text: "When you start out in Minecraft with nothing in your inventory, the first thing you’ll probably do is punch trees to gather your first wood blocks. “Punching trees” is trope embedded in the culture of the game, and is a sort of initiation ritual, a catalyst for all other possible actions in the game. Punching a tree is the only way to gather enough wood to create a crafting table, which allows the player to make all other tools and objects. On MinecraftForum.net, users have titles that evoke the stages of progression in a Minecraft game; newcomers who have only made a few posts are called “Tree Punchers.”",
    },
    {
      imageURL: null,
      caption: null,
      text: "Crafting and Alchemy",
    },
    {
      imageURL: recipes,
      caption: null,
      text: "Jung writes extensively about alchemy as a metaphor for internal transformation. Crafting within Minecraft essentially functions like alchemy—through specific recipes, players can turn  base materials into more valuable ones.",
    },
    {
      imageURL: sun,
      caption: null,
      text: "“Squaring the Circle”, a concept in alchemy that represents the transfiguration of the spiritual (the circle) into the physical (the square), takes on new meaning in Minecraft when one realizes that even the sun in the sky is a square.",
      multiply: true
    },
    {
      imageURL: null,
      caption: null,
      text: "Building a Base",
    },
    {
      imageURL: firstNight,
      caption: null,
      text: "The next activity you might do is build a base, since night will fall and hostile mobs will start to attack you. You need security and protection from darkness. The idea of building a base evokes childhood instincts towards pillow-forts and treehouses, which is possibly related to what video game theorist Christopher Goetz describes as two primary motivations for playing Minecraft: what he calls “tether” and “accretions” fantasies.",
    },
    {
      imageURL: cozy,
      caption: null,
      text: "A tether fantasy is “the pleasurable process of oscillating between feeling safe and feeling exposed, dwelling on the boundaries that separate the two,” while accretions are about the “pleasurable process of correcting a weak or vulnerable body by accruing objects from the world of gameplay”. In Minecraft, the home base is built out of accrued materials, and is known, mapped, and bounded by artificial walls or fences. Most importantly, it is well lit.",
    },
    {
      imageURL: artificialLight,
      caption: null,
      text: "Artificial light is actually an important signal of psychological safety. Goetz writes, … home base comes to rely on artificial, internal lighting like torches or a burning oven. If players are caught outside after sunset, they might spot torchlight through those same home-base windows as they scurry back to safety.",
    },
    {
      imageURL: null,
      caption: null,
      text: "Underground and Surface",
    },
    {
      imageURL: mining,
      caption: null,
      text: "Many materials need to be mined underground. The image of the underground is always archetypally linked to the unconscious. Following that, perhaps the ore you find represents the nuggets of insights that might be found down there, that have to be brought back to be integrated and put to use on the surface, all the while avoiding monsters, lava, and flooding. In contrast, the conscious surface is constantly changing and growing, and is extremely receptive—remove a couple of layers of dirt and grass will grow on top to form a new surface, as previously underground dirt is exposed to air.  And then there is the preconscious twilight and night, when the monsters from the unconscious slip up to the surface and terrify us.",
    },
    {
      imageURL: null,
      caption: null,
      text: "Herobrine and the Shadow",
    },
    {
      imageURL: herobrineSighting,
      caption: null,
      text: "Herobrine is a mythic figure within Minecraft lore. It originally appeared in a creepypasta on Minecraft Forum in 2010, in which the original poster describes being stalked by an entity that looks exactly like Steve (the default avatar of the player), except with glowing white eyes.",
    },
    {
      imageURL: herobrineIsometric,
      caption: null,
      text: "Despite the fact that Herobrine has never actually existed in the game (without mods), he has become a central figure in the Minecraft canon and has captured the imagination of millions. ",
    },
    {
      imageURL: herobrineSteve,
      caption: null,
      text: "Herobrine represents the archetype of the Shadow — all the things about ourselves that we try to repress, that don’t align with our ideal image of the self.  Herobrine allegedly has the power to create unnatural constructions and will stalk the player from afar. You cannot run from the shadow. The fact that Steve and Herobrine share the same appearance suggests a 'splitting' that might be resolved with the integration of the shadow.",
    },
    {
      imageURL: null,
      caption: null,
      text: "Three Realms",
    },
    {
      imageURL: netherPortal,
      caption: null,
      text: "The Overworld and the Nether seem to echo the structure of the surface vs. the underground. The Overworld is reactive and alive, but the Nether is empty and actually somewhat indifferent in character. Yes, there are many monsters lurking in the Nether, but it also has a sense of quietude and void. Players have to go through the Nether to gather the requisite materials (Ender Pearls) to craft further requisite materials (the Eyes of Ender) in order to gain access to The End. ",
    },
    {
      imageURL: slain,
      caption: null,
      text: "The End is where the hero archetype can most saliently be played out.",
    },
    {
      imageURL: dragonRedBook,
      caption: null,
      text: "It is here that the player must defeat the Enderdragon, the archetypal monster to be confronted in the heart of the underworld.",
    },
    {
      imageURL: killingEnderdragon,
      caption: null,
      text: "However, this is a somewhat arbitrary ‘ending’ that’s more meant to satisfy the desire for a concrete goal, a cheeky response to the question “how do you ‘win’ Minecraft?” The End is not actually the end—actually,  individuation turns out to be a constant process.",
    },
    {
      imageURL: egg,
      caption: null,
      text: "After the Enderdragon is slain, it drops an egg —a classic symbol of rebirth. Then, the player is presented with the End Poem, and sent back to the Overworld. From that point on, they can continue playing Minecraft as usual.",
    },
    {
      imageURL: null,
      caption: null,
      text: "The End is Not the End",
      showAudio: true
    },
    {
      imageURL: endPoemTattoo,
      caption: null,
      text: "I'm going to end with the End Poem.",
    },
    {
      imageURL: endPoemText2,
      caption: null,
      text: "The End Poem was written by Julian Gough, who was friends with Notch (the creator of Minecraft) at the time. The poem was technically not acquired by Microsoft back in 2014, and was made public domain by Gough in 2022.",
    },
    {
      imageURL: treeRedBook2,
      caption: null,
      text: "The conceit of the poem is that two god-like entities are speaking about the player—the real player, not Steve the avatar. They are aware that the player, who is now transcended into a higher plane after defeating the enderdragon, is reading the poem. They directly compare Minecraft to ‘a dream’—making a distinction between ‘the long dream of life,‘ and ‘the short dream of a game.’ To these two entities, words are an ‘interface,’ just like the interface of the game screen. In fact, they call ‘dreams’ the original interface. “A million years old, and it still works”",
    },
    {
      imageURL: endPoemText,
      caption: null,
      text: "The two beings make deeply archetypal references:",
    },
    {
      imageURL: endPoemText,
      caption: null,
      text: "“Who are we?",
    },
    {
      imageURL: mountain,
      caption: null,
      text: "Once we were called the spirit of the mountain.",
    },
    {
      imageURL: fatherSun,
      caption: null,
      text: "“Father sun,",
    },
    {
      imageURL: moon,
      caption: null,
      text: "mother moon.",
    },
    {
      imageURL: ancestors,
      caption: null,
      text: "Ancestral spirits,",
    },
    {
      imageURL: animalSpirit,
      caption: null,
      text: "animal spirits.",
    },
    {
      imageURL: jinn,
      caption: null,
      text: "Jinn.",
    },
    {
      imageURL: ghosts,
      caption: null,
      text: "Ghosts.",
    },
    {
      imageURL: greenman,
      caption: null,
      text: "The green man.",
    },
    {
      imageURL: gods,
      caption: null,
      text: "Then gods,",
    },
    {
      imageURL: demons,
      caption: null,
      text: "demons.",
    },
    {
      imageURL: angels,
      caption: null,
      text: "Angels.",
    },
    {
      imageURL: poltergeist,
      caption: null,
      text: "Poltergeists.”",
    },
    {
      imageURL: ufo,
      caption: null,
      text: "Aliens, extraterrestrials.",
    },
    {
      imageURL: lepton,
      caption: null,
      text: "Leptons, quarks.",
    },
    {
      imageURL: languages,
      caption: null,
      text: "The words change.",
    },
    {
      imageURL: endPoemText,
      caption: null,
      text: "We do not change.”",
    },
    {
      imageURL: endPoemText,
      caption: null,
      text: "“We are the universe. We are everything you think isn’t you. You are looking at us now, through your skin and your eyes. And why does the universe touch your skin, and throw light on you? To see you, player. To know you. And to be known. I shall tell you a story.”",
    },
    {
      imageURL: collectiveUnconscious,
      caption: null,
      text: "The two beings are embodiments of the universe, the anima mundi, the collective unconscious, speaking to the player in the form of distinct archetypal entities, essentially mirroring Jung’s own journey into mundus imaginalis. Minecraft is our individual and collective Red Book.",
    },
    {
      imageURL: treeOfLife,
      caption: null,
      text: "Overall, the poem has an ‘everything is everything’ kind of ethos that emphasizes the structural similarities of the microcosm and the macrocosm, of the game, the player, and the universe. The whole thing feels like a Terrence Malick movie. The two beings urge the player to see the interconnectedness of all things from atoms to forests to stories to stars, and to live life in meatspace just as voraciously as the player has lived in cubespace.",
    },
    {
      imageURL: wakeUp,
      caption: null,
      text: "At the end, it asks the player to wake up. But it's unclear if that means waking up to the Overworld, or waking up to our world.",
    },
    {
      imageURL: wakeUp,
      caption: null,
      text: "Gough says about the End Poem,",
    },
    {
      imageURL: treeRedBook1,
      caption: null,
      text: "“I love the strangeness that comes when people get so lost in a game that the game becomes the world. Because you do get lost like that. Especially in something like Minecraft, that's so endless. You're actually startled to come back into your life at the end of it. So I wanted to play with that moment, where you're between two worlds, and for a short little period you're not sure which one is more real.”",
    },
    {
      imageURL: treeOfLife2,
      caption: null,
      text: "In both the game and in life, we feel the vastness of that which exists outside of the contours of the self, and the vastness of that which exists inside.",
    },
    {
      imageURL: treeOfLife2,
      caption: null,
      text: "So. That was my very incomplete reading of Minecraft, one of the richest texts of the 21st century.",
    },
    {
      imageURL: sad,
      caption: null,
      text: "And now it’s time to wake up.",
    },
  ];

  $: currSlide = 0;

  const prevSlide = () => {
    currSlide = Math.max(currSlide - 1, 0);
  };

  const nextSlide = () => {
    currSlide = Math.min(currSlide + 1, slides.length - 1);
  };

  onMount(() => {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
      }
    });
  });
</script>

<div class="font-wyvern">
  {#if currSlide === 0}
    <!-- content here -->
    <div class="fixed top-0 left-0 m-4 text-secondary text-5xl blur-sm">
      {author}
    </div>
  {:else}
    <div class="fixed top-0 left-0 m-4 text-secondary text-3xl blur-sm">
      In<br />Defense<br />of the<br />Simulation<br />of<br />Nature
    </div>
  {/if}
  <Slide slide={slides[currSlide]} />
  <div class="fixed top-0 right-0 m-4 text-secondary text-5xl blur-sm">
    {currSlide + 1}
  </div>
  {#if currSlide > 0}
    <button
      on:click={prevSlide}
      class="fixed left-4 top-1/2 p-1.5 border-solid border border-secondary rounded-full hover:bg-tertiary hover:text-primary hover:border-tertiary hover:[box-shadow:_0_0_2px_#3f8a9a] hover:[text-shadow:_0_0_2px_#c9c9b6] [text-shadow:_0_0_2px_#6b672e] [box-shadow:_0_0_2px_#6b672e]"
    >
      <span class="relative -top-[1px]">
        {"<--"}
      </span>
    </button>
  {/if}
  {#if currSlide < slides.length}
    <button
      on:click={nextSlide}
      class="fixed right-4 top-1/2 p-1.5 border-solid border border-secondary rounded-full hover:bg-tertiary hover:text-primary hover:border-tertiary hover:[box-shadow:_0_0_2px_#3f8a9a] hover:[text-shadow:_0_0_2px_#c9c9b6] [text-shadow:_0_0_2px_#6b672e] [box-shadow:_0_0_2px_#6b672e]"
      ><span class="relative -top-[1px]">{"-->"}</span></button
    >
  {/if}
  <div class="{slides[currSlide].showAudio ? 'opacity-100' : 'opacity-0'} fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
    <audio controls>
      <source src={IntroMP3} type="audio/mpeg">
    </audio>
  </div>

</div>
