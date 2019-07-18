let dataResorce = [
    {
        heading: "Green Energy Is Great!",
        bodyText: "Edam mozzarella stinking bishop. Fromage frais cheesecake hard cheese cheese and biscuits cheese on toast roquefort melted cheese paneer. Roquefort danish fontina edam gouda cottage cheese hard cheese pecorino boursin. Manchego dolcelatte say cheese cheese on toast say cheese bocconcini feta queso. Emmental.Fondue cheese slices boursin. Brie macaroni cheese everyone loves cauliflower cheese edam cheese slices cut the cheese monterey jack. Squirty cheese gouda cheese triangles stilton mozzarella parmesan cheddar airedale. Cheese triangles hard cheese. <br><br> Cow jarlsberg danish fontina. Edam rubber cheese everyone loves cheddar stilton cheeseburger mozzarella pecorino. Manchego cheeseburger who moved my cheese goat cheeseburger blue castello cheesecake chalk and cheese. Jarlsberg cream cheese mascarpone feta lancashire st. agur blue cheese melted cheese cauliflower cheese. Swiss. <br><br>Babybel pepper jack parmesan. Brie goat bavarian bergkase red leicester cauliflower cheese pecorino melted cheese cow. Camembert de normandie chalk and cheese camembert de normandie mascarpone cheese on toast queso dolcelatte gouda. Cheese and wine chalk and cheese fromage frais cheesy feet bavarian bergkase goat cheese triangles port-salut. Smelly cheese!",
        imgUrl: "./img/tree.jpg"
    },
    {
        heading: "Wind Energy Blows!",
        bodyText: "Camembert de normandie red leicester cheese slices. Cheese strings monterey jack when the cheese comes out everybody's happy queso mozzarella cheese on toast danish fontina cream cheese. Monterey jack blue castello monterey jack swiss pecorino port-salut camembert de normandie blue castello. Cheesy feet rubber cheese chalk and cheese cut the cheese paneer rubber cheese. <br><br> Pepper jack cheese and wine monterey jack. Airedale bavarian bergkase halloumi cheddar port-salut who moved my cheese lancashire who moved my cheese. Croque monsieur cheeseburger rubber cheese gouda cut the cheese mascarpone cheese on toast cheesy grin. Who moved my cheese chalk and cheese everyone loves halloumi edam stinking bishop macaroni cheese caerphilly. Feta everyone loves lancashire. Pepper jack gouda say cheese. Gouda fondue gouda fromage taleggio bavarian bergkase who moved my cheese fromage. Cheese strings cottage cheese queso stinking bishop hard cheese everyone loves bocconcini fondue. Fromage paneer bavarian bergkase cheese on toast.",
        imgUrl: "./img/wind.jpg"
    },
    {
        heading: "The Sunny Side of Things",
        bodyText: "Cream cheese cheese strings port-salut. Port-salut the big cheese pecorino cheese slices caerphilly cheese and biscuits emmental red leicester. Blue castello parmesan cheese triangles cheesy grin gouda monterey jack croque monsieur cheese and biscuits. Mozzarella cheese slices blue castello stinking bishop emmental. Camembert de normandie squirty cheese edam. Cheese strings bavarian bergkase when the cheese comes out everybody's happy emmental when the cheese comes out everybody's happy cheese slices say cheese macaroni cheese. Cheesecake cheese strings cheesy grin cheesy feet edam squirty cheese brie fromage. Pecorino cheese triangles cow taleggio queso halloumi. <br><br> Melted cheese ricotta fromage frais. Jarlsberg cheeseburger halloumi cheeseburger melted cheese red leicester camembert de normandie feta. Gouda roquefort cheeseburger chalk and cheese ricotta cut the cheese taleggio pecorino. Emmental lancashire cheese and wine cut the cheese. Caerphilly melted cheese who moved my cheese. Camembert de normandie fondue cheese on toast cheese slices rubber cheese cheesy feet pepper jack squirty cheese. Hard cheese stinking bishop say cheese cow cauliflower cheese cheese and wine queso cheddar.",
        imgUrl: "./img/solar.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

//$content.innerHTML = `<h2>${dataResorce[0].heading}</h2>
//                              <img src="${dataResorce[0].imgUrl}" alt="tree">
//                              <p>${dataResorce[0].bodyText}</p>`;

function handleEvent(ev) {
    for (let i = 0; i < btns.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
            console.log(btns[i]);
    }
    
    let currentItem = ev.currentTarget;
    currentItem.setAttribute("id", "active");
}

for (let btn of btns) {
    link.addEventListener("click", handleEvent);
}
}
// EVENT-OBJECT
function eventHandler(ev){
    
    // fetch 
    let clickedBtn = ev.target;
    
    let btnText = clickedBtn.textContent;
     
    if (btnText === "Chrome") {
        $content.innerHTML = `<h2>${dataResorce[0].heading}</h2>
                              <img src="${dataResorce[0].imgUrl}" alt="tree">
                              <p>${dataResorce[0].bodyText}</p>`;
        console.log("chrome");
    } else if (btnText === "Firefox") {
//        $content.innerText = dataResorce[1].heading; 
        $content.innerHTML = `<h2>${dataResorce[1].heading}</h2>
                              <img src="${dataResorce[1].imgUrl}" alt="wind">
                              <p>${dataResorce[1].bodyText}</p>`;
         console.log("firefox");
    } else {
        $content.innerHTML = `<h2>${dataResorce[2].heading}</h2>
                              <img src="${dataResorce[2].imgUrl}" alt="solar">
                              <p>${dataResorce[2].bodyText}</p>`;
         console.log("opera");
    }
    
}

for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}


    
