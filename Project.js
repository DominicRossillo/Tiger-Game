//JS For Project


function startgame() {
  document.getElementById('StartScreen').style.display='none';
  document.getElementById('CharCreationScreen').style.display='block';
}

function charcreation() {
document.getElementById("CharCreationScreen").style.display="block";
}
//gender info
gender=0
function maletiger() {
gender=1

}

function femaletiger() {
gender=2

}
///////////////////////////





//function that finds out the users inputs 
function SubmitChar(){ 
	document.getElementById("namebox").value ;

	if (gender===0) {
		alert("You forgot to chose a gender");
	}
	
	if (document.getElementById("namebox").value ==='') {
		alert("You forgot to make a name");
	}

	if (gender === 1) {
 		document.getElementById('tigerimg').src="http://1.bp.blogspot.com/_BroVDKdNXzE/TAtEjIPXL6I/AAAAAAAAAFM/5NA7f_F2XFY/s1600/sumatran_tiger_male_02tfk.jpg";
 		document.getElementById('yourtiger').innerHTML="Your tiger is a male named " + document.getElementById("namebox").value;
	} else if (gender === 2) {
		 document.getElementById('tigerimg').src="http://imgc.allpostersimages.com/images/P-473-488-90/61/6171/4YPG100Z/posters/theo-allofs-young-female-tiger-lying-on-rock.jpg"
     document.getElementById('yourtiger').innerHTML="Your tiger is a female named " + document.getElementById("namebox").value;
 	}
 	
  if (gender>0 && document.getElementById("namebox").value !=='') {
		document.getElementById("CharCreationScreen").style.display='none';
		document.getElementById("YourTiger").style.display='block';
  }
}
//function that gets rid of your character bio page and starts the story page
function storytime() {
  document.getElementById("YourTiger").style.display='none';
  document.getElementById("storypage").style.display='block';
  document.getElementById("storytitle").style.display='block';
  document.getElementById("page0").style.display='block';
}


//function that tells the stroy by togeling dialog pages
function nextPage(curr) {
      var next, currPage, nextPage;

      next = curr + 1;
      currPage = document.getElementById('page' + curr);
      nextPage = document.getElementById('page' + next);
      
      currPage.style.display = 'none';
      nextPage.style.display = 'block';
    }
function adventurestart() {
   document.getElementById('jungle').style.display='block';  
      document.getElementById('storypage').style.display='none';  
}





//function to make the jungle page start to show questions
function junglequestion() {
document.getElementById('jungleanswerbox').style.display='block';
document.getElementById('jungletitle').innerHTML='Answer The Question'
document.getElementById('junglequestionbutton').style.display='none'
document.getElementById('jungleanswerbutton').style.display='block';
if (gender ===1){
  getMathQuestion();
}
else if (gender ===2){
  getGeoQuestion();
}
}

//array with all the math questions
var mathQuestions = [ 
    'Camien wants to ride the Ferris wheel, the roller coaster, and the  log ride. The Ferris wheel costs 5 tickets, the roller coaster costs 7 tickets and the log ride costs 1 ticket. Camien has 5 tickets. How many more tickets should Camien buy?',
    'Ronnie is in the orchestra. Johnelle is in the band. There are 39 students in the orchestra and twice that number in the band. There are 23 boys and 13 girls in the choir. If each student only participates in one group, how many students total are there in the orchestra, the band, and the choir?',
    'Nyasia always takes the same route when she walks her dog. First, she walks 7 blocks to the park. Then she walks 9 blocks to the elementary school. Finally, she walks 12 blocks to get back home. Nyasia walks her dog 2 times each day. How many blocks does Nyasia\'s dog walk each day?',
    'For soccer season, Kavazia wants to buy a new soccer ball, a pair of shorts, and a pair of soccer shoes. The ball costs $9.60, the shorts cost $11.40, and the shoes cost $9.35. Kavazia has $8.90. How much more money does kavazia need?',
    'Logan made 4 stacks of wooden blocks. The first stack was 6 blocks tall. The second stack was 2 blocks taller than the first. The third stack was 2 blocks shorter than the second stack, and the last stack was 10 blocks taller than the third stack. How many blocks did Logan use in all?',
    'Julian bought 9 packages of cat food and 5 packages of fog food. Each package of cat food contained 5 cans, and each package of dog food contained 4 cans. How many more cans of cat food than dog food did Julian buy?',
    'Anthony saved $42 in June, $17 in July, and $36 in August. Then Anthony spent $17 on school supplies and $57 on new clothes. How much money does Anthony have left?',
    'There are 17 bicylces and 23 cars in the garage at Kobe\'s apartment. How many wheels are there in the garage?',
    'Donavan had 18 stickers. He bought 20 stickers from a store in the mall and got 18 stickers for his birthday. Then Donovan gave 3 of his stickers to his friend Tiger and used 3 to decorate a greeting card. How many stickers does Donovan have left?',
    'Deziyah walked 2 blocks from her house to the bus stop. She rode the bus 7 blocks to the library. Later, she came home the same way. How many blocks did Deziyah travel in all?',
    'Kiana needs 76 paper plates for a birthday party. She already has 35 blue plates and 10 red plates. How many more plates should Kiana buy?',
    'Armani saved up $39. The he got $11 for his allowance. Armani spent $7 on a pair of gloves, $6 on a winter hat, and $5 on a scarf. How much money does Armani have left?',
    'Johnelle had 100 dolpin stickers. She gave 2 stickers each to 10 friends. How many stickers does Johnelle have left?',
    'Brandon wants to buy a jump rope that costs $5, a board game that costs $10, and a playground ball that costs $3. He saved $2 from his allowance, and his uncle gave him $1. How much more money does Brandon need to buya jump rope, the game, and the ball?',
    'Derrick needs 55 cupcakes for a birthday party. He already has 18 chocolate cupcakes and 35 vanilla cupcakes. How many more cupcakes should Derrick buy?',
];

//array with math answers, in order
mathAnswers = [
    '8',
    '153',
    '56',
    '21.45',
    '36',
    '25',
    '21',
    '126',
    '50',
    '18',
    '31',
    '32',
    '80',
    '15',
    '2',
];

//array with geography questions
geoQuestions= [
    'What is the capital of NY?',
    'What country is north of USA?',
    'What country is south of USA?',
    'Which state is Los Angeles in?',
    'Which state is Denver in?',
    'Miami is in which state?',
    'Rome is in which country?',
    'The Eifel Tower is in which country?',
    'The Coliseum is in which Italian city?',
    'Which state is an island?',
    'What state is Philadelphia in?',
    'Is Minnesota in the north or south?',
    'Chicago is in which state?',
    'Detroit is in which state?',
    'Cleveland is in which state?' 
];

//array of geography answers, in order 
geoAnswers = [
    'Albany',
    'Canada',
    'Mexico',
    'California',
    'Colorado',
    'Florida',
    'Italy',
    'France',
    'Rome',
    'Hawaii',
    'Pennsylvania',
    'North',
    'Illinois',
    'Michigan',
    'Ohio'
];



//function that calls the math question and gets rid of the one called so it is not called again 
function getMathQuestion()
{questionnum=(Math.floor(Math.random() * mathQuestions.length))
  rand=mathQuestions[questionnum];
// mathQuestions.splice(rand,1)
  return document.getElementById('jungletextbox').innerHTML= rand;
   alert(rand)
};

//function that calls the geography question and gets rid of the one called so it is not called again 
function getGeoQuestion()
{ questionnum=(Math.floor(Math.random() * geoQuestions.length))
  rand=geoQuestions[questionnum];
// geoQuestions.splice(rand,1)
  return document.getElementById('jungletextbox').innerHTML= rand;
};



// }


//varriable that controls how many question you have right
var correct=0;
var wrong = 0;
//function that checks 

function submitanswer() {
    if (gender === 1) {

      // alert(questionnum)
      var submitted_answer = document.getElementById('jungleanswerbox').value.toUpperCase();
      var correct_answer = mathAnswers[questionnum].toUpperCase();

    if (submitted_answer === correct_answer) 
      {
        if(correct < 10){alert("You're Right");
    document.getElementById('junglequestionbutton').style.display='block';
    document.getElementById('jungleanswerbutton').style.display='none';
    document.getElementById('jungleanswerbox').style.display='none';
    document.getElementById('jungleanswerbox').value='';
    document.getElementById('jungletitle').innerHTML='Great Job'
    document.getElementById('jungletextbox').innerHTML= 'Click the button for a new question'
    correct= correct+1
    }

      if(correct===5)
      {

        alert('You go to the river to find more food')

      }
      if(correct>4){

        document.getElementById('junglepic').src="http://www.allabouthappylife.com/wallpaper/island_scenery/tropical_island_vegetation-dsc01702.jpg";
      }
        if(correct===10){
          document.getElementById('jungle').style.display='none';
          document.getElementById('win').style.display='block';
        }

    }
     else
    { alert('Sorry Wrong answer');

      wrong = wrong + 1;

      if (wrong > 2) {
        document.getElementById('jungle').style.display='none';
        document.getElementById('lose').style.display='block';

      }
        document.getElementById('jungleanswerbox').value=''
    }

    mathQuestions.splice(questionnum,1);
    mathAnswers.splice(questionnum, 1);

    junglequestion();


  } 

  else if (gender === 2) {

        // alert(questionnum)
    var submitted_answer = document.getElementById('jungleanswerbox').value.toUpperCase();
    var correct_answer = geoAnswers[questionnum].toUpperCase();
     
  if (submitted_answer === correct_answer) 
    {
      if(correct < 10){alert("You're Right");
  document.getElementById('junglequestionbutton').style.display='block';
  document.getElementById('jungleanswerbutton').style.display='none';
  document.getElementById('jungleanswerbox').style.display='none';
  document.getElementById('jungleanswerbox').value='';
  document.getElementById('jungletitle').innerHTML='Great Job'
  document.getElementById('jungletextbox').innerHTML= 'Click the button for a new question'
  correct= correct+1
}
       if(correct===5)
      {

        alert('You go to the river to find more food')

      }
      if(correct>4){

        document.getElementById('junglepic').src="http://www.allabouthappylife.com/wallpaper/island_scenery/tropical_island_vegetation-dsc01702.jpg";
      }
        if(correct===10){
          document.getElementById('jungle').style.display='none';
          document.getElementById('win').style.display='block';
        }

  }
   else{ alert('Sorry Wrong answer');
          wrong = wrong + 1;

      if (wrong > 2) {
        document.getElementById('jungle').style.display='none';
        document.getElementById('lose').style.display='block';
      }
      document.getElementById('jungleanswerbox').value=''
  }

    geoQuestions.splice(questionnum,1);
    geoAnswers.splice(questionnum,1);

    junglequestion();
  }


function helppage() {
href="helppage.html"

  }
}
