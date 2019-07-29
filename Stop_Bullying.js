
function Pos_aff() {
var plist =   ["Your strength is greater than any struggle!",
"I'm in awe of what you are capable of! ",
"You're Fearless!",
"You are getting stronger everyday, I just know it!",
"YOU can do this!",
"You were not made to give up! Keep going!",
"Say this to yourself every morning: '' I am who I want to be!''",
"NO ONE can make you feel inferior!",
"Hey! I've discovered that you are more fierce than anyone I know no matter what you think!",
"I know your worth! Don't let others stop you!",
"You inspire others!",
"Do not fear the fire... YOU are the fire!",
"YOU choose what YOU become!",
"You've decided that you are good enough for anything that come your way!",
"YOU ARE brave enough to climb any mountain!",
"Wink at your recent challenges! You've got this!",
"YOU have the power to change your story!",
"It's not their job to like you... It's yours!",
"1 Failure or many are but stepping stones to your destination...",
"ONLY YOU have the courage to say ''no''!",
"''When people hurt you over and over, think of them like sandpaper. They may scratch and hurt you a bit, but in the end, you end up polished and they end up useless.'' -Chris Colfer",
"''Insecure people only eclipse your sun because they're jealous of your daylight and tired of their dark, starless nights.'' -Shannon L. Alder",
"''Bullies don't like to fight, son. They like to win. Being afraid is normal. The only fight you really have to win is the one against the fear.'' -Kwame Alexander",
"''Getting bullied in school taught me how to be strong, getting judged taught me to be better, failure taught me to be resilient and being made fun of taught me humility.'' -Mehak Bhalla",
"''[...] you don't have to wait for someone to treat you bad repeatedly. All it takes is once, and if they get away with it that once, if they know they can treat you like that, then it sets the pattern for the future.'' -Jane Green",
"''Remember this: They hate you because you represent something they feel they don't have. It really isn't about you. It is about the hatred they have for themselves. So smile today because there is something you are doing right that has a lot of people thinking about you.'' -Shannon L. Alder",
"''Bullying is a horrible thing. It sticks with you forever. It poisons you. But only if you let it.'' -Heather Brewer",
"''Bullying builds character like nuclear waste creates superheroes. It's a rare occurrence and often does much more damage than endowment.'' -Zack W. Van",
"''A young outcast will often feel that there is something wrong with himself, but as he gets older, grows more confident in who he is, he will adapt, he will begin to feel that there is something wrong with everyone else.'' -Criss Jami",
"''Knowing what's right doesn't mean much unless you do what is right.'' -Theodore Roosevelt",
"''We explain when someone is cruel or acts like a bully, you do not stoop to their level. Our motto is when they go low, you go high.''' -Michelle Obama",
"''Things will get easier, people's minds will change, and you should be alive to see it.'' -Ellen DeGeneres",
"''Often the right path is the one that may be hardest for you to follow. But the hard path is also the one that will make you grow as a human being.'' -Karen Mueller Coombs",
"''It took strength to be quiet. It took strength to be kind. It took strength to let other people's cruelty bounce right off of you.'' -April Genevieve Tucholke",
"''Destiny... is a gift. Some go their entire lives, living existence as a quiet desperation. Never learning the truth that what feels as though a burden pushing down upon our shoulder, is actually, a sense of purpose that lifts us to greater heights. Never forget that fear is but the precursor to valor, and to strive and triumph in the face of fear is what it means to be a hero. Don't think. Become!'' -Guillermo Del Toro"];

//var x= plist.toString();
//document.getElementById("affirmations").innerHTML = x;

// var one_aff= [];
// var i;
// for (i < plist.length) {
//
//   one_aff+= plist[i];

// var i;
// var x = Math.floor((Math.random());
// if (var x = plist[i].length){
//   document.getElementById("affirmations").innerHTML = x;
// }
//
// const getpos = plist.find(fruit => fruit.name === 'apples');


var rand_aff= plist[Math.floor(Math.random()*plist.length)];
//document.body.innerHTML = rand_aff;
document.getElementById("affirmations").innerHTML = rand_aff;

}

function Reset() {
var reset= ["       "];
document.getElementById("affirmations").innerHTML= reset;


// function Neg_Det() {
// //var input = window.prompt("Input? ");
//alert("The amount of subjectivity is:" + input);
//alert("The amount of positivity is:" + input);
//document.write("The amount of subjectivity is:"+ input);
//document.write("The amount of positivity is:"+ input);
//return a*b;
//
// var input = prompt("Please enter your name", "Harry Potter");
//  if (input != null) {
//    document.getElementById("Input_Det").innerHTML = "Hello " + input + "! How are you today?";

}
