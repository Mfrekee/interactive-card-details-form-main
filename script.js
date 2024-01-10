const header = document.querySelector("header")
const master = document.querySelector(".circle")
const cardForm = document.querySelector("form")
const continueButton = document.querySelector(".success-btn")

if (window.innerWidth >= 1040) {
    //code for screen width greater than or equal to 1040 pixels goes here
    header.classList.replace("mobile", "desktop")
} else {
    // code for screens with width less than 1040px goes here
    header.classList.replace("desktop", "mobile");
}
//Adding event listener to check the window size on resize
window.addEventListener('resize', function () {
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
    document.querySelector(".card-name").innerHTML = CN;

    let cardName = document.getElementById('cardName');

    if (cardName.value === '') {
        //     cardName.value = defaultValue;
        document.getElementById('usernameError').style.display = 'block';
        document.getElementById('cardName').style.borderColor = 'red';
        document.querySelector(".card-name").textContent = "Jane Appleseed"
        // event.preventDefault();
    } else {
        document.getElementById('cardName').style.borderColor = 'purple'
        document.getElementById('usernameError').style.display = 'none';
    }
}
document.getElementById("cardName").addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');

});

function cardNum() {
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
        document.getElementById('cardNumError2').style.display = "none"
    } else if (/^(?:50[067][180]|6500)(?:[0-9]{15})$/.test(NUM)) {
        master.src = "https://pbs.twimg.com/profile_images/646404903934431232/XjeK14Sz_400x400.jpg"
        document.getElementById('cardNumError2').style.display = "none"
    } else if (/^4[0-9]{12}(?:[0-9\s]{3,4})?$/.test(NUM)) {
        master.src = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/363_Visa_Credit_Card_logo-1024.png"
        document.getElementById('cardNumError2').style.display = "none"
    } else if (/^3[47](?:[0-9]{13})$/.test(NUM)) {
        master.src = "https://th.bing.com/th/id/R.0b7db6d8279dc858726515b77139e0be?rik=U3lq3kOTjgOkgw&pid=ImgRaw&r=0"
        document.getElementById('cardNumError2').style.display = "none"
    } else {
        master.src = "images/card-logo.svg"
        document.getElementById('cardNumError2').style.display = "block"
        
}
    var cardNo = document.getElementById('cardNo').value;

    if (/[a-zA-Z]/.test(cardNo)) {
        document.getElementById('cardNo').style.borderColor = 'red';
        document.getElementById('cardNumError').style.display = 'block';
        document.querySelector(".card-number").textContent = "0000 0000 0000 0000"
    } else {
        document.getElementById('cardNo').style.borderColor = 'purple';
        document.getElementById('cardNumError').style.display = 'none';
    }


}

function cvv() {
    var CVV = document.getElementById("CVC").value;
    document.querySelector(".cvc").innerHTML = CVV

    let CVC = document.getElementById('CVC');


    if (CVC.value.length < 3) {
        //     cardName.value = defaultValue;
        document.getElementById('cvError').style.display = 'block';
        document.getElementById('CVC').style.borderColor = 'red';
    } else {
        document.getElementById('CVC').style.borderColor = 'purple'
        document.getElementById('cvError').style.display = 'none';

    }

}


function MO() {
    var month = document.getElementById("month").value
    document.querySelector(".card-month").textContent = month

    let cardMonth = document.getElementById('month');

    if (cardMonth.value === '') {
        //     cardName.value = defaultValue;
        document.getElementById('dateError').style.display = 'block';
        document.getElementById('month').style.borderColor = 'red';
        document.querySelector(".card-month").textContent = "00"
    } else {
        document.getElementById('month').style.borderColor = 'purple'
        document.getElementById('dateError').style.display = 'none';
    }
}

function YE() {
    var year = document.getElementById("year").value
    document.querySelector(".card-year").textContent = year

    var yearInput = document.getElementById("year");
    yearInput.setAttribute("min", "24");

    let cardYear = document.getElementById('year');

    if (cardYear.value === '') {
        document.getElementById('dateError').style.display = 'block';
        document.getElementById('year').style.borderColor = 'red';
        document.querySelector(".card-year").textContent = "00"
    } else {
        document.getElementById('year').style.borderColor = 'purple'
        document.getElementById('dateError').style.display = 'none';
    }
}


cardForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var validInputs = true;
    var inputs = cardForm.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].validity.valid) {
            validInputs = false;
            break;
        }

        if (validInputs) {
            document.querySelector(".success").style.display = 'block';
            cardForm.style.display = "none";     
        }


    //     if (confirm('Are you sure you want to submit the form?')) {
    //     document.querySelector(".success").style.display = 'block';
    //         cardForm.style.display = "none";     
    //      // This line cancels the default behavior
       
    // setTimeout(function () {   
        
    //             console.log('Preventing default behavior for a few seconds');
    //         }, 3000);
    //     } else{
    //         event.preventDefault();
    //     }
        
    }});


continueButton.addEventListener('click', function (event) {
    
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
