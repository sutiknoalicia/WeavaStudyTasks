var number = 5;
var string = "Hello There!";
var isRad = true;
var groceries = ['Milk','Eggs','Cheese']

if(number == 10){
    console.log('Yeah!')
} else{
    console.log('Nope!')
}

function listGroceries(){
    for(var i=0; i<groceries.length; i++){
        console.log(groceries[i])
    }
}

listGroceries()
//document.getElementById('box').innerHTML = number + 5;
document.getElementById('box').addEventListener('click',function(){
    alert('I got clicked!');
})