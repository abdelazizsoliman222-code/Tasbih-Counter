let count = 0;
let highScore = 0;

let messages = [
"تذكر دائماً أن سلعة الله غالية، ألا إن سلعة الله الجنة",
"تفائل فما كان الله ليرد قلباً دعاه، بل يرزقه أفضل مما تمنى",
"كلما حفظت آية من كتاب الله، كلما نسجت خيطاً من لباس حلة الكرامة يوم القيامة",
"الطريق إلى الله يحتاج إلى صبر، والثبات هو سر الفوز بالجنة",
"خلف كل ضيق يأتي فرج الله، لا تحزن فالله معك",
"اعمل لدنياك كأنك تعيش أبداً، واعمل لآخرتك كأنك تموت غداً",
"من ترك شيئاً لله عوضه الله خيراً منه",
"اجعل نيتك صادقة لله، فالله يبارك في القليل فيصبح كثيراً",
"القرب من الله راحة لا يعرفها إلا من جربها",
"الدعاء قوة خفية تغير الأقدار بإذن الله",
"مع الصبر والتوكل يفتح الله أبواباً لم تكن في الحسبان",
"إذا ضاقت بك الدنيا فتذكر أن الله أقرب إليك من همك"
];

function addLap(){

count++;

document.getElementById("count").innerText = count;

let target = document.getElementById("target").value;

document.getElementById("progressBar").max = target;
document.getElementById("progressBar").value = count;

let percent = (count/target)*100;
document.getElementById("energy").value = percent;

if(count == target){

let randomIndex = Math.floor(Math.random() * messages.length);
document.getElementById("motivationLeft").innerText = messages[randomIndex];
document.getElementById("motivationLeftBox").style.display = "block";

if(count > highScore){
highScore = count;
document.getElementById("highScore").innerText = "High Score: " + highScore;
document.getElementById("motivationRight").innerText = "Congratulations! You broke your High Score!";
document.getElementById("motivationRightBox").style.display = "block";
} else {
document.getElementById("motivationRight").innerText = "";
document.getElementById("motivationRightBox").style.display = "none";
}

setTimeout(() => {
document.getElementById("motivationLeftBox").style.display = "none";
document.getElementById("motivationRightBox").style.display = "none";
}, 5000);

count = 0;
document.getElementById("count").innerText = count;
document.getElementById("progressBar").value = 0;
document.getElementById("energy").value = 0;

}
}