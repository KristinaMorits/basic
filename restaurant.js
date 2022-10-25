function money(input) {

    let chickenMenu = Number (input[0]);
    let  fishMenu = Number (input[1]);
    let  vegieMenu = Number (input[2]);
  
    let chickenMenuCost = chickenMenu*10.35;
    let fishMenuCost = fishMenu*12.40; 
    let vegieMenuCost =vegieMenu*8.15;
	let menuSum = chickenMenuCost+fishMenuCost+vegieMenuCost;
	let desert = menuSum*0.2;
	let delivery = 2.50;
	let totalCost=menuSum + desert + delivery;

    console.log(totalCost);
}
