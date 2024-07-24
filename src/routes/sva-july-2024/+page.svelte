<script lang="ts">
	import Slide from './slide.svelte';
    import Img1 from '$lib/images/snow-to-rain/image1.png';
    import Img2 from '$lib/images/snow-to-rain/image2.png';
    import Img3 from '$lib/images/snow-to-rain/image3.png';
    import Img4 from '$lib/images/snow-to-rain/image4.png';
    import Img5 from '$lib/images/snow-to-rain/image5.png';
    import Img6 from '$lib/images/snow-to-rain/image6.png';
    import Img7 from '$lib/images/snow-to-rain/image7.png';
    import Img8 from '$lib/images/snow-to-rain/image8.png';
    import Img9 from '$lib/images/snow-to-rain/image9.png';
    import Img10 from '$lib/images/snow-to-rain/image10.png';
    import Img11 from '$lib/images/snow-to-rain/image11.png';
    import Img12 from '$lib/images/snow-to-rain/image12.jpg';
    import Img13 from '$lib/images/snow-to-rain/image13.png';
    import Img14 from '$lib/images/snow-to-rain/image14.png';
    import Img15 from '$lib/images/snow-to-rain/image15.png';
    import Img16 from '$lib/images/snow-to-rain/image16.png';
    import Img17 from '$lib/images/snow-to-rain/image17.jpg';
    import Img18 from '$lib/images/snow-to-rain/image18.png';
    import Img19 from '$lib/images/snow-to-rain/image19.png';
    import Img20 from '$lib/images/snow-to-rain/image20.png';
    import Img21 from '$lib/images/snow-to-rain/image21.png';
    import Img22 from '$lib/images/snow-to-rain/image22.png';
    import Img23 from '$lib/images/snow-to-rain/image23.png';
    import Img24 from '$lib/images/snow-to-rain/image24.png';
    import Img25 from '$lib/images/snow-to-rain/image25.png';
    import Img26 from '$lib/images/snow-to-rain/image26.png';
    import Img27 from '$lib/images/snow-to-rain/image27.png';
    import Img28 from '$lib/images/snow-to-rain/image28.jpg';
    import Img29 from '$lib/images/snow-to-rain/image29.jpg';
    import Img30 from '$lib/images/snow-to-rain/image30.jpeg';
    import Img31 from '$lib/images/snow-to-rain/image31.png';
    import Img32 from '$lib/images/snow-to-rain/image32.png';
    import Img33 from '$lib/images/snow-to-rain/image33.png';
    import Img34 from '$lib/images/snow-to-rain/image34.png';
    import Img35 from '$lib/images/snow-to-rain/image35.png';
    import Img36 from '$lib/images/snow-to-rain/image36.png';
    import Img37 from '$lib/images/snow-to-rain/image37.png';
    import Img38 from '$lib/images/snow-to-rain/image38.png';
    import Img39 from '$lib/images/snow-to-rain/image39.png';
    import Five from '$lib/images/snow-to-rain/five.png';
    import Four from '$lib/images/snow-to-rain/four.webp';
    import One from '$lib/images/snow-to-rain/one.webp';
    import Three from '$lib/images/snow-to-rain/three.png';

  import { onMount } from 'svelte';

    let title = "It Turned From Snow to Rain:"
    let subtitle = "Some Thoughts on Words, and Numbers"
    let author = "Tiger Dingsun"
    let intro = `Adapted from a talk originally given at Virginia Commonwealth University (VCU) in the spring of 2024, for a class called “Shimmer Around the Edges: Writing as Image-making” taught by Meg Miller.`

    let slides: any = [
        {
            imageURL: Img13,
            caption: null,
            text: `It Turned From Snow to Rain: Some Thoughts on Words and Numbers.`
        },
        {
            imageURL: Img8,
            caption: `A CT scan showing the difference in congestion in the left and right nasal cavities`,
            text: `The nasal cycle is the spontaneous and unconscious congestion/decongestion of the nasal cavities during the day, where congestion alternates from one side to the other approximately every two and a half hours, although this can vary widely from person to person. This mechanism actually has an olfactory utility to it. Our sense of smell occurs when the olfactory receptors in our nose can attach to small, airborne particles. However, some particles need either more or less time to be bound to receptors. By having two different levels of airflow in each nostril, we are able to detect a wider range of scents. Interpolating between what we detect in each nostril produces a more complex smell-sense in the brain, like stereoscopic vision or multi-channel audio — combining multiple inputs leads to more dimensionality.`
        },
        {
            imageURL: Img25,
            caption: `A Roblox skin recreating Junya Watanabe’s ‘Poem Shirt’ Collection from 2002.`,
            text: `I like this idea that combining varying levels of flow can lead to a greater range of information, and it maps very neatly onto another dichotomy I often think about between the ‘close read’ and the ‘shallow read.’ I’m thinking particularly of how academic ‘close reading’ is highly privileged, and thought to be the best way to extract and digest all of the information in a text. The ‘shallow read,’ exemplified by strategies like skimming/flipping through a book, scrolling through social media feeds, reading the back of someone’s T-shirt, etc., is ascribed almost no value. That sort of shallow textual information saturates our day, and maybe we look at the words more than we read them, but even that ‘looking’ produces some sort of affective response in us.`
        },
        {
            imageURL: Img12,
            caption: `Cover of BlipSoak01 by Tan Lin (2003)`,
            text:
                `This is precisely the kind of reading that the author and poet Tan Lin is interested in. Lin’s concept of ‘ambient literature’ describes text that functions like wallpaper, meant to be read through multiple glances over time. His work often explores the temporary ephemera that fills our daily interactions: emails, billboards, movie subtitles, advertisements, recipes etc. This is a quote in reference to his book BlipSoak01, where he says, “A lot of people think great works of literature should be memorized. I think poems and novels are most beautiful at the exact moment in which they are forgotten.” Another quote from the preface of BlipSoak01: “Of course, it goes without saying that poetry should not be difficult. It should be very very easy and deeply relaxing at the synaptic level, which is the level of looking. The most beautiful poem is a poem that is looked at one word and then one letter at a time”. That relation between looking at words vs reading them makes me think of the sort of texts used when proofing typefaces. Type designers use these to inspect the shape of words. It’s not about the meaning of the words, but meaning is produced nonetheless.`
        },
        {
            imageURL: Img18,
            caption: `The spectrum of attention between ambient literature and ergodic literature`,
            text: `The concept of ambient literature calls to mind what words do to us on an immediate sensory level. Even when we glance at words too quickly to fully read them, they still do something to us on the level of sound symbolism or phono-aesthetics — meaning the aesthetic qualities of the actual ‘sound’ or ‘look’ of words, beyond just their denotative meaning. The polar opposite of ambient literature is perhaps ergodic literature, which is defined as literature that requires non-trivial effort by the reader to traverse the text. Putting these two genres together highlights this spectrum of attention that all texts and mediums fall under. Another framing might be to think about how resistant vs how pliable a text is. How much does a text want to be read? How much effort does it take? How much agency does the reader have in the process? Letting the subtitles of a movie wash over you requires decidedly less activation than reading a choose-your-own-adventure book. But that isn’t to say that you couldn’t pore over every word of dialogue in the movie, or that you couldn’t skim the book just to pick up on the vibe. These are just different strategies to pull different things out of the text.`
        },
        {
            imageURL: Img11,
            caption: `Two screenshots from Doki Doki Literature Club (2017)`,
            text: `One genre that I find helpful to think of as ergodic literature is the visual novel, which is somewhere in between a game and a book. These screenshots are from the cult classic ‘Doki Doki Literature Club,’ which is a particularly significant entry into the genre because of the way that it requires even more effort from the reader than a typical visual novel. At the game’s climax, after the characters have already thoroughly destroyed the fourth wall, the game forces you to break the fifth wall between the story and the materiality of the medium used to tell the story.`
        },
        {
            imageURL: Img11,
            caption: `Two screenshots from Doki Doki Literature Club (2017)`,
            text: `In a moment of unorthodox ludonarrative, you have to minimize the game and go into its source file directory to find a character’s file and delete it. Only then does the game allow the reader to continue the story. Thinking about visual novels provides an opportunity to project the ‘ludic’ into the ‘narrative’ of other types of texts. In other words, what if we think of all texts as open-world gameplay? A narrative is merely a one trajectory through a world. The porosity of the ambient-ergodic spectrum reveals that all texts offer multiple trajectories through it. All reading is non-linear, despite the fact that words are often arranged from left to right and top to bottom, trapping our eyes in rote patterns and sequences. All texts can potentially function as both ambient literature and/or ergodic literature, depending on how much attention you decide to pay, and the obliqueness of your angle of approach.`
        },
        {
            imageURL: Img1,
            caption: `A curve that approximates a straight line by intersecting it an infinite number of times, but never fully straightens out. `,
            text:  `When I was a kid I remember encountering the word ‘poignant’ for the first time and having no idea what it meant. Various dictionary definitions offer some variation of ‘deeply affecting’ — but affecting how? sadness? But poignancy is not exactly sadness, right? As I grew older, I realized that at some point I had accumulated enough life experience to ‘get’ what poignancy feels like. And it truly is inarticulable on some level. ‘Deeply affecting’ is maybe as close as we can get. Language is asymptotic. It can approach certain feelings and senses with ever-increasing precision, but perhaps can never fully capture them.`
        },
        {
            imageURL: Img17,
            caption: `Two memes that exemplify the codification and trope-ification of poignancy. `,
            text: `There’s a certain tumblr-inflected style of online posting/writing/web-weaving that trades on yearning, nostalgia, and poignancy, through which certain, perhaps previously-inarticulable feelings become canonized through archetypal logic — or calcified into cliché through memetic logic, if you’re feeling pessimistic. This, I think, is the main function of poetry — to reveal the fact that the specific is actually generic, and vice versa.`
        },
        {
            imageURL: Img15,
            caption: `Two memes that exemplify the codification and trope-ification of poignancy. `,
            text: `Here’s my (very tumblr-coded) attempt at a definition: poignancy is when you are reminded of your own experiences of loss. Not just loss, but the acceptance and nostalgization of loss. Poignancy is about being a loser, and in particular about being good at losing. `
        },
        {
            imageURL: Img21,
            caption: `Fragrantica review of Age of Innocence by Toskovat’. Notes include bubble gum, cotton candy, strawberry, gasoline, rubber, metallic notes, rose, agarwood, vetiver, cedar, and cade oil. `,
            text: `I love reading music reviews and fragrance reviews. These are two genres of writing that are full of inarticulable feelings, overstuffed with adjectives and descriptive language. The authors of such reviews wield metaphor with wildness and un-restraint. At first it seems like the experience of sound and scent are mediums that wouldn’t be able to translate to writing. Afterall, you can’t actually hear the music or smell the fragrance from the reviews, but somehow it still works. My theory is that this is because language functions as the glue between senses. Sensory experiences often trigger deep affect and we often want to infect other people with what we feel, and so we transmit feeling by turning our senses into language. The above review claims that fragrance in question ‘smells like seeing.’ Perhaps that doesn’t tell you anything about the scent, but we try, always, anyways, with words. Even just by pointing at the gap that exists between the words and the feelings/senses that are trying to conveyed, is enough. Music and fragrances generates so much interesting writing because there is so much distance to cover.`
        },
        {
            imageURL: Img36,
            caption: `Youtube comments under Watering a Flower by Haruomi Hosono (1984)`,
            text: `Maybe that's also another function of poetry — pointing at that gap.`
        },
        {
            imageURL: Img16,
            caption: `Youtube comments under Watering a Flower by Haruomi Hosono (1984)`,
            text: `The particularities of how language relates to our senses are probably best described by Walter J. Ong, a philosopher whose primary focus was on the ways that the shift from oral culture to written culture fundamentally re-structured human consciousness. Here’s a quote by him from his book Orality and Literacy:`
        },
        {
            imageURL: Img22,
            caption: `Youtube comments under Watering a Flower by Haruomi Hosono (1984)`,
            text: `“Sight isolates, sound incorporates. Whereas sight situates the observer outside what he views, at a distance, sound pours into the hearer. […] A typical visual ideal is clarity and distinctness, a taking apart. The auditory ideal, by contrast, is harmony, a putting together.”`
        },
        {
            imageURL: Img32,
            caption: `Youtube comments under Watering a Flower by Haruomi Hosono (1984)`,
            text: `Ong argues that the introduction of writing changes the form of human consciousness form sensing the immediacy of the spoken word to the critical distance and systemization of words, which, through writing, can then be graphically displayed and ordered.`
        },
        {
            imageURL: Img9,
            caption: `Youtube comments under Watering a Flower by Haruomi Hosono (1984)`,
            text: `When trying to convey our more immersive senses (sound and scent) through writing, we chart a path through imagery that dissects that immersive cloud into graspable parts. I hope that doesn’t sound disparaging in any way. Rather, it is that concretization that becomes the playground where descriptive writing operates, where subjectivity can interpret objective sensory data. `
        },
        {
            imageURL: Img33,
            caption: `Youtube comments under Watering a Flower by Haruomi Hosono (1984)`,
            text: `I hope that doesn’t sound disparaging in any way. Rather, it is that concretization that becomes the playground where descriptive writing operates, where subjectivity can interpret objective sensory data. `
        },
        {
            imageURL: Img14,
            caption: `Fragrantica review for Womanity by Mugler`,
            text: `Lists are a deceptively simple organizing structure. A list doesn’t even have to be ordered. But the simple act of putting fragments together means that the reader constructs a world through a loose gestalt, drawing their own relations between the items in the list. Jack Goody is another media theorist and anthropologist who writes a lot about literacy and writing as a technology. According to Goody, A list entails the ability to arrange meaning differently through writing. It’s a deceptively simple statement that has deeper cognitive and epistemic implications. In ‘What’s in a List?’,  Goody writes, “…the presence of writing… alters not only the world out there but the psyche in here...” and later, “the graphic representation of speech … encourages reflection upon and the organization of information, quite apart from its mnemotechnic functions. it not only permits the reclassification of information by those who can write, and legitimizes the reformations of the world (cognitive processes) for those who cannot do so.” Once language becomes writing, and thus becomes graphic, we process the information differently. Not only does writing relocate the storage of language outside of the body, it also organizes and spatializes it in ways that can’t be done as easily to spoken language. In that sense, taxonomy is an emergent property of writing. It’s what happens when words become visual rather than sonic.`
        },
        {
            imageURL: Img24,
            caption: `Cover of Dictee by Theresa Hak Kyung Cha (1982)`,
            text: `Dictee by Theresa Hak Kyung Cha is one of the few books that I find myself returning to over and over again. A lot of it is about the Japanese occupation of Korea, by way of tracing a lineage between her, her mother, as well as historical figures like Joan of Arc and Yu Gwan-sun (a revolutionary martyr often described as the “Korean Joan of Arc''). More generally, the book touches on the materiality of language, the physical mechanisms of speech as a site of colonial reckoning, and the filmic quality of history.`
        },
        {
            imageURL: Img6,
            caption: `Pages from Dictee by Theresa Hak Kyung Cha (1982)`,
            text: `Throughout the book, Cha layers various cosmologies and taxonomies together. For example, the whole book is split into sections named after the nine muses of Greek mythology. Rather than restricting the writing in any way, the various structures in place added all of these thin layers of meaning to the text, accumulating like gauze.`
        },
        {
            imageURL: Img20,
            caption: `Pages from Dictee by Theresa Hak Kyung Cha (1982)`,
            text: `Reading Dictee for the first time made me realize that taxonomy doesn’t have to be a limiting thing. Often, even the word ‘taxonomy’ connotes epistemic control with a colonial flavor, because it’s assumed that when one hoists up one taxonomy or system of classification it negates all others. Instead, Cha is able to maneuver her way through various colliding cosmologies with great athleticism. She’s able to move freely between specific framings of the world in order to provincialize, rather than universalize, the way that information, and thus power, have historically been organized. `
        },
        {
            imageURL: Img5,
            caption: `The Periodic Table of Elements`,
            text: `I love this feeling of a world being divided into buckets. Again, it's not that dividing a world into buckets should feel confining, but there is a freedom in the fact that there’s an infinite number of different ways to divide the world into buckets. Any classification system is ultimately about the exceptions, not the rules. A classification system ideally provides useful anchors from which to triangulate other things, rather than staunch guidelines that need to be followed. For example, the periodic table of elements is so ensconced in universality, but it’s merely one taxonomic system out of many possible systems to classify physical matter in various ways (in this case by the number of protons they have). The elements form a basis from which you can describe any substance or molecule via combination. `
        },
        {
            imageURL: Img27,
            caption: `An orthogonal and a non-orthogonal basis can both act as coordinate systems in 2-D space.`,
            text: `Here, I mean basis in the linear algebra sense — a set of linearly independent vectors that can be used to describe any coordinate in a space. The minimum number of vectors needed to describe a basis is the same as the dimensions of the space, so we can think of a basis as the axes of a space, as well. Axes are conventionally but not necessarily orthogonal.`
        },
        {
            imageURL: Img23,
            caption: `An orthogonal and a non-orthogonal basis can both act as coordinate systems in 2-D space.`,
            text: `This is where the metaphor really kicks in for me, because, for example, while we often describe 2D space via orthogonal x-y coordinates, we can just as easily describe 2D space with any set of skewed coordinates. So in the periodic table of elements, if we consider each element as an ‘axis’, a chemical formula is like a ‘coordinate’ that describes a given molecule. Together, all of the elements/axes describe a system to classify the entirety of the possibilities of physical matter. It's a chemical framing of the universe. `
        },
        {
            imageURL: Img4,
            caption: `The 22 major arcana of the Rider-Waite tarot deck.`,
            text: `Tarot is like a periodic table of elements for the symbolic world, for psychic space. One common ‘critique’ of tarot goes something like this: “how can a limited set of 72 cards possibly describe the entirety of the intricacies and variations of not only the my own life, but also of the entirety of human experience?” But we can also see tarot as a model of the psyche as 72-dimensional space. Each card is a vector, which, through combination, metaphor, and association with each other, can describe any situation that you may find yourself in. The same thing applies to astrology. At first glance, astrology can feel like an extremely reductive way to categorize all of our individual, unique personalities into 12 buckets. But through this linear algebra metaphor, it describes this 12-dimensional personality space. Both tarot and astrology are incredibly rich in mythology, and symbolism. The Jungian idea of the collective unconsciousness seems like the key to pushing beyond the asymptotic nature of language, and pushing beyond how cloistered and siloed and inaccessible our interiority can feel sometimes (the stereotypically teenage sentiment of  ‘no one understand me’ thankfully turns out not to be true). Communication and mutual understanding feels like it works a lot better if we all have this shared pre-linguistic bank of archetypes, if we all have the same anchors from which hard-to-articulate feelings arise. `
        },
        {
            imageURL: Img28,
            caption: `Cover of The Marvelous Clouds by John Durham Peters (2015)`,
            text: `One more quote to chew on, from The Marvelous Clouds by media theorist John Durham Peters: “The universe is a text, a distorted text, that comes from afar — a classic hermeneutical situation. This conclusion should not be misread as an attempt to ‘reduce’ everything into textuality, … but should rather be seen as an intimation that the universe presents itself to us through the tropes, tools, and media we ourselves have forged as part of our becoming-human.” Structure, archetypes, and artifice are the most natural things to humans. It’s how we make sense of the world. Language, writing, and speech are behaviors that emerged just as naturally as rocks and trees and dirt. `
        },
        {
            imageURL: Img29,
            caption: "Albert Einstein, in Geometry and Experience (1921)",
            text: `Now I want to consider numbers with the same care and psychological detail that we’ve thus far considered words. Albert Einstein, in Geometry and Experience (1921), asks: “How can it be that mathematics, being after all a product of human thought which is independent of experience, is so admirably appropriate to the objects of reality?” In other words, were numbers invented or discovered?”`
        },
        {
            imageURL: Img2,
            caption: `Diagram of a physicist and a psychologist observing underlying structure, but from their respective exterior-facing and interior-facing viewpoints. From Number and Time by Marie-Louise von Franz (1974)`,
            text: `This is a diagram from Number and Time by Marie-Louise von Franz, who was a student of Carl Jung. in the book, she argues that number itself is one of the most fundamental archetypes, and holds the key to conceptually unifying the psyche with physics. In a sense, she answers Einstein’s question by saying that numbers were both invented and discovered by humans. We use number to organize the world. The first use of numbers were for accounting time and quantities — keeping track of lunar and solar cycles, and recording inventory and transactions. Additionally, numbers are loaded with symbolic archetypal meaning, and are present throughout world cosmologies and mythologies. There are lucky and unlucky numbers. There are three faces of Hecate, not two, not four; and there are eight trigrams, not seven or nine. (And for that matter, they’re trigrams, not bigrams or quadrigrams). Number is also an inherent property of matter. The number of protons and electrons present in an atom gives matter distinct material characteristics that are discrete, not continuous. There isn’t really a spectrum between hydrogen and helium. In the diagram, von Franz imagines a physicist and a psychologist both ‘plumbing the depths’ of their respective fields, both trying to figure out the underlying structure of the universe or the psyche, respectively. The physicist’s approach is external, and the psychologist’s approach is internal, but both inevitably encounter number as an organizing structure. Von Franz suggests that number is the key to what is labeled ‘C’ in the diagram, some kind of substrate or matrix that undergirds both matter and psyche. `
        },
        {
            imageURL: One,
            caption: `Egg`,
            text: `Numbers have qualities that are deeply embedded in our psyches. To enumerate them briefly: ‘1’ connotes wholeness and unity. ‘1’ is undifferentiated, monumental, and monolithic.`
        },
        {
            imageURL: Img19,
            caption: `Image from the Wikipedia article for “Mirror stage,” a concept in Lacanian psychoanalysis`,
            text: `‘2’ connotes duality, opposition, and cooperation. the first ‘2’ you encounter in your life is the distinction between the self and the other. ‘2’ is about finding the edges of the self.`
        },
        {
            imageURL: Three,
            caption: `'Secret third thing' meme format`,
            text: `‘3’ connotes a dynamism that suddenly breaks free of binaries. ‘2’ is a line but ‘3’ defines a space.`
        },
        {
            imageURL: Four,
            caption: `The 'Four Corners' is where Utah, New Mexico, Arizona, and Colorado meet`,
            text: `‘4’ connotes materiality and stability. There are four classical elements, four walls to a room, and four corners to a map. A ‘square’ is someone who rigidly follows the rules.`
        },
        {
            imageURL: Five,
            caption: `Quintessence`,
            text: `And my favorite number, ’5,’ transcends. It’s ineffable. It’s literally quintessence. A pentagram is arcane and magical. Shakesphere loved iambic pentameter, and pentatonic scales, in music, have a special harmonic quality and is present in the folk musics of many different cultures. There are 5 senses, and we have 5 fingers on each hand and 5 fingers on each foot.`
        },
        {
            imageURL: Img30,
            caption: `Diagrams of number-space synesthesia`,
            text: `In Number and Time, Von Franz writes, “Numbers, furthermore as archetypal structural constants of the collective unconscious, possess a dynamic, active aspect which is especially important to keep in mind. It is not what we can do with numbers but what they do to our consciousness that is essential”. We do things with numbers, and numbers do things to us.`
        },
        {
            imageURL: Img26,
            caption: `A diagram showing how Word2vec, a natural language processing technique, transforms words into mathematical vectors that can then be spatially mapped in a meaningful way. `,
            text: `So, what about words? We do things with words, but words also do things to us. Are words invented or discovered? Is there even a meaningful distinction between the two verbs? In looking at these representations of the latent space between words (in a machine learning / language model context), I get the feeling that words are just objects that have always existed in some sort of idea-space, irregardless of our experience of them. Reading and writing are just two different ways of interfacing with words. Maybe the practice of writing is less like invention, and more like sequencing and arrangement, like design, like making a playlist for your crush in hopes that some of your feelings will be communicated without having to say them outright. Maybe each word is just a small part of some greater whole that we can’t see. Here’s an image to close us out: Each word, a distinct and individual snowflake, falling gently to the surface of the earth, melting upon impact into one continuous ocean.`
        },
        {
            imageURL: Img13,
            caption: `A diagram showing how Word2vec, a natural language processing technique, transforms words into mathematical vectors that can then be spatially mapped in a meaningful way. `,
            text: `(thank you)`
        }
    ]

    let bibliography = [
        {
            title: 'BlipSoak01',
            author: 'Tan Lin',
        },
        {
            title: 'How to Proof a Typeface',
            author: 'Jonathan Hoefler',
        },
        {
            title: 'Doki Doki Literature Club',
            author: 'Team Salvato',
        },
        {
            title: 'Orality and Literacy',
            author: 'Walter J. Ong',
        },
        {
            title: 'What’s in a List?',
            author: 'Jack Goody',
        },
        {
            title: 'Dictee',
            author: 'Theresa Hak Kyung Cha',
        },
        {
            title: 'The Marvelous Clouds',
            author: 'John Durham Peters',
        },
        {
            title: 'Geometry and Experience',
            author: 'Albert Einstein',
        },
        {
            title: 'Number and Time',
            author: 'Marie-Louise von Franz',
        },
    ]


    $: currSlide = 0;
    $: currClause = 0;
    let count = 1;

    const turnParagraphToClauses = () => {
        slides.forEach((slide: any) => {
            slide.clauses = slide.text.split(".")
        })
    }

    turnParagraphToClauses();
    $: numClauses = slides[currSlide].clauses.length;

    const nextSlide = () => {
        if(currClause < numClauses - 1){
            currClause+=1;
            count++;
        } else {
            if(currSlide < slides.length - 1){
                count++;
                currSlide++;
                numClauses = slides[currSlide].clauses.length;
                currClause = 0;
            }
        }
    }

    const prevSlide = () => {
        if(currClause > 0){
            currClause--;
            count--;
        } else {
            if(currSlide > 0){
                currSlide--;
                count--;
                numClauses = slides[currSlide].clauses.length;
                currClause = numClauses - 1;
            }
        }
    }

    onMount(() => {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    prevSlide();
                    break;
                case "ArrowRight":
                    nextSlide();
                    break;
            }
        })
    })
</script>

<div>
    {#if currSlide===0}
         <!-- content here -->
         <div class="fixed top-0 left-0 m-4 text-secondary text-5xl blur-sm">{author}</div>

    {:else}
        <div class="fixed top-0 left-0 m-4 text-secondary text-5xl blur-sm">It<br>Turned<br>From<br>Snow<br>to<br>Rain</div>
    {/if}
    <Slide slide={slides[currSlide]} {currClause} last={currClause === numClauses - 1}></Slide>
    <div class="fixed top-0 right-0 m-4 text-secondary text-5xl blur-sm">{count}</div>
    {#if currSlide===slides.length-1}
        <div class="fixed top-0 left-0 w-full h-full p-4 pt-32 text-center text-secondary text-5xl blur-[1px] ">
            Bibligraphy
            <br><br>
            <ol class="list-decimal">
                {#each bibliography as item}
                <li>
                    <span>{item.title}</span>—<span>{item.author}</span>
                </li>
               
            {/each}
            </ol>
            
        </div>
    {/if}
    
</div>