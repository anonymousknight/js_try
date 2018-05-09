
//console.log(x);

var act=0;
var score=[0,0];
var roundscore=0;
function random(){
  var x=Math.floor(Math.random()*6)+1;
  //var x =1;
    return x;
}
//console.log(random());

document.querySelector('#Roll').addEventListener('click',function(){var x=random();
    //var x=Math.floor(Math.random()*6)+1;
    if (x!==1)
    {
        
        var dice= document.querySelector('.dice');
        dice.style.display='block';
        dice.src='dice-'+x+'.png';  
        
        console.log(x);
        console.log(roundscore);
        console.log(roundscore+=x) ;    
        console.log(act);
        document.querySelector('.cur-'+act+'-number').textContent= roundscore; }
else {
    roundscore=0;
    document.querySelector('.cur-'+act+'-number').textContent= roundscore;
    act===0?act=1:act=0;
    var dice= document.querySelector('.dice');
        dice.style.display='block';
        dice.src='dice-'+x+'.png'; 
    
    console.log(x);
    console.log(act);
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
}})

document.querySelector('#hold').addEventListener('click',function(){
    //var x=Math.floor(Math.random()*6)+1;
//document.querySelector('#cur-score-number').textContent=random(); 
    //document.querySelector('.cur-'+act+'-number').textContent+=roundscore;
    document.querySelector('.cur-'+act+'-number').textContent= 0;
    score[act]+=roundscore;
    document.querySelector('.tot-score-'+act).textContent= score[act];
    if (score[act] >= 10)
        {
        document.querySelector('#player'+act).textContent="Winner!";
        document.querySelector('.Roll').style.display='block';
            document.querySelector('#player'+act).classList.add('winner');
        //document.querySelector('.hold').style.display='block';
    }
    else{
    act===0?act=1:act=0;
    roundscore=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.cur-'+act+'-number').textContent= roundscore;
    
}})

//document.querySelector('#cur-score-number').textContent= x;
//console.log(y);