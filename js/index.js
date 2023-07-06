window.onload = function () {
    var big_roll_time = 3000
    var small_roll_time = 10000
    var box = this.document.getElementById("bigpic");
    var lik = box.getElementsByTagName("li");
    function big_pic_roll(form_id, to_id) {
        lik[form_id].className = "bigpichidden"
        lik[to_id].className ="bigpicshow"
    }
    function small_pic_roll(form_id, to_id) {

    }
    big_pic_roll(8, 0);
    var i = 0;
    function auto() {
        if (++i >= 9) {
            i = 0;
            fun(0, 4);
        }
        else fun(i, i - 1);
    }
    //timer = this.setInterval(auto, 2000);
    big_timer = this.setInterval(big_pic_roll, big_roll_time)
    box.onmouseover = function () { 
        // console.log('good');
        clearInterval(timer);
    }
    box.onmouseout = function () { 
        timer = setInterval(auto, big_roll_time); 
    }
    // big_timer = this.setInterval(big_pic_roll, big_roll_time)
    // small_timer = this.setInterval()
}