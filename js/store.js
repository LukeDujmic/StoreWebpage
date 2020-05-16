/*function removePizza()
{
    document.getElementById("Pizza").style -= "display: none;";
    document.getElementById("Pizza").style += "display: block;";
}*/


function displaySpecific()
{
    var search = document.getElementById("searchBar1").value;

    if (search == "General" || search == "general")
    {
        /*document.getElementById("generalFood").style -= "display: none;"
        document.getElementById("snacks").style -= "display: table-cell;"
        document.getElementById("dessert").style -= "display: table-cell;"*/

        document.getElementById("generalFood").style = "display: table-cell; width: 100%;"
        document.getElementById("generalLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("snacks").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"

        document.getElementById("mainImagePizza").style = "display: block;"
        document.getElementById("itemImagePizza").style = "display: block; width: 50%;"

        document.getElementById("mainImageCheeseburger").style = "display: block;"
        document.getElementById("itemImageCheeseburger").style = "display: block; width: 50%;"

        document.getElementById("mainImageHotdog").style = "display: block;"
        document.getElementById("itemImageHotdog").style = "display: block; width: 50%;"

        document.getElementById("mainImageSquid").style = "display: block;"
        document.getElementById("itemImageSquid").style = "display: block; width: 50%;"


    }

    if (search == "Snacks" || search == "snacks")
    {
        /*document.getElementById("generalFood").style -= "display: none;"
        document.getElementById("snacks").style -= "display: table-cell;"
        document.getElementById("dessert").style -= "display: table-cell;"*/

        document.getElementById("snacks").style = "display: table-cell; width: 100%;"
        document.getElementById("snacksLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"

        document.getElementById("mainImagePotatoChips").style = "display: block;"
        document.getElementById("itemImagePotatoChips").style = "display: block; width: 50%;"

        document.getElementById("mainImageCheezeIts").style = "display: block;"
        document.getElementById("itemImageCheezeIts").style = "display: block; width: 50%;"

        document.getElementById("mainImageOreo").style = "display: block;"
        document.getElementById("itemImageOreo").style = "display: block; width: 50%;"

        document.getElementById("mainImageGummies").style = "display: block;"
        document.getElementById("itemImageGummies").style = "display: block; width: 50%;"
    }

    if (search == "Dessert" || search == "dessert")
    {
        /*document.getElementById("generalFood").style -= "display: none;"
        document.getElementById("snacks").style -= "display: table-cell;"
        document.getElementById("dessert").style -= "display: table-cell;"*/

        document.getElementById("dessert").style = "display: table-cell; width: 100%;"
        document.getElementById("dessertLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("snacks").style = "display: none;"

        document.getElementById("mainImageCupcakes").style = "display: block;"
        document.getElementById("itemImageCupcakes").style = "display: block; width: 50%;"

        document.getElementById("mainImageCake").style = "display: block;"
        document.getElementById("itemImageCake").style = "display: block; width: 50%;"

        document.getElementById("mainImageFlan").style = "display: block;"
        document.getElementById("itemImageFlan").style = "display: block; width: 50%;"

        document.getElementById("mainImageIceCream").style = "display: block;"
        document.getElementById("itemImageIceCream").style = "display: block; width: 50%;"
    }
}

function displayItem()
{
    var search = document.getElementById("searchBar2").value;

    if (search == "Pizza" || search == "pizza")
    {
        document.getElementById("itemAnchor").href = "#pizzaAnchor";
        document.getElementById("itemAnchor").innerHTML = "Go to the Pizza Section!"

        document.getElementById("generalFood").style = "display: table-cell; width: 100%;"
        document.getElementById("generalLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("snacks").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"

        document.getElementById("mainImagePizza").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImagePizza").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageCheeseburger").style = "display: block;"
        document.getElementById("itemImageCheeseburger").style = "display: block; width: 50%;"

        document.getElementById("mainImageHotdog").style = "display: block;"
        document.getElementById("itemImageHotdog").style = "display: block; width: 50%;"

        document.getElementById("mainImageSquid").style = "display: block;"
        document.getElementById("itemImageSquid").style = "display: block; width: 50%;"

    }

    if (search == "Cheeseburger" || search == "cheeseburger")
    {
        document.getElementById("itemAnchor").href = "#cheeseburgerAnchor";
        document.getElementById("itemAnchor").innerHTML = "Go to the Cheeseburger Section!"

        document.getElementById("generalFood").style = "display: table-cell; width: 100%;"
        document.getElementById("generalLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("snacks").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"


        document.getElementById("mainImagePizza").style = "display: block;"
        document.getElementById("itemImagePizza").style = "display: block; width: 50%;"

        document.getElementById("mainImageCheeseburger").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageCheeseburger").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageHotdog").style = "display: block;"
        document.getElementById("itemImageHotdog").style = "display: block; width: 50%;"

        document.getElementById("mainImageSquid").style = "display: block;"
        document.getElementById("itemImageSquid").style = "display: block; width: 50%;"
    }

    if (search == "Hotdog" || search == "hotdog")
    {
        document.getElementById("itemAnchor").href = "#hotdogAnchor";
        document.getElementById("itemAnchor").innerHTML = "Go to the Hotdog Section!"

        document.getElementById("generalFood").style = "display: table-cell; width: 100%;"
        document.getElementById("generalLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("snacks").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"


        document.getElementById("mainImagePizza").style = "display: block;"
        document.getElementById("itemImagePizza").style = "display: block; width: 50%;"

        document.getElementById("mainImageCheeseburger").style = "display: block;"
        document.getElementById("itemImageCheeseburger").style = "display: block; width: 50%;"

        document.getElementById("mainImageHotdog").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageHotdog").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageSquid").style = "display: block;"
        document.getElementById("itemImageSquid").style = "display: block; width: 50%;"
    }

    if (search == "Squid" || search == "squid")
    {
        document.getElementById("itemAnchor").href = "#squidAnchor";
        document.getElementById("itemAnchor").innerHTML = "Go to the Squid Section!"

        document.getElementById("generalFood").style = "display: table-cell; width: 100%;"
        document.getElementById("generalLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("snacks").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"


        document.getElementById("mainImagePizza").style = "display: block;"
        document.getElementById("itemImagePizza").style = "display: block; width: 50%;"

        document.getElementById("mainImageCheeseburger").style = "display: block;"
        document.getElementById("itemImageCheeseburger").style = "display: block; width: 50%;"

        document.getElementById("mainImageHotdog").style = "display: block;"
        document.getElementById("itemImageHotdog").style = "display: block; width: 50%;"

        document.getElementById("mainImageSquid").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageSquid").style = "display: block; width: 75%; border-radius: 10px;"
    }

    if (search == "Potato Chips" || search == "potato chips" || search == "Potato chips" || search == "potato Chips")
    {
        document.getElementById("itemAnchor").href = "#potatoChipsAnchor";
        document.getElementById("itemAnchor").innerHTML = "Go to the Potato Chips Section!"

        document.getElementById("snacks").style = "display: table-cell; width: 100%;"
        document.getElementById("snacksLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"

        document.getElementById("mainImagePotatoChips").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImagePotatoChips").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageCheezeIts").style = "display: block;"
        document.getElementById("itemImageCheezeIts").style = "display: block; width: 50%;"

        document.getElementById("mainImageOreo").style = "display: block;"
        document.getElementById("itemImageOreo").style = "display: block; width: 50%;"

        document.getElementById("mainImageGummies").style = "display: block;"
        document.getElementById("itemImageGummies").style = "display: block; width: 50%;"
    }

    if (search == "Cheeze-Its" || search == "cheeze-its" || search == "Cheeze-its" || search == "cheeze-Its")
    {
        document.getElementById("itemAnchor").href = "#CheezeItsAnchor";
        document.getElementById("itemAnchor").innerHTML = "Go to the Cheeze-Its Section!"

        document.getElementById("snacks").style = "display: table-cell; width: 100%;"
        document.getElementById("snacksLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"

        document.getElementById("mainImagePotatoChips").style = "display: block;"
        document.getElementById("itemImagePotatoChips").style = "display: block; width: 50%;"

        document.getElementById("mainImageCheezeIts").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageCheezeIts").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageOreo").style = "display: block;"
        document.getElementById("itemImageOreo").style = "display: block; width: 50%;"

        document.getElementById("mainImageGummies").style = "display: block;"
        document.getElementById("itemImageGummies").style = "display: block; width: 50%;"
    }

    if (search == "Oreo" || search == "oreo" || search == "Oreos" || search == "oreos")
    {
        document.getElementById("itemAnchor").href = "#Oreo";
        document.getElementById("itemAnchor").innerHTML = "Go to the Oreo Section!"

        document.getElementById("snacks").style = "display: table-cell; width: 100%;"
        document.getElementById("snacksLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"

        document.getElementById("mainImagePotatoChips").style = "display: block;"
        document.getElementById("itemImagePotatoChips").style = "display: block; width: 50%;"

        document.getElementById("mainImageCheezeIts").style = "display: block;"
        document.getElementById("itemImageCheezeIts").style = "display: block; width: 50%;"

        document.getElementById("mainImageOreo").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageOreo").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageGummies").style = "display: block;"
        document.getElementById("itemImageGummies").style = "display: block; width: 50%;"
    }

    if (search == "Gummies" || search == "gummies" || search == "Gummy" || search == "gummy")
    {
        document.getElementById("itemAnchor").href = "#Gummies";
        document.getElementById("itemAnchor").innerHTML = "Go to the Gummies Section!"

        document.getElementById("snacks").style = "display: table-cell; width: 100%;"
        document.getElementById("snacksLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("dessert").style = "display: none;"

        document.getElementById("mainImagePotatoChips").style = "display: block;"
        document.getElementById("itemImagePotatoChips").style = "display: block; width: 50%;"

        document.getElementById("mainImageCheezeIts").style = "display: block;"
        document.getElementById("itemImageCheezeIts").style = "display: block; width: 50%;"

        document.getElementById("mainImageOreo").style = "display: block;"
        document.getElementById("itemImageOreo").style = "display: block; width: 50%;"

        document.getElementById("mainImageGummies").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageGummies").style = "display: block; width: 75%; border-radius: 10px;"
    }

    if (search == "Cupcakes" || search == "cupcakes" || search == "Strawberry cupcakes" || search == "strawberry cupcakes" || search == "Strawberry Cupcakes" || search == "strawberry Cupcakes")
    {
        document.getElementById("itemAnchor").href = "#Cupcakes";
        document.getElementById("itemAnchor").innerHTML = "Go to the Cupcakes Section!"


        document.getElementById("dessert").style = "display: table-cell; width: 100%;"
        document.getElementById("dessertLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("snacks").style = "display: none;"

        document.getElementById("mainImageCupcakes").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageCupcakes").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageCake").style = "display: block;"
        document.getElementById("itemImageCake").style = "display: block; width: 50%;"

        document.getElementById("mainImageFlan").style = "display: block;"
        document.getElementById("itemImageFlan").style = "display: block; width: 50%;"

        document.getElementById("mainImageIceCream").style = "display: block;"
        document.getElementById("itemImageIceCream").style = "display: block; width: 50%;"
    }

    if (search == "Cake" || search == "cake" || search == "cakes" || search == "Cake")
    {
        document.getElementById("itemAnchor").href = "#Cake";
        document.getElementById("itemAnchor").innerHTML = "Go to the Cakes Section!"


        document.getElementById("dessert").style = "display: table-cell; width: 100%;"
        document.getElementById("dessertLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("snacks").style = "display: none;"

        document.getElementById("mainImageCupcakes").style = "display: block;"
        document.getElementById("itemImageCupcakes").style = "display: block; width: 50%;"

        document.getElementById("mainImageCake").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageCake").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageFlan").style = "display: block;"
        document.getElementById("itemImageFlan").style = "display: block; width: 50%;"

        document.getElementById("mainImageIceCream").style = "display: block;"
        document.getElementById("itemImageIceCream").style = "display: block; width: 50%;"
    }

    if (search == "Flan" || search == "flan")
    {
        document.getElementById("itemAnchor").href = "#Flan";
        document.getElementById("itemAnchor").innerHTML = "Go to the Flan Section!"


        document.getElementById("dessert").style = "display: table-cell; width: 100%;"
        document.getElementById("dessertLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("snacks").style = "display: none;"

        document.getElementById("mainImageCupcakes").style = "display: block;"
        document.getElementById("itemImageCupcakes").style = "display: block; width: 50%;"

        document.getElementById("mainImageCake").style = "display: block;"
        document.getElementById("itemImageCake").style = "display: block; width: 50%;"

        document.getElementById("mainImageFlan").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageFlan").style = "display: block; width: 75%; border-radius: 10px;"

        document.getElementById("mainImageIceCream").style = "display: block;"
        document.getElementById("itemImageIceCream").style = "display: block; width: 50%;"
    }

    if (search == "Ice Cream" || search == "ice Cream" || search == "ice cream" || search == "Ice cream")
    {
        document.getElementById("itemAnchor").href = "#IceCream";
        document.getElementById("itemAnchor").innerHTML = "Go to the Ice Cream Section!"


        document.getElementById("dessert").style = "display: table-cell; width: 100%;"
        document.getElementById("dessertLogo").style = "width: 33%; margin: auto; text-align: center; display: block;"
        document.getElementById("generalFood").style = "display: none;"
        document.getElementById("snacks").style = "display: none;"

        document.getElementById("mainImageCupcakes").style = "display: block;"
        document.getElementById("itemImageCupcakes").style = "display: block; width: 50%;"

        document.getElementById("mainImageCake").style = "display: block;"
        document.getElementById("itemImageCake").style = "display: block; width: 50%;"

        document.getElementById("mainImageFlan").style = "display: block;"
        document.getElementById("itemImageFlan").style = "display: block; width: 50%;"

        document.getElementById("mainImageIceCream").style = "display: block; border: 5px double white; border-radius: 10px;"
        document.getElementById("itemImageIceCream").style = "display: block; width: 75%; border-radius: 10px;"
    }
}

/*function changePizzaImage()
{
    var pizzaImages = ["images/Pizza1.png", "images/Pizza2.png", "images/Pizza3.png"];

    for (var i = 0; i < pizzaImages.length; i++) {
    document.getElementById("pizzaImages").src = pizzaImages.src;



}*/





/*------------------------------------*/

var i = 0;
function changePizzaImage()
{   
    
    var pizzaImages = ["images/Pizza1.png", "images/Pizza2.png", "images/Pizza3.png"];
    

    if (i == 0)
    {
        document.getElementById("pizzaImageArea").src = ''+pizzaImages[0]+'';
        
    }
    if (i == 1)
    {
        document.getElementById("pizzaImageArea").src = ''+pizzaImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("pizzaImageArea").src = ''+pizzaImages[2]+'';
        i -= 3;
    }

    if (i != 2)
    {
        i++;
    }

    
}

function changeCheeseburgerImage()
{   
    
    var cheeseburgerImages = ["images/Cheeseburger1.png", "images/Cheeseburger2.png", "images/Cheeseburger3.png"];
    if (i == 0)
    {
        document.getElementById("cheeseburgerImageArea").src = ''+cheeseburgerImages[0]+'';
        
    }
    if (i == 1)
    {
        document.getElementById("cheeseburgerImageArea").src = ''+cheeseburgerImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("cheeseburgerImageArea").src = ''+cheeseburgerImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeHotdogImage()
{   
    
    var hotdogImages = ["images/Hotdog1.png", "images/Hotdog2.png", "images/Hotdog3.png"];
    if (i == 0)
    {
        document.getElementById("hotdogImageArea").src = ''+hotdogImages[0]+'';
        
    }
    if (i == 1)
    {
        document.getElementById("hotdogImageArea").src = ''+hotdogImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("hotdogImageArea").src = ''+hotdogImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeSquidImage()
{   
    
    var squidImages = ["images/Squid1.png", "images/Squid2.png", "images/Squid3.png"];
    if (i == 0)
    {
        document.getElementById("squidImageArea").src = ''+squidImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("squidImageArea").src = ''+squidImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("squidImageArea").src = ''+squidImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changePotatoChipsImage()
{   
    
    var potatoChipsImages = ["images/PotatoChips1.png", "images/PotatoChips2.png", "images/PotatoChips3.png"];
    if (i == 0)
    {
        document.getElementById("potatoChipsImageArea").src = ''+potatoChipsImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("potatoChipsImageArea").src = ''+potatoChipsImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("potatoChipsImageArea").src = ''+potatoChipsImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeCheezeItsImage()
{   
    
    var CheezeItsImages = ["images/CheezeIts1.png", "images/CheezeIts2.png", "images/CheezeIts3.png"];
    if (i == 0)
    {
        document.getElementById("CheezeItsImageArea").src = ''+CheezeItsImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("CheezeItsImageArea").src = ''+CheezeItsImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("CheezeItsImageArea").src = ''+CheezeItsImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeOreoImage()
{   
    
    var OreoImages = ["images/Oreo1.png", "images/Oreo2.png", "images/Oreo3.png"];
    if (i == 0)
    {
        document.getElementById("OreoImageArea").src = ''+OreoImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("OreoImageArea").src = ''+OreoImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("OreoImageArea").src = ''+OreoImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeGummiesImage()
{   
    
    var GummiesImages = ["images/Gummies1.png", "images/Gummies2.png", "images/Gummies3.png"];
    if (i == 0)
    {
        document.getElementById("GummiesImageArea").src = ''+GummiesImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("GummiesImageArea").src = ''+GummiesImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("GummiesImageArea").src = ''+GummiesImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeCupcakesImage()
{   
    
    var CupcakesImages = ["images/Cupcakes1.png", "images/Cupcakes2.png", "images/Cupcakes3.png"];
    if (i == 0)
    {
        document.getElementById("CupcakesImageArea").src = ''+CupcakesImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("CupcakesImageArea").src = ''+CupcakesImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("CupcakesImageArea").src = ''+CupcakesImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeCakeImage()
{   
    
    var CakeImages = ["images/Cake1.png", "images/Cake2.png", "images/Cake3.png"];
    if (i == 0)
    {
        document.getElementById("CakeImageArea").src = ''+CakeImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("CakeImageArea").src = ''+CakeImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("CakeImageArea").src = ''+CakeImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeFlanImage()
{   
    
    var FlanImages = ["images/Flan1.png", "images/Flan2.png", "images/Flan3.png"];
    if (i == 0)
    {
        document.getElementById("FlanImageArea").src = ''+FlanImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("FlanImageArea").src = ''+FlanImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("FlanImageArea").src = ''+FlanImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}

function changeIceCreamImage()
{   
    
    var IceCreamImages = ["images/IceCream1.png", "images/IceCream2.png", "images/IceCream3.png"];
    if (i == 0)
    {
        document.getElementById("IceCreamImageArea").src = ''+IceCreamImages[0]+'';
    }
    if (i == 1)
    {
        document.getElementById("IceCreamImageArea").src = ''+IceCreamImages[1]+'';
    }
    if (i == 2)
    {
        document.getElementById("IceCreamImageArea").src = ''+IceCreamImages[2]+'';
        i -= 3;
    }
    if (i != 2)
    {
        i++;
    }
}