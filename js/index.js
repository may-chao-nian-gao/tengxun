window.addEventListener('load', function () {
    var cloud = document.querySelector(".cloud")
    var top_in = document.querySelector(".top_in")
    var lis = top_in.querySelectorAll("li")
    var nav = document.getElementById("nav")
    var uls2 = nav.querySelectorAll(".top-nav-li-child .set2")
    var uls = nav.querySelectorAll(".top-nav-li-child")
    // console.log(uls2);
    // var navUl = document.querySelector("#header #nav ul")

    // console.log(nav);
    for (i = 0; i < lis.length; i++) {

        lis[i].addEventListener('mouseenter', function () {
            // animate(cloud,this.offsetLeft);
            cloud.style.left = this.offsetLeft + 'px'
            cloud.style.width = this.offsetWidth + 'px'
            // console.log(uls, '++++');

        })
        lis[i].addEventListener('mouseleave', function () {
            // animate(cloud,this.offsetLeft);
            cloud.style.left = 255 + 'px'
            cloud.style.width = 69 + 'px'
            // console.log(uls[i], '----');
        })

    };
    for (let j = 0; j < uls.length; j++) {
        // console.log(uls.length,'11111');
        uls[j].addEventListener('mouseenter', function () {
            // uls[j].style.display= 'block'
            uls2[j].style.display = "block";
        })
        uls[j].addEventListener('mouseleave', function () {
            // uls[j].style.display= 'none'
            uls2[j].style.display = "none";
        })
    }


}) 