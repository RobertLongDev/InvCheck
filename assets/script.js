let GBA = 0
 let GB = localStorage.getItem("Gb");

 // First, tell us your name
 let yourName = "Bobby Long" // HINT: Replace this with your own name!

 // We'll use these variables to track the counts of each cookie type
 let gb = 0      // Ginger bread
 let cc = 0      // Chocolate Chip
 let sugar = 0   // Sugar Sprinkle
 let total = 0

 // Code to update name display 
 document.getElementById('credit').textContent = `Created by ${yourName}`

 // Event listener for clicks on the "+" button for Ginger Bread cookies

 document.getElementById('add-gb').addEventListener('click', function() {
     // HINT: You can delete this console.log after you no longer need it!
     console.log('Ginger bread + button was clicked!')
     gb = gb + 1;
     document.getElementById('qty-gb').textContent = gb;
     total = total + 1;
     document.getElementById('qty-total').textContent = total; 

   })
 document.getElementById('minus-gb').addEventListener('click', function() {
     gb = gb - 1;
     document.getElementById('qty-gb').textContent= gb;
     total = total - 1;
     document.getElementById('qty-total').textContent = total;
 })



 document.getElementById('add-cc').addEventListener('click', function(){
   cc = cc + 1;
   document.getElementById('qty-cc').textContent = cc;
   total = total + 1;
   document.getElementById('qty-total').textContent = total;
 })

     // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
 document.getElementById('minus-cc').addEventListener('click', function(){
   cc = cc - 1;
   document.getElementById('qty-cc').textContent = cc;
   total = total - 1;
   document.getElementById('qty-total').textContent= total;
 })

 // TODO: Hook up event listeners for the rest of the buttons 




 document.getElementById('add-sugar').addEventListener('click', function() {
   sugar = sugar + 1;
   document.getElementById('qty-sugar').textContent = sugar;
   total = total + 1;
   document.getElementById('qty-total').textContent = total;
 })

 document.getElementById('minus-sugar').addEventListener('click', function() {
   sugar = sugar - 1;
   document.getElementById('qty-sugar').textContent = sugar;
   total = total - 1;
   document.getElementById('qty-total').textContent = total;
 })