var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");

item1.addEventListener("click", function(){
    info1.innerHTML = "The DaVinci Code, written by author Dan Brown, is about art historian and symbologist <br> Robert Langdon and cryptologist Sophie Neveu investigating a murder at the Lourve in Paris,France. <br>Langdon and Neveu spend the book connecting the murder to various groups that have little known <br>about them but a large connection to history. The murder leads Langdon and Neveu down many paths, <br>with danger lurking around every corner, since their dealings left them in contact with shady <br>organizations that little is known about.  ";
    info2.innerHTML = "<br>This book is in fact one of my favourite of all time because of the mystery and intrigue of the story. At no <br> point when reading this book did I feel compelled to put it down due to immense boredom.<br> Dan Brown has remained one of my all-time favourite authors with his release of 'Inferno' <br>in May of 2013.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Have you ever wanted to know the exact mathematical odds of winning the Powerball?<br> Or, maybe you're not a gambler, but a religion expert trying to figure out how to interpret <br> the existence of God using algorithms while examining religious texts. If these situations <br> seem as if they may apply to you, then I would absolutely suggest 'How to Not Be Wrong' <br> by Jordan Ellenberg. Ellenberg, a mathematician and professor at University of Wisconsin-Madison, <br> talks all about the mathematical situations we encounter on a daily basis,from out misunderstanding <br> to things we haven't thought about. Ellenberg explains concepts in a way that is both interesting and informational.";
    info2.innerHTML = "<br>";
});
item3.addEventListener("click",function(){
    info1.innerHTML ="Item 3 stuff";
    info2.innerHTML ="Item 3 other stuff";
});    
item4.addEventListener("click",function(){
    info1.innerHTML = "Item 4 stuff";
    info2.innerHTML = "Item 4 other stuff";
})
// JavaScript File