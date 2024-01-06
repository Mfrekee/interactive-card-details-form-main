const header = document.querySelector("header")
const master = document.querySelector(".circle")
const cardForm = document.querySelector("form")
const continueButton = document.querySelector(".success-btn")
// const headerForm = document.querySelectorAll
// if(window.innerWidth>= 1040){
//     //code for screen width greater than or equal to 1040 pixels goes here
// header.classList.replace("mobile", "desktop")
// } else{
//     // code for screens with width less than 1040px goes here
//     header.classList.replace("desktop","mobile");
//     }
    //Adding event listener to check the window size on resize
    window.addEventListener('resize', function(){
        if (window.innerWidth < 1000) {
            header.classList.add("mobile");
            header.classList.remove("desktop");
            } else {
                header.classList.add("desktop");
                header.classList.remove("mobile");
                }
                });

    function cardN() {
  var CN = document.getElementById("cardName").value;
  document.querySelector(".card-name").innerHTML =  CN;

//   let cardName = document.getElementById('cardName');
//  let defaultValue = 'Jane Appleseed';
  
//  if(cardName.value === "") {
//     cardName.value = defaultValue;
//  }
}
document.getElementById("cardName").addEventListener('input', function(event) {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
   });

    function cardNum(event) {
            // Prevent any non-digit character from being entered
            if (isNaN(event.key) || document.getElementById("cardNo").value.length >= 27) {
                event.preventDefault();
            }
        
            // input.onkeydown = function (event) {
            //     var key = event.keyCode || event.charCode;
            //     // if (key == 8) {
            //     //   event.preventDefault();
            //     //   // Your code to handle the backspace key
            //     // }
            //   };
              
            
            // Insert a space after every 4 numbers
            // var updatedValue = event.target.value;
            // if (updatedValue.length % 5 === 0 && updatedValue.length < 27) {
            //     updatedValue += ' ';
            // }
            // document.getElementById("cardNo").value = updatedValue;
            var NUM = document.getElementById("cardNo").value.replace(/\s+/g, '');
  document.querySelector(".card-number").innerHTML = NUM
// var NUM = document.getElementById("cardNo").value.replace(/\s+/g, '');
var spacedNum = "";
            for (var i = 0; i < NUM.length; i++) {
              spacedNum += NUM[i];
              if ((i + 1) % 4 === 0 && i < NUM.length - 1) {
                spacedNum += " ";
              }
            }
            document.querySelector(".card-number").innerHTML = spacedNum;
            

  if (/^(?:5[1-5][0-9\s]{14})$/.test(NUM)) {
    master.src = "https://logolook.net/wp-content/uploads/2021/07/Mastercard-Logo-1979.png";
    alert("Mastercard detected")
    console.log(NUM);
} else if(/^(?:50[067][180]|6500)(?:[0-9]{15})$/.test(NUM)) {
    master.src = "https://pbs.twimg.com/profile_images/646404903934431232/XjeK14Sz_400x400.jpg"
    alert("verve")
} else if(/^4[0-9]{12}(?:[0-9\s]{3,4})?$/.test(NUM)) {
    master.src = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-1024.png"
    alert("visa Card")
} else if(/^3[47](?:[0-9]{13})$/.test(NUM)) {
    master.src = "https://th.bing.com/th/id/R.0b7db6d8279dc858726515b77139e0be?rik=U3lq3kOTjgOkgw&pid=ImgRaw&r=0"
    alert ("American Expresso🍵")
} else {
    // alert("Invalid card number")
    master.src = "images/card-logo.svg"
}

}
// document.getElementById("cardNo").addEventListener('keydown', function (event) {
//     if (event.keyCode === 32) {
//         event.preventDefault();
//     }
//     cardNum();
// });
    function cvv() {
          var CVV = document.getElementById("CVC").value;
  document.querySelector(".cvc").innerHTML = CVV
    //     var CVV_mask = new IMask(CVV,{
    //     mask: '000'
        
    //    })
}
        
    function MO(params) {
        var month = document.getElementById("month").value
        document.querySelector(".card-month").textContent = month  
    }

    function YE(params) {
        var year = document.getElementById("year").value
        document.querySelector(".card-year").textContent = year
    
        var yearInput = document.getElementById("year");
        yearInput.setAttribute("min", "24");
    }


        cardForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var validInputs = true;
            var inputs = cardForm.getElementsByTagName('input');
            for (var i=0; i < inputs.length; i++) {
                if (!inputs[i].validity.valid) {
                    validInputs = false;
                    break;
                }

                if (validInputs) {
                    document.querySelector(".success").style.display = 'block';
                    cardForm.style.display = "none";
                    }
                }
        })


        continueButton.addEventListener('click', function (params) {
            cardForm.style.display = "block"
            cardForm.reset();
            document.querySelector(".card-name").textContent = "Jane Appleseed"
            document.querySelector(".card-month").textContent = "00"
            document.querySelector(".card-year").textContent = "00"
            master.src = "images/card-logo.svg"
            document.querySelector(".cvc").textContent = "000"
            document.querySelector(".card-number").textContent = "0000 0000 0000 0000"
            document.querySelector(".success").style.display = "none"
        });
    //Add a MasterCard validation into this credit card form
    // var mastercardPattern = /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;
      
    // function validateMasterCard() {
        //     var number = document.getElementById("cardNo").value;
        //     if (!mastercardPattern.test(number)) {
        //         alert ("Please enter valid Master Card Number!");
                
        //          return false;
        //     } else {
        //         master.src = "https://logolook.net/wp-content/uploads/2021/07/Mastercard-Logo-1979.png";
        //         return true;
        //         }
        //         };
                //Add an Amex validation into this credit card form
                // var amexPattern = /^3[47][0-9]{5}[0-9]{6}$/;
                // function validateAmex() {   
                //     var number = document.getElementById("cardNo").value;
                //     if (!amexPattern.test(number)) {
                //         alert("Invalid AMEX card number! Please try again.");
                //         return false;
                //         } else {
                         
                //             return true;
                            
                //             }
                           

                
                // }