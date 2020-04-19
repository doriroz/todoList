// sign todo with red line (in the bottom shorter way)
$("#ul").on("click","li",function(){
    $(this).toggleClass("lineRed");
});

// remove todo from list
$("ul").on("click","span",function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});

// enter key pressed
$("input[type=text]").keypress(function(event){
    console.log(event.which);
    if(event.which===13){
        var newToDo = $(this).val();
        $("#ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newToDo + "</li>");
        $(this).val("");
    }
});

// clicked on plus button
$("#pls").click(function(){
    $("input").fadeToggle();
    //toggleClass("inpClicked");
    
});


// ********click on inset todo list******
var count = 1;
//append the task list to weekly array
$("button").click(function(){
    console.log(count);
    if(count<7){
        // get the list item
        var ultodo = $("#ul").html();
        //ultodo = "<li class='li'><h3>TO-DO<i class='fas fa-minus'></i></h3><ul>" + ultodo + "</ul></li>";
        var divCount = "#div"+count; 
        // ultodo = "<ul class='fill'><li class='li' draggable='true'><h3>TO-DO<i class='fas fa-minus'></i></h3><ul>" + ultodo + "</ul></li></ul>";
        ultodo = "<div class='fill' draggable='true'><h3>TO-DO<i class='fas fa-minus'></i></h3><ul>" + ultodo + "</ul></div>";
        console.log(ultodo);
        $(divCount).append(ultodo);
        // $(divCount).toggleClass("hovered");
        //remove delete button from append list
        $(".fill ul span").remove();
        count++;
     
    }
    
    $("#ul").removeClass("fill");
    
    //var emptArr = document.querySelectorAll('.empty');
    // check the first empty element
    // for(var i=0;i<emptArr.length;i++){
    //     console.log(emptArr[i].innerHTML);
    //     if(emptArr[i].innerHTML===""){
    //         console.log("dori");
    //     }
    // }    
});

// *******remove***********
$(".empty").on("click",".li h3 .fa-minus",function(){

    $(this).parent().parent().remove();
});

// ******red line on todo item******
$(".empty").on("click",".li ul li",function(e){
    $(this).toggleClass("lineRed");
});

// **********drag&drop(js)**********
// var dCount=1;
// if(dCount<8){
//     var divCount = "#div"+dCount;
//     console.log("div: "+divCount);
//     dCount++;
// }


function drag(currId){

var fill = document.querySelector("#"+currId);
console.log("id is: #"+currId);
// console.log("before fill is: "+document.querySelector(currId+".fill"));
const empties = document.querySelectorAll('.empty');

//Fill Listeners
fill.addEventListener('drag', function dragStart(ev){
    ev.target.style.background = "orange";
    this.style.background = "orange";
    this.classList.add('hold');
    //ev.dataTransfer.setData("text",ev.target.id);
});

fill.addEventListener('dragend', function dragEnd(){
    this.classList.remove('hold');
});

//Loop through empties
for (const empty of empties) {
  empty.addEventListener('dragover', function dragOver(ev){
    ev.preventDefault();
    this.style.background = "#99ffff";
    console.log("over fill is: "+document.querySelector(".fill").innerHTML);
    console.log("currentTarget.id: "+ev.currentTarget.id);
  });
  empty.addEventListener('dragenter', function dragEnter(ev){
    ev.preventDefault();
    this.classList.toggle('hovered');
    console.log("enter fill is: "+document.querySelector(".fill").innerHTML);
  });
  empty.addEventListener('dragleave', function dragLeave(ev){
    console.log("from: "+ev.fromElement.id);
    this.classList.remove('hovered');
    this.style.background = "#f4f4f4";
    console.log("leave fill is: "+document.querySelector(".fill").innerHTML);
  });
  empty.addEventListener('drop', function dragDrop(ev){
    var fillDrp = "#"+ev.target.id;
    console.log(fillDrp);
    // dataTransfer.getData("text");
    //var ddd = document.querySelector(fill);
    fillDrp.append(fill);
    console.log("leave fill is: "+document.querySelector(".fill").innerHTML);
  });
}

}


// **********************************************************

/**********************/
// change the ul to div
/**********************/

var fill = document.querySelector(".fill");
const empties = document.querySelectorAll('.empty');

//Fill Listeners
fill.addEventListener('dragstart', function dragStart(ev){
    alert("ddd");
    this.style.background = "orange";
    this.classList.add('hold');
    //ev.dataTransfer.setData("text",ev.target.id);
});

fill.addEventListener('dragend', function dragEnd(){
    this.classList.remove('hold');
});

//Loop through empties
// for (const empty of empties) {
//   empty.addEventListener('dragover', function dragOver(ev){
//     ev.preventDefault();
//     this.style.background = "#99ffff";
//     console.log("over fill is: "+document.querySelector(".fill").innerHTML);
//     console.log("currentTarget.id: "+ev.currentTarget.id);
//   });
//   empty.addEventListener('dragenter', function dragEnter(ev){
//     ev.preventDefault();
//     this.classList.toggle('hovered');
//     console.log("enter fill is: "+document.querySelector(".fill").innerHTML);
//   });
//   empty.addEventListener('dragleave', function dragLeave(ev){
//     console.log("from: "+ev.fromElement.id);
//     this.classList.remove('hovered');
//     this.style.background = "#f4f4f4";
//     console.log("leave fill is: "+document.querySelector(".fill").innerHTML);
//   });
//   empty.addEventListener('drop', function dragDrop(ev){
//     var fill = document.querySelector(".fill");
//     this.append(fill);
//     console.log("leave fill is: "+document.querySelector(".fill").innerHTML);
//   });
// }

// when dragged object enter a document element ,
// the browser firesa a dragenter event on the element.
// this element has to be checked if it has data availble
// in the format that can be understand
// function dragEnter(e) 

// the handler of dragleave event should restore 
// the element's style format
// function dragLeave(e) 


// shorter way
//     if($(this).css("color")!=="rgb(255, 0, 0)"){
//         $(this).css(
//             {color:"red",
//             textDecoration:"line-through"
//         })
//     }
//     else{
//         $(this).css(
//             {color:"black",
//             textDecoration:"none"
//         })
// }
 
// **************************************
// one way
// function(){
// $(this).css("color","red");
// $(this).css("text-decoration","line-through");

// another way instead
// $(this).css(
//{color:"red",
//textDecoration:"line-through"
//})
// **************************************
