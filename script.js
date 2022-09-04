
/*let markWeigths = 78
let markHeights = 1.69

let johnWeigths = 92
let johnHeigths = 1.95

//let weigths
//let heigths

function calcBMI(weigths , heigths)
{
    return  weigths / heigths ** 2
}

markBMI = calcBMI(markWeigths, markHeights)
johnBMI = calcBMI(johnWeigths, johnHeigths)
console.log(markBMI);
console.log(johnBMI);
*/
/*
const hasDriverLicence = false;

console.log(!hasDriverLicence)
*/
/*
 let dolphinsScore = [97,112,101];
 let koalasScore = [88,91,110];

 function AvgScore( score)
{
    for ( let i = 0; i < score.length; i++ )
    {
        return (score[0] + score[1] + score[2]) / score.length
    }
}

if(AvgScore(dolphinsScore) > AvgScore(koalasScore)  && AvgScore(dolphinsScore) >= 100 )
{
    console.log('Doplhins win');
}
else if(AvgScore(dolphinsScore) < AvgScore(koalasScore) && AvgScore(koalasScore) >= 100 )
{
    console.log('Koalas win');
}
else{
    console.log('it s draw');
}


console.log(AvgScore(dolphinsScore))
console.log(AvgScore(koalasScore))

 */
/*
let bill = 315

let tip = bill >= 50 && bill <= 300 ? console.log( bill * 15 / 100 + bill) : console.log( bill * 20 / 100 + bill)


 */
/*
let calcAverage = (a,b,c) =>  (a + b + c) / 3
console.log(calcAverage(44,23,71))
console.log(calcAverage(65,54,49))

function checkWinner(avgDolphins, avgKoalas){
  //  avgDolphins >= 2* avgKoalas ? console.log(`Dolhins win (${avgDolphins}) vs (${avgKoalas}) ` ) :  console.log(`Dolhins win (${avgKoalas} vs (${avgDolphins}) ` )
    if (avgDolphins >= 2* avgKoalas){
        console.log(`Dolhins win (${avgDolphins}) vs (${avgKoalas}) ` )

    }
    else if(avgKoalas >= 2* avgDolphins){
        console.log(`Dolhins win (${avgKoalas} vs (${avgDolphins}) ` )
    } else
    {
        {console.log(`no one wins`)}
    }
}
checkWinner(calcAverage(85,54,41), calcAverage(44,23,71))

 */
/*
function calcTip(bill)
{
    let tip = '';
    bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip =  bill * 0.2
    return tip;
}

let bills = new Array( 125,555,44 )
let tips = new Array (calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2]));
let total = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]]
console.log(total);
*/
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];


// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
}

*/
/*
let bills = [22,295,176,440,37,105,10,1100,86,52]
let tips = []
let totals = []

function calcTip(bill)
{
    let tip = '';
    bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip =  bill * 0.2
    return tip;
}

for(let i = 0; i < bills.length ; i++)
{
    //console.log(calcTip(bills[i]))
    tips.push(calcTip(bills[i]))
    totals.push(calcTip(bills[i]) + bills[i])
}
let sum = 0
function calcAverage(arr)
{
    for(let i = 0; i < arr.length ; i++)
    {

      sum =    sum + arr[i]
    }
    console.log(sum )
    return sum / arr.length
}

console.log(calcAverage(totals ))

*/

let checkButton = document.querySelector('.check-button');
let appliedNumber = document.querySelector('.number');
let diceNumber = Math.floor(Math.random() * 20);
let numberValue = document.querySelector('.correct-number');
let checkNumber = document.querySelector('.check-number')
let againButton = document.querySelector('.again-button');
let scoreElement = document.querySelector('.score');
let score = 20;
let highscore = document.querySelector('.highscore');

checkButton.addEventListener("click", getValue);
againButton.addEventListener('click', resetValue);
highscore = 0;

function resetValue()
{
    numberValue.innerHTML= ''
    checkNumber.innerHTML = '?'
    appliedNumber.value = '';
    document.querySelector('body').style = 'background-color: #222;'
    numberValue.innerHTML= 'Start Guessing !'
    diceNumber = Math.floor(Math.random() * 20);
    scoreElement.innerHTML = 'Score : 20'
    console.log(diceNumber);
}

function getValue()
{
    if( diceNumber < appliedNumber.value )
    {
        numberValue.innerHTML= 'Too high';
        score = score - 1;
        scoreElement.textContent = 'Score: ' + score;

    }
    else if(diceNumber > appliedNumber.value)
    {
        numberValue.innerHTML= 'Too low';
        score = score - 1;
        scoreElement.textContent = 'Score: ' + score;
    }
    else {
        numberValue.innerHTML= 'Correct Number'
        checkNumber.innerHTML = appliedNumber.value
        document.querySelector('body').style = 'background-color: green'
        document.querySelector('.highscore').innerHTML = 'Highscore :' + score
    }



    console.log(score);
    console.log(diceNumber);
}
























































