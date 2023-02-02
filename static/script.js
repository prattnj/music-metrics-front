/*
// noinspection ES6ConvertVarToLetConst
var SingleCombo = class {
    constructor(pizza, drink) {
        this.pizza = pizza;
        this.drink = drink;
    }
    toString() {
        return this.pizza + " Pizza, 3 GoatHorns, and a " + this.drink;
    }
    toStringCalendar() {
        return "Single Combo (" + this.pizza + ", " + this.drink + ")";
    }
};
// noinspection ES6ConvertVarToLetConst
var DoubleCombo = class {
    constructor(pizza1, pizza2, drink1, drink2) {
        this.pizza1 = pizza1;
        this.pizza2 = pizza2;
        this.drink1 = drink1;
        this.drink2 = drink2;
    }
    toString() {
        let pizzaStr;
        if (this.pizza1 === this.pizza2) {
            pizzaStr = "2 " + this.pizza1 + " Pizzas,";
        } else {
            pizzaStr = "1 " + this.pizza1 + " Pizza, 1 " + this.pizza2 + " Pizza,"
        }
        let drinkStr;
        if (this.drink1 === this.drink2) {
            drinkStr = "and 2 " + this.drink1 + "s";
        } else {
            drinkStr = "a " + this.drink1 + ", and a " + this.drink2;
        }
        return pizzaStr + " 6 GoatHorns, " + drinkStr;
    }
    toStringCalendar() {
        return "Double Combo (" + this.pizza1 + ", " + this.pizza2 + ", " + this.drink1 + ", " + this.drink2 + ")";
    }
}
// noinspection ES6ConvertVarToLetConst
var Order = class {
    sc = [];
    dc = [];
    alc_p = [];
    alc_h = [];
    alc_d = [];
    constructor(temp) {
        if (temp === null) return;
        for (let i = 0; i < temp.sc.length; i++) {
            this.addSC(new SingleCombo(temp.sc[i].pizza, temp.sc[i].drink));
        }
        for (let i = 0; i < temp.dc.length; i++) {
            this.addDC(new DoubleCombo(temp.dc[i].pizza1, temp.dc[i].pizza2, temp.dc[i].drink1, temp.dc[i].drink2));
        }
        this.alc_p = temp.alc_p;
        this.alc_h = temp.alc_h;
        this.alc_d = temp.alc_d;
    }
    addSC(single) {
        this.sc.push(single);
    }
    addDC(double) {
        this.dc.push(double);
    }
    addALCP(alcp) {
        this.alc_p.push(alcp);
    }
    addALCH(alch) {
        this.alc_h.push(alch);
    }
    addALCD(alcd) {
        this.alc_d.push(alcd);
    }
    toString() {
        let retStr = "";
        // If order is empty
        if (this.sc.length === 0 && this.dc.length === 0 && this.alc_p.length === 0 && this.alc_h.length === 0 && this.alc_d.length === 0) {
            return "Nothing to see here...";
        }
        if (this.sc.length > 0 || this.dc.length > 0) {
            retStr += "Combos:\n";
        }
        // Single Combos
        if (this.sc.length > 0) {
            for (let i = 0; i < this.sc.length; i++) {
                retStr += this.sc[i].toString() + "\n";
            }
        }
        // Double Combos
        if (this.dc.length > 0) {
            for (let i = 0; i < this.dc.length; i++) {
                retStr += this.dc[i].toString() + "\n";
            }
        }
        // A La Carte Items
        if (this.alc_p.length > 0 || this.alc_h.length > 0 || this.alc_d.length > 0) {
            if (this.sc.length > 0 || this.dc.length > 0) {
                retStr += "\n";
            }
            retStr += "A La Carte:\n";
            let counts = getALCCounts(this);
            if (counts[0] > 0) retStr += (counts[0] + "x Pepperoni Pizza\n");
            if (counts[1] > 0) retStr += (counts[1] + "x Margherita Pizza\n");
            if (counts[2] > 0) retStr += (counts[1] + "x Weekly Special Pizza\n");
            if (this.alc_h.length > 0) retStr += (this.alc_h.length + "x 3 GoatHorns\n");
            if (counts[3] > 0) retStr += (counts[2] + "x Water\n");
            if (counts[4] > 0) retStr += (counts[3] + "x Dr. Pepper\n");
            if (counts[5] > 0) retStr += (counts[4] + "x Mountain Dew\n");
            if (counts[6] > 0) retStr += (counts[5] + "x Pink Lemonade");
        }
        return retStr;
    }
    toStringCalendar() {
        let retStr = "";
        // If order is empty
        if (this.sc.length === 0 && this.dc.length === 0 && this.alc_p.length === 0 && this.alc_h.length === 0 && this.alc_d.length === 0) {
            return "Nothing to see here...";
        }
        // Single Combos
        if (this.sc.length > 0) {
            for (let i = 0; i < this.sc.length; i++) {
                retStr += this.sc[i].toStringCalendar() + "; ";
            }
        }
        // Double Combos
        if (this.dc.length > 0) {
            for (let i = 0; i < this.dc.length; i++) {
                retStr += this.dc[i].toStringCalendar() + "; ";
            }
        }
        // A La Carte Items
        if (this.alc_p.length > 0 || this.alc_h.length > 0 || this.alc_d.length > 0) {
            let counts = getALCCounts(this);
            if (counts[0] > 0) retStr += (counts[0] + "x Pepperoni Pizza, ");
            if (counts[1] > 0) retStr += (counts[1] + "x Margherita Pizza, ");
            if (counts[2] > 0) retStr += (counts[1] + "x Weekly Special Pizza, ");
            if (this.alc_h.length > 0) retStr += (this.alc_h.length + "x 3 GoatHorns, ");
            if (counts[3] > 0) retStr += (counts[2] + "x Water, ");
            if (counts[4] > 0) retStr += (counts[3] + "x Dr. Pepper, ");
            if (counts[5] > 0) retStr += (counts[4] + "x Mountain Dew, ");
            if (counts[6] > 0) retStr += (counts[5] + "x Pink Lemonade, ");
        }
        let total_length = retStr.length;
        return retStr.substring(0, total_length - 2);
    }
    isEmpty() {
        return (this.sc.length === 0 && this.dc.length === 0 && this.alc_p.length === 0 && this.alc_h.length === 0 && this.alc_d.length === 0);
    }
}

function calculateDateTime1(date, time) {
    /!*let month = calculateMonth(datetime.substring(4, 7));
    let day = datetime.substring(8, 10);
    let year = datetime.substring(11, 15);
    let date = year + "-" + month + "-" + day;
    let time = datetime.substring(16, 24);*!/
    return date + "T" + time;
}

function calculateDateTime2(time1) {
    // FUNCTION DOES NOT HANDLE ROLLING OVER INTO THE NEXT DAY
    // MADE FOR 15-MINUTE EVENTS
    let minute = parseInt(time1.substring(14, 16));
    let hour = parseInt(time1.substring(11, 13));
    minute += 15;
    if (minute > 59) {
        hour++;
        minute -= 60;
    }
    let minuteStr = minute.toString();
    if (minute === 0) minuteStr += "0";
    return time1.substring(0, 11) + hour + ":" + minuteStr + time1.substring(16);
}

function clearALCitems(order) {
    order.alc_p.splice(0, order.alc_p.length);
    order.alc_h.splice(0, order.alc_h.length);
    order.alc_d.splice(0, order.alc_d.length);
}

function clearPizzaSelections(pizzas) {
    for (let i = 0; i < pizzas.length; i++) {
        if (pizzas[i].classList.contains("pizza-selected")) {
            pizzas[i].classList.remove("pizza-selected");
        }
    }
}

function clickX(x, type, i) {
    // Remove it from the actual order
    if (type === 0) order_all.sc.splice(i, 1);
    else if (type === 1) order_all.dc.splice(i, 1);
    else if (type === 2) order_all.alc_p.splice(i, 1);
    else if (type === 3) order_all.alc_h.splice(i, 1);
    else if (type === 4) order_all.alc_d.splice(i, 1);
    updateSessionOrder();
    fancyRemove(x.parentElement.parentElement);
}

function closeColl(content, image) {
    if (content.id === "alc") updateQtys();
    content.style.maxHeight = null;
    clearPizzaSelections(pizzas);
    resetDrinks();
    image.setAttribute("style","background-image:url(\"/images/chevron-down.svg\")");
}

function createEvent(name, phone, dt1, dt2, order, price) {
    let desc = "Name: " + name + "\nPhone: " + phone + "\nOrder: " + order.toStringCalendar() + "\nPrice: $" + price;
    return {
        "event": {
            "summary": "NEW ORDER",
            "description": desc,
            "start": {
                "dateTime": dt1,
                "timeZone": "America/Denver"
            },
            "end": {
                "dateTime": dt2,
                "timeZone": "America/Denver"
            }
        }
    };
}

function decrement(qty) {
    let x = qty.innerText;
    if (x !== "0") {
        x--;
        qty.innerText = x;
    }
}

function displayEmptyList() {
    removeChildren(document.getElementById("order-list"));
    let div = document.createElement("div");
    div.innerHTML = "Nothing to see here...";
    div.style.textAlign = "center";
    document.getElementById("order-list").appendChild(div);
}

function displayItem(type, i) {
    // Create all divs with their classes and innerHTML
    let div1 = document.createElement("div");
    div1.classList.add("order-list-item");
    div1.classList.add("order-border");
    div1.style.marginBottom = "5px";
    let div1a = document.createElement("div");
    div1a.classList.add("order-list-item-desc");
    let div1a1 = document.createElement("div");
    if (type === 0) div1a1.innerHTML = "<b>Single Combo</b>";
    else if (type === 1) div1a1.innerHTML = "<b>Double Combo</b>";
    else if (type === 2) div1a1.innerHTML = "<b>A La Carte Pizza</b>";
    else if (type === 3) div1a1.innerHTML = "<b>Extra GoatHorns</b>";
    else if (type === 4) div1a1.innerHTML = "<b>Extra Drink</b>";
    let div1a2 = document.createElement("div");
    if (type === 0) div1a2.innerHTML = order_all.sc[i].toString();
    else if (type === 1) div1a2.innerHTML = order_all.dc[i].toString();
    else if (type === 2) div1a2.innerHTML = order_all.alc_p[i];
    else if (type === 3) div1a2.innerHTML = order_all.alc_h[i];
    else if (type === 4) div1a2.innerHTML = order_all.alc_d[i];
    let div1b = document.createElement("div");
    div1b.classList.add("price-x");
    let div1b1 = document.createElement("div");
    if (type === 0) div1b1.innerHTML = "$8.00";
    else if (type === 1) div1b1.innerHTML = "$15.00";
    else if (type === 2) div1b1.innerHTML = "$6.00";
    else if (type === 3) div1b1.innerHTML = "$3.00";
    else if (type === 4) div1b1.innerHTML = "$1.00";
    let div1b2 = document.createElement("div");
    div1b2.classList.add("x-button");
    div1b2.onclick = function () {
        clickX(div1b2, type, i);
    }
    // Build the family tree
    div1.appendChild(div1a);
    div1.appendChild(div1b);
    div1a.appendChild(div1a1);
    div1a.appendChild(div1a2);
    div1b.appendChild(div1b1);
    div1b.appendChild(div1b2);
    document.getElementById("order-list").appendChild(div1);
}

function displayList() {
    // Reset by removing what is already being displayed
    let order_list = document.getElementById("order-list");
    if (order_all.isEmpty()) {
        displayEmptyList();
        return;
    }
    removeChildren(order_list);
    // Add everything to the parent div one at a time
    for (let i = 0; i < order_all.sc.length; i++) {
        displayItem(0, i);
    }
    for (let i = 0; i < order_all.dc.length; i++) {
        displayItem(1, i);
    }
    for (let i = 0; i < order_all.alc_p.length; i++) {
        displayItem(2, i);
    }
    for (let i = 0; i < order_all.alc_h.length; i++) {
        displayItem(3, i);
    }
    for (let i = 0; i < order_all.alc_d.length; i++) {
        displayItem(4, i);
    }
    // Add the checkout button
    let button_box = document.createElement("div");
    button_box.classList.add("drink-order");
    button_box.classList.add("drink-order2");
    let button_actual = document.createElement("div");
    button_actual.classList.add("add-order");
    button_actual.addEventListener("click", function () {
        gotoCheckout();
    })
    button_actual.innerHTML = "CHECKOUT";
    button_box.appendChild(button_actual);
    order_list.appendChild(button_box);
}

function fancyRemove(element) {
    // make the div fade away
    let t = 40;
    let test = setInterval(function () {
        if (!element.style.opacity) {
            element.style.opacity = "1";
        }
        if (element.style.opacity > 0) {
            element.style.opacity -= "0.1";
        } else {
            element.remove();
            displayList();
            clearInterval(test);
        }
    }, t);

    setTimeout(function () {
        let order_list = document.getElementById("order-list");
        if (order_list.firstElementChild.classList.contains("drink-order")) {
            order_list.firstElementChild.remove();
            displayEmptyList();
        }
    }, (t * 11) + 1);
}

function getALCCounts(order) {
    let pep, marg, special, water, drp, dew, lemon;
    pep = 0;
    marg = 0;
    special = 0;
    water = 0;
    drp = 0;
    dew = 0;
    lemon = 0;
    for (let i = 0; i < order.alc_p.length; i++) {
        if (order.alc_p[i] === "Pepperoni") pep++;
        if (order.alc_p[i] === "Margherita") marg++;
        if (order.alc_p[i] === "Weekly Special") special++;
    }
    for (let i = 0; i < order.alc_d.length; i++) {
        if (order.alc_d[i] === "Water") water++;
        if (order.alc_d[i] === "Dr. Pepper") drp++;
        if (order.alc_d[i] === "Mountain Dew") dew++;
        if (order.alc_d[i] === "Pink Lemonade") lemon++;
    }
    return [pep, marg, special, water, drp, dew, lemon];
}

function gotoCheckout() {
    updateSessionOrder();
    window.location.href = 'checkout.html';
}

function increment(qty) {
    let x = qty.innerText;
    if (x !== "9") {
        x++;
        qty.innerText = x;
    }
}

function notify(str) {
    document.getElementById("notifyType").innerText = str;
    document.getElementById("notify").classList.add("notify-active");

    // Time the notification to only last a given number of milliseconds
    setTimeout(function(){
        document.getElementById("notify").classList.remove("notify-active");
    },2000);
}

function placeOrder(order, price) {
    // Gather data and validate it
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("flatpickr").value;
    let time = document.getElementById("time-select").value;
    if (!fname || !lname || !phone || !date || time === "0") {
        notify("Please fill out all fields.");
        return;
    }
    if (!validatePhone(phone)) {
        notify("Please enter a valid phone number.");
        return;
    }

    // Create event and post it to goathousepizza@gmail.com's primary Google calendar
    let fullname = fname + " " + lname;
    let datetime1 = calculateDateTime1(date, time);
    let datetime2 = calculateDateTime2(datetime1);
    let event = createEvent(fullname, phone, datetime1, datetime2, order, price);
    let success = true;
    fetch('https://goathousepizza.azurewebsites.net/api/GHP-HttpTrigger', {
        method: 'POST',
        body: JSON.stringify(event)
    }).then(r => console.log(r)).catch(function () {
        success = false;
        popup(success, datetime1);
    });
    if (!success) return;

    // Show modal confirming order
    popup(success, datetime1);
}

function popup(success, datetime) {
    let dt = reverseDateTime(datetime)
    let header;
    let msg;
    if (success) {
        header = "Success!";
        msg = "Order placed!\nPick up your order at 221 W 2230 N, Provo, UT at " + dt;
    } else {
        header = "An error occurred...";
        msg = "There's been an error on our end, please call us to place your order. Sorry!"
    }

    document.getElementById("exampleModalLongTitle").innerHTML = header;
    document.getElementById("modal-body").innerHTML = msg;
    let modal = $("#exampleModalCenter");
    modal.modal('show');
    modal.on('hidden.bs.modal', function () {
        window.location.replace('index.html');
    })
}

function removeChildren(element) {
    if (element.children.length < 1) return;
    for (let i = element.children.length - 1; i > -1; i--) {
        element.children[i].remove();
    }
}

function resetDrinks() {
    let slc = document.getElementsByClassName("slc");
    for (let i = 0; i < slc.length; i++) {
        slc[i].value = 0;
    }
}

function updateQtys() {
    const currCt = getALCCounts(order_all);
    document.getElementById("qty-pep").innerHTML = currCt[0].toString();
    document.getElementById("qty-marg").innerHTML = currCt[1].toString();
    document.getElementById("qty-special").innerHTML = currCt[2].toString();
    document.getElementById("qty-horns").innerHTML = order_all.alc_h.length.toString();
    document.getElementById("qty-water").innerHTML = currCt[3].toString();
    document.getElementById("qty-drp").innerHTML = currCt[4].toString();
    document.getElementById("qty-dew").innerHTML = currCt[5].toString();
    document.getElementById("qty-lem").innerHTML = currCt[6].toString();
}

function resizeCheckout() {
    if (window.innerWidth < 750) {
        document.getElementById("title").style.fontSize = "30px";
        document.getElementById("checkout-main").style.width = "80%";
    } else {
        document.getElementById("title").style.fontSize = "48px";
        document.getElementById("checkout-main").style.width = "35%";
    }
}

function resizeHome() {
    if (window.innerWidth < 900) {
        document.getElementById("header-text").style.fontSize = "250%";
    } else {
        document.getElementById("header-text").style.fontSize = "400%";
    }
}

function resizeOrder() {
    const menu_items = document.getElementsByClassName("menu-item");
    const menu_descriptions = document.getElementsByClassName("menu-description");
    const pizza_pics = document.getElementsByClassName("pic-actual");
    const pizza_descs = document.getElementsByClassName("select-p-desc");

    if (window.innerWidth < 900) {
        document.getElementById("list-group").style.width = "80%";
        document.getElementById("title").style.fontSize = "30px";
        document.getElementById("sc_drinks").style.justifyContent = "space-between";
        document.getElementById("dc_drinks").style.justifyContent = "center";
        for (let i = 0; i < menu_items.length; i++) {
            menu_items[i].style.fontSize = "21px";
            menu_descriptions[i].style.fontSize = "12px";
        }
        for (let i = 0; i < pizza_pics.length; i++) {
            pizza_pics[i].style.height = "90px";
            pizza_descs[i].style.fontSize = "11px";
        }
    } else {
        document.getElementById("list-group").style.width = "50%";
        document.getElementById("title").style.fontSize = "48px";
        document.getElementById("sc_drinks").style.justifyContent = "space-between";
        document.getElementById("dc_drinks").style.justifyContent = "space-between";
        for (let i = 0; i < menu_items.length; i++) {
            menu_items[i].style.fontSize = "26px";
            menu_descriptions[i].style.fontSize = "14px";
        }
        for (let i = 0; i < pizza_pics.length; i++) {
            pizza_pics[i].style.height = "150px";
            pizza_descs[i].style.fontSize = "15px";
        }
    }
}

function reverseDateTime(datetime) {
    // FORMAT: "2022-08-20T19:30:00" => "7:30 PM on 8/20/2022"
    let year = datetime.substring(0, 4);
    let month = datetime.substring(5, 7);
    let day = datetime.substring(8, 10);
    let hour = datetime.substring(11, 13);
    let minute = datetime.substring(14, 16);
    let ampm = "AM";

    if (month[0] === "0") month = month.substring(1);
    if (day[0] === "0") day = day.substring(1);
    if (hour[0] === "0") hour = hour.substring(1);
    else if (hour > 12) {
        hour-= 12;
        ampm = "PM";
    }

    return hour + ":" + minute + " " + ampm + " on " + month + "/" + day + "/" + year;
}

function updateSessionOrder() {
    sessionStorage.order = JSON.stringify(order_all);
}

function validatePhone(number) {
    let re = /^\+?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4}$/im;
    return re.test(number);
}*/

function authenticate() {

    let client_id = '8b99139c99794d4b9e89b8367b0ac3f4'
    let redirect_uri = 'https://musicmetrics.app/stats/'
    let state = Math.floor(Math.random() * 10000000) // random 7 digit number
    sessionStorage.setItem('state', state.toString())
    let scope = 'user-read-playback-state ' +
        'playlist-read-private ' +
        'playlist-read-collaborative ' +
        'user-follow-read ' +
        'user-read-currently-playing ' +
        'user-read-playback-position ' +
        'user-read-email ' +
        'user-top-read ' +
        'user-read-recently-played ' +
        'user-read-private ' +
        'user-library-read'

    let url = 'https://accounts.spotify.com/authorize'
    url += '?response_type=token'
    url += '&client_id=' + encodeURIComponent(client_id)
    url += '&scope=' + encodeURIComponent(scope)
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri)
    url += '&state=' + encodeURIComponent(state)

    window.location = url;

}

function storeAuthInfo(url) {
    url = url.replace('#', '?')

    const urlParams = new URLSearchParams(new URL(url).search)

    if (!urlParams.has('state')) return;
    if (!urlParams.has('error')) {
        const access_token = urlParams.get('access_token')
        const token_type = urlParams.get('token_type')
        const expires_in = urlParams.get('expires_in')
        sessionStorage.setItem('access_token', access_token)
        sessionStorage.setItem('token_type', token_type)
        sessionStorage.setItem('expires_in', expires_in)
    } else {
        const error = urlParams.get('error')
        sessionStorage.setItem('error', error)
    }

}

function validateState(url) {
    const urlParams = new URLSearchParams(url)
    const stored_state = sessionStorage.getItem('state')
    if (!urlParams.has('state') || stored_state == null) return false;
    return stored_state === urlParams.get('state')
}
