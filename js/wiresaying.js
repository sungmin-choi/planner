const saying_arr=[["내 스스로 확신한다면 나는 남의 확신을 구하지 않는다.","에드거 앨런 포"],
["나 자신에게 더욱 집중하라.언제나 나를 1순위에 두어라.다른 이의 삶에 한눈팔며 살기엔 내 인생이 너무 소중하다","<흔들리는 나에게 필요한 한마디> 中"],
["약한 사람은 결정을 내리기 전에 의심하고 강한 사람은 결정을 내린 후 의심한다.","카를 크라우스"],
["나를 죽이지 못하는 고통은 나를 더욱 강하게 만든다.","니체"],
["남들이 당신을 어떻게 생각할까 너무 걱정하지 말라.그들은 그렇게 당신에 대해 많이 생각하지 않는다.","엘리노어 루즈벨트"],
["우리는 다른 사람과 같아지기 위해 삶의 3/4을 빼앗기고 있다.","쇼펜하우어"],
["생각하는 대로 살지 않으면 사는 대로 생각하게 된다.","폴 발레리"],
["현실이 중요한 것이 아니라,당신이 그것을 어떻게 해석하고 무엇을 하느냐가 중요한 것이다.","웨인 다이어"],
["자신은 ‘할 수 없다’고 생각하는 동안 사실은 그것을 ‘하기 싫다’고 다짐하고 있는 것이다. 그러므로 실행되지 않는 것이다.","스피노자"],
["고개를 들어라. 각도가 곧 태도다","프랭크 시나트라"]
];
const span_saying=document.getElementById("wiseSaying_saying");
const span_author=document.getElementById("wiseSaying_author");
let random=Math.floor(Math.random()*saying_arr.length);
let saying=saying_arr[random][0];
let author=saying_arr[random][1];
span_saying.innerText=`"${saying}"`;
span_author.innerText=`-${author}`;

