window.onload = function () {
    var big_roll_time = 3000;
    var small_roll_time = 10000;

    var bigBox = document.getElementById("bigpic");
    var smallBox = document.getElementById("smallpic");

    var bigLik = bigBox.getElementsByTagName("li");
    var smallLik = smallBox.getElementsByTagName("li");

    function picRoll(box, lik, from_id, to_id) {
        lik[from_id].className = box + "pichidden";
        lik[to_id].className = box + "picshow";
    }

    var big_i = 0;
    var small_i = 0;

    function auto(box, lik, index) {
        index++;
        if (index == lik.length) {
            picRoll(box, lik, lik.length - 1, 0);
            index = 0;
        } else {
            picRoll(box, lik, index - 1, index);
        }

        return index;
    }

    var bigTimer = setInterval(function () {
        big_i = auto("big", bigLik, big_i);
    }, big_roll_time);

    var smallTimer = setInterval(function () {
        small_i = auto("small", smallLik, small_i);
    }, small_roll_time);

    bigBox.onmouseover = function () {
        clearInterval(bigTimer);
    };

    bigBox.onmouseout = function () {
        bigTimer = setInterval(function () {
            big_i = auto("big", bigLik, big_i);
        }, big_roll_time);
    };

    smallBox.onmouseover = function () {
        clearInterval(smallTimer);
    };

    smallBox.onmouseout = function () {
        smallTimer = setInterval(function () {
            small_i = auto("small", smallLik, small_i);
        }, small_roll_time);
    };
};
