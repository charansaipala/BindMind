console.log("SCRIPT - OK")
window.onload = function(){ 

    var pageTitle = "BindMind Studio";
    document.getElementById("pageTitle").innerHTML = pageTitle;

    var dialog = document.querySelector('dialog');
    document.querySelector('#show').onclick = function() {
        dialog.show();
    };
    document.querySelector('#closeLogin').onclick = function() {
        dialog.close();
    };
};


function loginUser(){
    console.log("USER LOGGED IN");
    console.log(document.getElementById("username").value, document.getElementById("password").value);
    document.getElementById("show").style.display = "none";
    document.getElementById("userWelcome").style.display = "inline";
    document.getElementById("userWelcome").innerHTML = "Welcome," + document.getElementById("username").value;
    document.querySelector('dialog').close();
}

// MERCH FUNCTIONS

let cartInformation = [];
let totalPrice = 0;
function addToCart(productID){
    if (productID === '1'){
        cartInformation.push({"Name": "Yoga Beer Shirt", "Price": "$40"});
        totalPrice = totalPrice + 40;
    } else if (productID === '2') {
        cartInformation.push({"Name": "Yoga Illusion 3D Lamp", "Price": "$20"});
        totalPrice = totalPrice + 20;
    } else if (productID === '3') {
        cartInformation.push({"Name": "Watercolor Personalized Yoga Mat", "Price": "$55"});
        totalPrice = totalPrice + 55;
    }
}

function displayCart(show, selector){
    console.log(cartInformation, totalPrice)
    if(show === false){
        document.getElementById("cart").close();
    } else {
        if (totalPrice === 0){
            document.getElementById("cartTitle").innerHTML = "YOUR CART IS EMPTY";
        } else {
            document.getElementById("totalPrice").innerHTML = "TOTAL PRICE: $" + totalPrice.toString();
            document.getElementById("cartTitle").innerHTML = "YOUR CART";
            var columns = addAllColumnHeaders(cartInformation, selector);
            for (var i = 0; i < cartInformation.length; i++) {
              var row$ = $('<tr/>');
              for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                var cellValue = cartInformation[i][columns[colIndex]];
                if (cellValue == null) cellValue = "";
                console.log(cellValue)
                row$.append($('<td/>').html(cellValue));
              }
              $(selector).append(row$);
            }
        }
        document.getElementById("cart").show();
    }
}

function addAllColumnHeaders(myList, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < myList.length; i++) {
      var rowHash = myList[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
          console.log('COL:', key)
        }
      }
    }
    $(selector).append(headerTr$);
    return columnSet;
}

// Classes



let classList = [
    {"Name": "Teaching Yoga to Weightlifting Athletes", "Duration": 3.75, "Link": "https://yogamedicine.com/retail/online-courses/teaching-yoga-to-weightlifting-athletes/"},
    {"Name": "Optimal Health for a Vibrant Life with Yoga International", "Duration": 15, "Link": "https://yogainternational.com/ecourse/optimal-health-for-a-vibrant-life?utm_source=Presenter-%20Tiffany%20Cruikshank&utm_medium=PresenterTiffanyCruikshank&utm_campaign=OptimalHealthCourse"},
    {"Name": "Yoga Anatomy 20hr Course with Yoga International", "Duration": 20, "Link": "https://yogainternational.com/ecourse/yoga-anatomy-training?utm_source=tiffany-cruikshank-2018&utm_medium=referral&utm_campaign=tiffany-cruikshank-permanent-website"},
    {"Name": "Yoga and Mindfulness 101 for Physicians and Healthcare Providers", "Duration": 30, "Link": "https://yogamedicine.com/retail/online-courses/yoga-mindfulness-101/"},
    {"Name": "Movement Intelligence – An Introduction to Neuromechanics: Thinking and Moving Outside The Vinyasa and Traditional Alignment", "Duration": 5.5, "Link": "https://yogamedicine.com/retail/online-courses/movement-intelligence/"},
    {"Name": "Beyond Chair Yoga", "Duration": 1, "Link": "https://yogamedicine.com/retail/online-courses/beyond-chair-yoga/"},
    {"Name": "Yoga for Older Beginners", "Duration": 1, "Link": "https://yogamedicine.com/retail/online-courses/yoga-for-older-beginners/"},
];

function getClasses() {
    var time = document.getElementById("hours").value;
    let tempList = [];

    classList.forEach(item => {
        if(item.Duration <= time){
            tempList.push(item);
        }
    })

    if(tempList.length === 0){
        console.log('empty')
        document.getElementById("classesList").innerHTML = '<h3>No classes were found :(</h3>';
    } else {
        let insideHTML = '';
        tempList.forEach(classItem => {
            insideHTML = insideHTML + '<div class="card">' +
                                      '<div class="container">' +
                                      '<h4><b>' + classItem.Name +'</b></h4>' +
                                      '<p> Duration:'+ classItem.Duration +'</p>' +
                                      '<a href="'+ classItem.Link +'">Visit Class Page</a><br>' +
                                      '</div>' +
                                      '</div><br>';
        })

        document.getElementById("classesList").innerHTML =  insideHTML;
    }
}
// Reference : https://stackoverflow.com/questions/5180382/convert-json-data-to-a-html-table