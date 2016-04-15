var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var item5 = document.getElementById("item5");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");
var info5 = document.getElementById("info5");
 
 item1.addEventListener("click",function(){
     info1.innerHTML = "The purest of all conditions, Factory New skins look undeniably beautiful. As shown here by the Factory New Vulcan <br>, skins in this condition will have few scratches and in general will look super clean. Although the price of Factory New weapons<br> far exceeds that of it's lower classmen, the extra money is often worth the improvement in look. For the Ak-47 Vulcan specifically,<br> the gun will run about $80 for the factory new iteration. Float values for factory new are between 0.07 all the way down to zero<br>, while most values are often about 0.06. The closer a weapon gets to 0, the more valuable it becomes. ";
 });
 item2.addEventListener("click",function(){
     info2.innerHTML = "Minimal Wear weapons are the definition of 'So Close yet So Far'. Although they are still nice looking, as implied by<br> the name, there is a slight bit of wear on the weapon. Scratches are common place, sometimes popping up on the magazine and butt of<br> the weapon. Often times, when a person is looking to spend less money but still get a nice looking weapon, they will get a low float minimal<br> wepaon for a fraction of the Factory New cost. For the Vulcan, a minimal wear version will cost around $46. The float values for<br> minimal wear include the range between 0.14 and 0.08.  ";
 });
  item3.addEventListener("click",function(){
     info3.innerHTML = "Field tested weapons are those in the perfect middle. While they are not the prettiest of weapons, they are still a<br> more affordable option when compared to the more attraive FN and MW variations. Skins in this wear are truly nothing special, but they<br> can still give you the feel of having a nice skin. A person with only a little bit in their wallet but with a heart ready to welcome any imperfect<br> gun would love guns with field tested wear. In general, the cost of these weapons is significantly less than Factory New<br> and slightly less than Minimal Wear. The float values for field tested weapons range between 0.38 and 0.15.";
 });
  item4.addEventListener("click",function(){
     info4.innerHTML = "In our penultimate intsallment we have the condition of Well-Worn. To continue the trend of using associations in order<br> to describe the skins, when I think of well worn, I think of the middle child in a family of five. Although not in the perfect middle,<br> the well worn skins are those which are never wanted and never truly appreciated (although that is with good reason). Skins in the well-worn<br> variety are cheap and ugly as can be, disregarding the final wear value, of course. One redeeming quality of this condition,though, is that it is<br> the most common wear for case hardened weapons. The case hardened skinsare a staple in Counter-Strike:Glboal Offsensive,<br> so you could say that well worn skins exist at the heart of the game. Float values for Well Worn<br> weapons lie between 0.45 and 0.38.  ";
 });
  item5.addEventListener("click",function(){
     info5.innerHTML = "Finally, we have the condition of Battle Scarred. Oooo, look, it's the Ugly Duckling of Counter-Strike. Battle Scarred skins<br> are undeniably unqiue, they are an awful sight, and yes, they are often super cheap. It is hard to find a Battle Scarred skin that<br> everyone wants to purchase, although there is a bit of a competition amongst the Counter-Strike community pertaining to Battle Scarred weapons.<br>This quasi-competitiveness revolves around the most Battle Scarred weapon, as people attempt to get full black AWP Asiimovs, Hyper Beasts, and<br> various other weapons. Besides this, Battle SCarred weapons tend to have a very negative air about them, and when someone says,<br> 'Hey, you want this weapon?', make sure it's not Battle Scarred. Float values for Battle Scarred<br>weapons lie between 1 (or 0.9999 repeating) and 0.46. ";
 });
// JavaScript File