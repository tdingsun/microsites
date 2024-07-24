<script lang="ts">
    import ExercisesKR from './ExercisesKR.svelte';
	import Blockquote from './Blockquote.svelte';
	import MobileCaption from './MobileCaption.svelte';
	import Paragraph from './Paragraph.svelte';
	import Subheader from './Subheader.svelte';
	import Link from './Link.svelte';

    import phylo from '$lib/images/title-img.png';
	import diagram1 from '$lib/images/diagram1.png';
	import diagram2 from '$lib/images/diagram2.png';
	import adnan from '$lib/images/adnan.gif';
	import chimera from '$lib/images/chimera.jpg';
	import composite from '$lib/images/composite.jpg';
	import fungus from '$lib/images/fungi.jpg';
	import quartz from '$lib/images/quartz.jpg';
	import digimon from '$lib/images/digimon.png';
	import maritain from '$lib/images/maritain.jpg';
	import hxh from '$lib/images/nen.jpeg';
	import thought from '$lib/images/thought.png';
    import vw from '$lib/images/vampire_weekend.jpg';
	import sakura from '$lib/images/sakura.jpg';
	import MobileImage from './MobileImage.svelte';
</script>

<div class="text-secondary tracking-[-0.1px]">
	<Paragraph class="text-tertiary font-bold">
        핵심 단어: 시학, 세계 구축, 구조, 신화, 내러티브, 모호성, 인식론적 불복, 비신화적 독서

	</Paragraph>
	
	<Subheader>소개</Subheader>
    <MobileImage src={phylo}></MobileImage>
	<MobileCaption>
        계통도를 위한 다양한 프레임워크 – 오른쪽에서 왼쪽으로 직사각형 레이아웃(A), 상향식 직사각형
		레이아웃(B), 하향식 직사각형 레이아웃(덴드로그램)(C), 회전식 직사각형 레이아웃(D), 상향식 경사
		레이아웃(E), 하향식 경사 레이아웃(클래다그램)(F), 원형 레이아웃(G), 원형 안쪽 레이아웃(H 및 I).
	</MobileCaption>
	<Paragraph>
        그래픽 디자이너를 작가, 건축가, 용병, 번역가, 큐레이터, 예술가 등 다른 직업에 비유하는 경향이
		있습니다. 이해합니다. 이 모든 역할은 가늘고 현대적인 느낌의 '그래픽 디자이너'보다 훨씬 더
		원형적으로 무게감 있게 느껴지니까요. 아마도 우리 분야 전체가 예술과 서비스 산업 사이에 갇혀
		있다는 느낌에서 오는 불안감 때문에 이러한 재구성과 변형에 관심이 있는 것 같습니다.
	</Paragraph>
	<Paragraph>
        하지만 사실 '그래픽 디자이너'라는 이름에는 큰 잠재력이 있습니다. 비유를 반대로 해보면 어떨까요?
		그래픽 디자이너로서의 작가, 그래픽 디자이너로서의 건축가, 그래픽 디자이너로서의 용병 등등.
		요약하자면, 그래픽 디자인은 시각적 요소의 배열에 불과합니다. 우리가 일반적으로 생각하는 그래픽
		디자인 작업의 한계를 뛰어넘을 만큼 광범위하게 느껴집니다. 특정한 원형을 구현하려 하는 대신, 우리
		분야의 얇고 유연한 특성에서 비롯되는 모호함을 활용하면 어떨까요?
	</Paragraph>

	<Paragraph>
        그래픽 디자인을 하나의 특정 틀에 끼워 맞추려고 하는 것은 별 소용이 없습니다. 오히려 저는 도구의
		무기고에 두 가지 새로운 원형을 도입하고 싶습니다: 1) 시인, 그리고 2) 세계을 만드는 사람.

	</Paragraph>

	<Paragraph>이 두가지 원형의 연관성을 설명해보겠습니다:</Paragraph>
    <MobileImage src={fungus}></MobileImage>
	<MobileCaption>
		기질/물질 관계에 대한 은유: 나무 줄기에서 자라는 곰팡이
	</MobileCaption>
	
	<Paragraph
		>세계 구축는 역사, 문화, 정치, 마술, 신화, 지식, 미학 등의 시스템을 구축하는 것이 포함되며
		내러티브가 펼쳐질 수 있는 바탕을 형성합니다. 여기서 유용한 문구는 '메타 저작업'과 같은 문구일 수
		있습니다. 더 유용한 문구는 '분위기 만들기'일 수도 있겠군요.
	</Paragraph>
    <MobileImage src={quartz}></MobileImage>
	<MobileCaption>
		기질/물질 관계에 대한 은유: 수지상 석영(및 일반적으로 결정): 광물 침전물이 석영 기질 내에서
		나무와 같은 구조로 자람.
	</MobileCaption>
	<Paragraph>
		시는 상호 연관된 상징으로 이루어진 시인 자신의 개인적 세계를 기반으로 하는 소재에서 시 자체 또는
		원하는 시의 단위를 만들어내는 것을 의미합니다. '더 큰 분위기를 담아내고 함축된 무언가를 창조하는
		것'. 시를 읽는다는 것은 어느 정도 불투명성을 수반하지만, 그럼에도 불구하고 시인의 내면 세계를
		느낄 수 있습니다.
	</Paragraph>

	<Paragraph>
		그래픽 디자이너도 이런 것들을 할 수 있을까요? 작가와 메타 작가가 동시에 될 수 있을까요? 제
		목표는 그래픽 디자이너가 자신의 작업을 세계를 구축하는 것으로 생각하고 그러한 노력에 있는
		잠재력과 시학을 고려할 수 있는 방법론을 소개하는 것입니다.
	</Paragraph>
	<Subheader>그래픽 디자인과 시학</Subheader>
    <MobileImage src={adnan}></MobileImage>
    <MobileCaption>에텔 아드난의 『아랍의 종말』에서 발췌한 글</MobileCaption>
	<Paragraph>
		그래픽 디자인은 종종 가독성을 위한 수단으로서 순수한 기능주의와 관련이 있습니다. 하지만 시적
		감각을 기르는 것은 작업 내에서 큰 잠재력을 발휘할 수 있습니다. 텍스트의 다양한 요소가 어떻게
		결합되어 독자에게 특정한 효과를 주는지를 정의하는 시학은 그래픽 디자이너가 이미 하고 있는 일과
		매우 유사합니다.
	</Paragraph>
	<Paragraph>
		시는 이미 정해진 체계(언어)에서 요소(단어)의 새로운 구성을 통해 새로운 의미를 만들어내는 것을
		추구합니다. 그래픽 디자인 역시 정보의 구성 및 표현과 관련이 있기 때문에 언어와 텍스트에 국한되지
		않고 이미지, 상징적 의미, 시각 문화 전반을 포함하는 다양한 요소의 새로운 구성을 통해 의미를
		만들어내는 것으로 볼 수 있습니다. 시는 다른 문학보다 단어의 지시적 의미뿐만 아니라 단어의 미적
		특성(음운, 소리 상징성, 운율, 미터 등)에서 비롯되는 의미에도 관심을 기울입니다. 타이포그래피를
		다룰 때 그래픽 디자이너들도 작업하는 텍스트의 지시적 의미와 미적 특성에 관심을 갖습니다. 둘 다
		구조와의 유희적인 관계를 가지며 때로는 형태를 유지하고 때로는 파괴하기도 합니다.
	</Paragraph>

	<Paragraph>
		그러나 그래픽 디자이너의 작품과 시인의 작품의 한 가지 차이점은 각 시를 통해 시인의 상징적
		세계(기호계)에 대한 통찰력을 얻을 수 있다는 점입니다. 각 시는 시인의 내면에 대한 신화를
		더함으로써 더 큰 작품에 대한 추가적인 맥락을 제공합니다. 반대로 그래픽 디자이너가 만드는 각각의
		포스터가 더 큰 세계나 이야기와 연관되는 경우는 그리 많지 않습니다. 종종 그래픽 디자이너의 내면은
		포스터의 '실제' 컨텐츠에 방해가 되지 않도록 의도적으로 가려져 있습니다.
	</Paragraph>

	<Paragraph>
		하지만 그래픽 디자이너가 세계 구축에 접근하는 것은 매우 가치 있는 일입니다. 세계 구축은
		내러티브가 비선형적으로 펼쳐질 수 있는 잠재력을 허용하기 때문입니다. 세계 구축은 텍스트(또는
		이미지, 또는 그래픽 디자인의 대상이 무엇이든)를 비논리적 읽기(정해진 목표 없이 읽기)로
		유도합니다. 다양한 의미의 층위를 위한 디자인은 자본의 원활한 흐름(경제적, 사회적 또는 기타)을
		위한 윤활유로서의 그래픽 디자인의 주요 기능에 대한 저항 지점을 제공하며, 이는 작품/세계에 대한
		단일한 총체적 해석에 의존합니다.
	</Paragraph>

	<Subheader>세계 구축을 위한 방법론</Subheader>
    <MobileImage src={maritain}></MobileImage>
    <MobileCaption>
        자크 마리탱의 &lt;예술과 시의 창조적 직관&gt;에서 발췌한 도표
	</MobileCaption>
	<Paragraph>다음은 시의 또 다른 프레임과 그 동기에 대한 설명입니다:</Paragraph>
	<Paragraph>
		시(poetry)의 목표는 독자가 시인의 내면에 적어도 부분적으로 접근할 수 있는 중간 지점인
		시(poem)라는 인공물을 만들어내는 것입니다. 독자가 함께 살도록 초대되는 세계. 중간 지대를 만들기
		위해 시인은 외부 기표(공통 원형, 공통 언어, 공통 문화적 참조)와 내부 기표(상징과 이미지,
		시인에게 특별히 의미 있는 관계)를 모두 조화시켜야 합니다. 시학은 이 모든 기표들 사이의 관계를
		발전시키는 데 있습니다.
	</Paragraph>
	
	<Paragraph>
		외부 기표만 포함된 시는 비개인적이고 너무 직설적이며 너무 쉽게 이해될 수 있고, 내부 기표만
		포함된 시는 너무 특정적이어서 독자가 이해할 수 없을 수도 있습니다. 시인은 독자에게 이미 익숙한
		기표와 보다 개인적인 서사, 이미지, 상징을 결합함으로써 독자들의 정신세계에서 번역할 수 없는
		부분으로 들어갈 수 있는 진입점을 만들어냅니다. 이것은 작가 이안 쳉이 '세계화'라고 부르는 것과
		관련이 있습니다. 쳉은 자신의 <Link href="https://worldto.live/">웹사이트에</Link> 이렇게 적었습니다,
	</Paragraph>
	<Blockquote>
		“세계화는 어둠을 헤쳐나가고, 불확실성 속에서도 주체성을 유지하며, 우리가 살고 창조할 수 있는
		다양한 세계를 감상하는 데 도움이 되는 매우 중요한 작업입니다. 예술, 게임, 제도, 종교 또는 삶
		자체를 창조하든 상관없습니다: 세상에 살고 세상에 사는 삶!”
	</Blockquote>

	<Paragraph>
		그는 또 다른 <Link
        href="https://www.ribbonfarm.com/2019/03/05/worlding-raga-2-what-is-a-world/">블로그 게시물에</Link
		> 다음과 같이 적었습니다:</Paragraph
	>
	<Blockquote>
		우리는 세계를 문이 있는 정원과 같다고 말할 수 있습니다. 세계에는 국경이 있습니다. 세계에는 법이
		있습니다. 세계에는 가치가 있습니다. 세계에는 역기능이 있습니다. 세계는 성장할 수 있습니다.
		세계에는 그 안에 사는 구성원이 있습니다. 세계는 구성원들에게 외부와 다르게 행동할 수 있는 권한을
		부여합니다. 세계는 종종 역기능의 재미를 통해 구성원들이 세계를 유지하도록 격려합니다. 세계는
		세계 안에서 특정 행동을 중요하고 의미 있는 것으로 여깁니다. 세계는 개혁과 혼란을 겪습니다.
		세계에는 신화적 인물이 있습니다. 세계는 자신에 대한 모든 가능한 이야기를 담는 그릇입니다. 세계는
		구성원, 사절, 상징, 가시적 유물, 미디어를 통해 자신에 대한 증거를 드러내지만, 세계는 항상 그
		이상의 무언가입니다.
	</Blockquote>
	<Paragraph>
		쳉의 세계관에 대한 설명은 제약과 가능성 사이의 상호 작용을 강조합니다. 의미 있는 제약을 통해
		무한한 가능성이 열립니다. 시인은 다양한 구조나 스스로 정한 논리를 사용하여 작품을 제약하지만,
		자신만의 독창적인 언어 사용을 활용하여 이러한 구조를 구축하거나 선택적으로 해체하기도 합니다.
		시인은 공유된 자료와 집단 지식의 (아마도 여러) 체계에 대한 언급과 자신의 개인적인 프레임워크를
		모두 제공함으로써 현실을 해석하는 서로 다른 공유된 프레임워크와 시인 자신의 개인적인 현실,
		독자가 반거주하고 시간이 지남에 따라 탐험할 수 있는 세계를 조합하여 새로운 세계를 창조합니다.
	</Paragraph>
    <MobileImage src={thought}></MobileImage>
	<MobileCaption>
		아리엘 바스케스 카란자의 에세이 '사회언어학자에게 언어란 무엇인가?'에 나오는 사고, 언어, 문화의
		관계 도표
	</MobileCaption>
	<Paragraph>
		이는 그래픽 디자이너에게 유용하게 쓰일 수 있는 방법론을 제시합니다. 그래픽 디자이너는 시인이
		현실을 해석하는 시적 프레임워크를 개발하는 것과 같은 방식으로 여러 외부 및 내부 의미 체계를
		조합하여 자신만의 시각 언어를 개발할 수 있습니다. 그래픽 디자이너는 이미 널리 공유되는 기존의
		의미 체계를 불러와 명확성을 기반으로 작업하는 데 능숙합니다. 그러나 그래픽 디자이너의 내적 논리
		및 의미 체계와 함께 위계, 규모, 정렬에 대한 기존의 논리를 강화함으로써 명확성이 또 다른 종류의
		모호한 느낌과 동시에 존재할 수도 있습니다.
	</Paragraph>
    <MobileImage src={chimera}></MobileImage>
	<MobileCaption>신화 속 키메라</MobileCaption>
	<Paragraph>
		저는 이 방법론을 '공상적 세계화(chimeric worlding)'라고 부르는데, 이는 그래픽 디자이너와 대중이
		작품을 통해 공존하는 세계가 다양한 다른 세계의 DNA를 조합한 것이며, 이러한 다양성으로 인해 더욱
		풍성해진다는 사실을 강조하기 위해서입니다. 저는 이 '키메릭(chimeric)'라는 단어를 생물학적
		의미뿐만 아니라 은유적인 의미에서도 선택했습니다:
	</Paragraph>
	<Blockquote>
		탈식민주의 이론가 월터 미뇰로가 말한 '공상적 세계화'의 방법론에 따르면, 우리 모두는 상징적인
		억압 시스템 아래에서 작동하기 때문에 인식론적 불복이 요구됩니다. 그래픽 디자이너로서 우리는 널리
		퍼져 있는 이러한 시스템을 조각조각 떼어내어 더 소외된 다른 지식과
	</Blockquote>
	<Paragraph>
		결합할 수 있는 능력을 가지고 있습니다. 저를 포함한 그래픽 디자이너의 특징 중 하나는 우리가 일상
		언어에 깊이 파고든다는 점입니다. 우리는 역사적인 미적 전통의 사물과 이미지 컬렉션뿐 만 아니라
		대중문화, 밈, 잊혀진 디지털 유물, 소비재 등 방대한 양의 아카이브를 샅샅이 훑어보는 것을
		좋아합니다. 우리는 '저급 문화'로 간주되어 '난해함', '팝', '민속' 등의 수식어가 붙었던 것들을
		기존의 역사적 디자인 사례와 동등한 중요성을 부여할 수 있습니다. '좋은' 또는 '올바른' 또는 '읽기
		쉬운' 디자인으로 간주되는 것의 대부분은 시각적 체계와 구조에 대한 자연화된 관습에서 비롯됩니다.
		'키메라적 세계화'라는 방법론의 일부에는 구조주의의 미학을 수용하는 동시에 그 고유의 자의성을
		인정할 수 있는 가능성이 포함됩니다. 일반적인 그래픽 디자인 방법론에서는 모든 요소가 자의적이지
		않은 이유로 거기에 있어야 한다고 주장하지만, 그래픽 디자인 결정의 이유가 가독성보다는 그래픽
		디자이너가 이미 구축한 더 큰 세계관과 더 관련이 있다면 어떨까요? 자의성은 사실 우리를
		해방시켜주며, 다양한 논리와 지식 체계를 쌓을 수 있게 해줍니다.
	</Paragraph>

	<Subheader>민속과 사변적 소설</Subheader>
    <MobileImage src={vw}></MobileImage>
    <MobileCaption>
		유대교 신비주의에서 재해석한 세피로스의 나무가 등장하는 뱀파이어 위켄드의 앨범 '신부의 아버지'의
		아트 디렉션
	</MobileCaption>
	<Paragraph>
		'공상적 세계관'은 디자이너가 작품의 우주론을 창조하도록 초대합니다. 여기에는 신성한 기하학,
		수비학, 신화와 관련이 있습니다. 우주와 그 안에 포함된 모든 것을 그래픽으로 구성하기 위해
		존재했던 근대 이전의 모든 프레임워크와 그 모든 것이 어떻게 작동하는지 생각해 봅시다. 원소
		주기율표와 불, 흙, 공기, 물이라는 기본적인 원소의 차이점을 생각해 봅시다. 두 세계관 모두 고유한
		연관성, 상징적 의미, 공간적 구성, 개념적 관계를 내포하고 있습니다. 이 두 가지 체계 중 하나만
		현대 과학의 정설로 남아 있지만, 둘 다 시인으로서의 디자이너와 세계구축가로서의 디자이너에게
		유용할 수 있는 개념적 관계를 제공합니다. 비교 신화를 연구하고, 다양한 미학적 틀의 역사와 문화를
		탐구하여 컨텐츠를 구성하고 자신만의 시각적 언어를 개발하는 데 영감을 얻을 수 있는 기회가
		있습니다.
	</Paragraph>
    <MobileImage src={hxh}></MobileImage>
	<MobileCaption>
		애니메이션 시리즈 '헌터 엑스 헌터'의 전력 시스템에 대한 설명으로, 시리즈 세계관에 매우
		구체적이지만 실제 역사적으로 '아우라' 또는 '기'라는 종교적 사상에 기반을 두고 있음.
	</MobileCaption>
	<Paragraph>
		공상과학과 판타지 작가들은 오래전부터 다양한 지식의 틀을 응용하여 새로운 세계를 만들어 왔습니다.
		'공상적 세계관'이라는 개념의 영향을 많이 받은 또 다른 장르는 마술적 사실주의입니다. 저는 특히
		마술적 사실주의가 독자에게 '현실적인' 세계를 제시했다가 혼란에 빠지게 함으로써 인식론적 불복을
		통해 작동하는 방식에 대해 생각합니다.
	</Paragraph>
    <MobileImage src={digimon}></MobileImage>

	<MobileCaption>
		중국 십이지신의 12가지 동물을 모티브로 한 12개의 디지몬. 7대 죄악을 모티브로 한 7개의 디지몬도
		있음.
	</MobileCaption>
	<Paragraph>
		말 그대로 가상 세계와 '현실 세계'의 관계는 가상의 세계관이 다양한 세계 신화, 민화, 종교(마블
		시네마틱 유니버스의 토르부터 트와일라잇 시리즈의 뱀파이어와 늑대인간까지)를 많이 참조하지만,
		이러한 세계관을 단조롭게 하고 더 가변적으로 만드는 방식에서 분명하게 드러납니다. 세속화된
		신비주의와 같아서 다소 불경스럽게 느껴질 수도 있지만, 동시에 의미의 재조합에 대한 문화의 열망은
		막을 수 없다고 생각합니다.
	</Paragraph>
    <MobileImage src={sakura}></MobileImage>

	<MobileCaption>
		타로 카드를 기반으로 한 카드 캡터 사쿠라의 클로우 카드, 그리고 분류법을 개발하기 위해 원형을
		사용하는 아이디어도 있음.
	</MobileCaption>
	<Paragraph>
		기존의 분류 체계는 무엇이든 재구성하여 세계 구축에 적용할 수 있는 가능성이 있습니다. 예를 들어,
		포켓몬스터, 나루토, 아바타: 라스트 에어벤더 등과 같은 원소 체계는 물질의 원자 구성에 대한 다양한
		이론(불, 물, 흙, 공기의 4대 원소, 동아시아의 오행 체계인 불, 물, 흙, 금속, 나무)에서
		유래했습니다. 디지몬의 분류 체계는 데이터, 바이러스, 백신 간의 관계에 대한 보다 최근의 기술적인
		관점에서 비롯되었습니다. 연금술에 대한 여러 역사적 문화적 정의를 바탕으로 마술 시스템을 구축한
		강철의 연금술사에서는 기독교 철학의 7대 죄악을 중심으로 적대자를 구성합니다. 그 외에도 타로
		카드(카드캡터 사쿠라, 페르소나 4, 신메가미 텐세이), 차크라(나루토), 다양한 음악 장르(트롤 월드
		투어), 미덕, 성격 특성 또는 감정의 분류(또 디지몬, 심지어 픽사의 영화 인사이드 아웃), 사회에
		대한 디스토피아적 상상 속 분업(헝거게임과 기타 수많은 YA 디스토피아 시리즈) 또는 정신, 신체,
		영혼 사이의 관계에 대한 다양한 이론(너무 많아 셀 수 없음) 등이 있습니다.
	</Paragraph>

	<Paragraph>
		작가가 세계관을 통해 세계를 확장하는 여러가지 방법이 있으며, <Link href="https://otherinter.net/research/lore/">세계관의</Link> 가장 큰 장점은 아직
		관객에게 명확하게 드러나지 않은 더 많은 세계관을 암시하고 추측할 수 있다는 점입니다. 이런 것이
		바로 팬덤의 원동력입니다. 그래픽 디자이너가 팬덤의 이론과 다양한 해석, 기발한 재해석을 이끌어낼
		수 있는 작품을 만들 수 있다면 어떨까요? 명확성과 소통이라는 단일 목표를 넘어 그래픽 디자인에
		대한 깊이 있는 참여를 의미할 것입니다.
	</Paragraph>
	<Subheader>그래픽 디자인의 한계를 확장하다</Subheader>
    <MobileImage src={diagram1}></MobileImage>

    <MobileCaption>
		두 개의 극단
	</MobileCaption>
	<Paragraph>
		그래픽 디자이너가 지배적 문화에서 통용되는 일련의 규칙과 레퍼런스에만 의존한다면, 가능한 한
		효율적으로 소비될 수 있는 것만 만들 수밖에 없습니다. 반대로 디자이너가 자신에게만 의미 있는
		개인적인 상징과 기표에만 의존한다면 다른 사람에게는 전혀 쓸모없는 작품이 될 것입니다. 그래픽
		디자인 분야는 대중을 대상으로 하며, 바로 여기에 강점이 있습니다. 그러나 대중은 개인으로 구성되어
		있다는 사실을 간과하기 쉬우며, 대중이 개별적으로 해석할 수 있는 진입점이 있는 것을 만드는 것은
		어려울 수 있습니다. 그래픽 디자이너가 작품이 작동하는 풍부하고 복합적인 내적 논리를 개발한다면,
		그 논리를 명시적으로 설명하지 않더라도 관객은 서서히 그 논리를 조합하여 창작된 세계의 이야기를
		발굴할 수 있을 것입니다. 시와 사변적 소설은 이미 이런 역할을 해왔습니다. 그래픽 디자이너도 할 수
		있습니다.
	</Paragraph>
    <MobileImage src={diagram2}></MobileImage>

	<MobileCaption>
        중간 지점 찾기
    	</MobileCaption>
	<Paragraph>
		이 방법론은 모든 구조를 버리고 기존의 서유럽 그래픽 디자인 교육과 감성을 모두 버리라고 말하는
		방법론이 아니라는 점을 분명히 말씀드리고 싶습니다. 대신 '공상적 세계화'는 그러한 교육을
		지방화하고, 새로운 혼합물의 일부로 적절히 재구성하고, 여러 가능한 도구 중 하나의 도구, 여러
		가능한 구조 중 하나의 구조로 고려하라는 방법론입니다. 이 방법론은 반구조적인 것이 아닙니다. 이
		방법론은 다양하고 모순적이며 모호하고 시적인 구조에 적극적으로 찬성합니다.
	</Paragraph>
    <MobileImage src={composite}></MobileImage>

	<MobileCaption>
        세계를 이어주는 은유로서의 복합 재료	</MobileCaption>
	<Paragraph>
		비유하자면, 이 방법론은 그리드를 만든 다음 궁극적으로 그리드를 깨뜨리라는 것이 아니라고 말할 수
		있습니다. 사실 저를 비롯한 대부분의 그래픽 디자이너는 그리드를 좋아합니다. 그래서 저는 그리드를
		파괴하는 대신 그리드를 나만의 것으로 만들고, 그리드의 미학을 나만의 것으로 주장하고, 그리드
		자체에 풍부한 함축적 의미와 나만의 논리를 불어넣고자 합니다. 그리드의 '공상적 세계화' 버전은
		공간적이면서도 상징적입니다. 그리드는 그 위에 놓인 텍스트와 이미지에 스스로를 결합하고, 그
		주위를 감싸며, 세계의 뼈대가 됩니다. 그리고 대중이 반드시 모든 것을 이해할 필요는 없습니다.
		그래픽 디자인은 예술일까요? 도구일까요? 둘 다 아닌가요? 둘 다 그리고 그 이상? 그래픽 디자인에서
		이 역설을 해결할 필요는 없습니다. 명확성과 시적 모호함, 해석의 자유로움이 공존할 수 있으니까요.
		가독성과 난독성은 공존할 수 있습니다. 모호한 구조(또는 구조적 모호성?)는 대중에게 여기에 세계가
		있고, 그 세계가 참여할 가치가 있다는 것을 알립니다. 처음에는 얼핏만 볼 수 있더라도 분명 밝혀내야
		할 숨은 심층이 있음을 알 것입니다.
	</Paragraph>
	<hr class=" border-tertiary border-dashed mb-4" />

	<Subheader class="text-tertiary">Further Reading</Subheader>
	<Paragraph>
		<div class="text-tertiary pl-6">
			<ol class="list-decimal">
				<li>
					<Link href="https://www.tinymixtapes.com/features/2018-against-worldbuilding">
						Against Worldbuilding
					</Link>
					— <i>Nick James Scavo</i>
				</li>
				<li>
					<Link href="http://journal.finfar.org/articles/notes-toward-a-critical-approach-to-worlds-and-world-building/">
						Notes Toward a Critical Approach to Worlds and World-Building 
					</Link>
					– <i>Stefan Ekman and Audrey Isabel Taylor</i>
				</li>
				<li>
					<Link href="https://www.ribbonfarm.com/2019/03/05/worlding-raga-2-what-is-a-world/">
						What is a World?
					</Link>
					 – <i>Ian Cheng</i>
				</li>
				<li>
					<Link href="https://en.wikipedia.org/wiki/Man_and_His_Symbols">
						Man and His Symbols
					</Link>
					 – <i>Carl Jung</i>
				</li>
				<li>
					<Link href="https://www.reddit.com/r/worldbuilding/comments/7ujp96/an_analysis_of_hunter_x_hunters_magic_system_and/">
						An Analysis of Hunter x Hunter's Magic System
					</Link>
					 – <i>u/ComradePruski</i></li>
					 
				<li>
					<Link href="https://store.other-people.net/merch/82219-nicolas-jaar-jena-myung-and-maziyar-pahlevan-network-book">
					Network
					</Link>
					 – <i>Nicolas Jaar, Jena Myung, and Maziyar Pahlevan</i>
				</li>
				<li>
					<Link href="https://en.wikipedia.org/wiki/The_Practice_of_Everyday_Life">
						The Practice of Everyday Life
					</Link>
					– <i>Michel de Certeau</i>
				</li>
				
				<li>
					<Link href="https://en.wikipedia.org/wiki/Dictee">
						Dictee
					</Link>
					– <i>Theresa Hak Kyung Cha</i>
				</li>
				<li>
					<Link href="https://jacket2.org/article/etel-adnans-arab-apocalypse">
						The Arab Apocalypse
					</Link>
					– <i>Etel Adnan</i>
				</li>
				<li>
					<Link href="http://www.complete-review.com/reviews/oulipo/fortef.htm">
						Minuet-Operas
					</Link>
					– <i>Frédéric Forte</i>
				</li>
			</ol>
		</div>
	</Paragraph>
	<hr class=" border-tertiary border-dashed mb-4" />
	<ExercisesKR />
</div>
