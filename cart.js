/*JavaScript Document*/
/*JavaScript for the Order Form*/
var fish_prices= new Array();
 fish_prices["ButterflyFish"]=5;
 fish_prices["ClownFish"]=5;
 fish_prices["FantailGoldfish"]=7;
 fish_prices["Guppy"]=8;
 fish_prices["MoorishIdol"]=10;
 fish_prices["NeonTetra"]=5;
 fish_prices["OrandaGoldfish"]=9;
 fish_prices["PacificBlueTang"]=5;

var PetShop_prices= new Array();
 PetShop_prices["Beagle"]=5;
 PetShop_prices["Chihuahua"]=5;
 PetShop_prices["Corgi"]=7;
 PetShop_prices["Maltese"]=8;
 PetShop_prices["Pomeranian"]=10;
 PetShop_prices["Poodle"]=5;
 PetShop_prices["Pug"]=9;
 PetShop_prices["ShihTzu"]=5;

var AS_prices= new Array();
 AS_prices["tank"]=5;
 AS_prices["fish-flakes"]=5;
 AS_prices["RomanPost"]=7;
 AS_prices["shrimp-pellets"]=8;
 AS_prices["tetra-flakes"]=10;
 
var PS_prices= new Array();
 PS_prices["shampoo"]=8;
 PS_prices["bowl"]=5;
 PS_prices["cage"]=9;
 PS_prices["microbites"]=5;
 PS_prices["collar"]=5;

function getfish_prices()
{
    var theForm = document.forms["order-form"];
	var quantity = theForm.elements["fish_quantity"];
	var howmany = 0;
	if(quantity.value!="")
		{
			howmany = parseInt(quanity.value);
		}
	return howmany;
	var getfish_prices=0;
    var theForm = document.forms["order-form"];
     var selectedFish = theForm.elements["Order_Fishes"];
    getfish_prices = fish_prices[selectedFish.value] * howmany;
    return getfish_prices;
}

function getPetShop_prices()
{
    var theForm = document.forms["order-form"];
	var quantity = theForm.elements["PetShop_quantity"];
	var howmany = 0;
	if(quantity.value!="")
		{
			howmany = parseInt(quanity.value);
		}
	return howmany;
	var getPetShop_prices=0;
    var theForm = document.forms["order-form"];
     var selectedPet = theForm.elements["Order_PetShop"];
    getPetShop_prices = PetShop_prices[selectedPet.value] * howmany;
    return getPetShop_prices;
}

function getAS_prices()
{
    var theForm = document.forms["order-form"];
	var quantity = theForm.elements["AS_quantity"];
	var howmany = 0;
	if(quantity.value!="")
		{
			howmany = parseInt(quanity.value);
		}
	return howmany;
	var getAS_prices=0;
    var theForm = document.forms["order-form"];
     var selectedAS = theForm.elements["Order_AquariumSupplies"];
    getAS_prices = AS_prices[selectedAS.value] * howmany;
    return getAS_prices;
}

function getPS_prices()
{
    var theForm = document.forms["order-form"];
	var quantity = theForm.elements["PS_quantity"];
	var howmany = 0;
	if(quantity.value!="")
		{
			howmany = parseInt(quanity.value);
		}
	return howmany;
	var getPS_prices=0;
    var theForm = document.forms["order-form"];
     var selectedPS = theForm.elements["Order_PetShopSupplies"];
    getPS_prices = PS_prices[selectedPS.value] * howmany;
    return getPS_prices;
}

function getTotal()
{
    var cartPrice = getfish_prices() + getPetShop_prices() +
                          getAS_prices() + getPS_prices();
 
    //display the result
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Cart $"+cartPrice;
 
}
