"use strict";

window.onload = init;

function init() {
    // 1) Select the section with an id of container without using querySelector.
    const myHTMLContainer = document.getElementById("container");
    printValues(myHTMLContainer);

    // 2) Select the section with an id of container using querySelector.
    const myCSSContainer = document.querySelector("container");
    printValues(myCSSContainer);

    // 3) Select all of the list items with a class of "second".
    const myListsWithClassTagSecond = document.getElementsByClassName("second");
    printValues(myListsWithClassTagSecond);

    // 4) Select a list item with a class of third, but only the list item inside of the ol tag.
    const myListWithClassTagThirdOl = document.getElementById("container").getElementsByTagName("ol");
    console.log(myListWithClassTagThirdOl[0].getElementsByClassName("third")[0].innerHTML);

    // 5) Give the section with an id of container the text "Hello!".
    const myBodyContainer = document.getElementsByTagName("body");       
    const myNewElement = document.createElement("p");
    const textNode = document.createTextNode("Hello!");
    myNewElement.appendChild(textNode);
    myBodyContainer[0].appendChild(myNewElement);
    
    // 6) Add the class main to the div with a class of footer
    const myFooterDiv = document.getElementsByClassName("footer");
    myFooterDiv[0].classList.add("main"); 
    
    // 7) Remove the class main on the div with a class of footer.
    myFooterDiv[0].classList.remove("main");
    
    // 8) Create a new li element
    const myNewLiElement = document.createElement("li");
    
    // 9) Give the li the text "four".
    const listNode = document.createTextNode("four");
    myNewLiElement.appendChild(listNode);

    // 10) Append the li to the ul element.
    document.getElementById("container").getElementsByTagName("ul")[0].appendChild(myNewLiElement);

    // 11) Loop over all of the lis inside the ol tag and give them a background color of "green".
    for(let i =0; i<document.getElementById("container").getElementsByTagName("ol").length; i++) {
        document.getElementById("container").getElementsByTagName("ol")[i].style.background = "green"
    }
    
    // 13) Remove the div with a class of footer.
    myBodyContainer[0].removeChild(myFooterDiv[0]);
    
    
//Print Method
}

function printValues(obj) {
    console.log(obj);
    if(obj != null)
        for(let i = 0; i<obj.length; i++)
            console.log(obj[i].innerHTML);
}
