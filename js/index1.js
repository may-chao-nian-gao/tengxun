window.addEventListener('load', function () {
    var pc = document.getElementById('publish-copy')
    var lis = pc.querySelectorAll('li')
    var dot = document.querySelector('.b_dot')
    var xyd = dot.querySelectorAll('a')


    for (let i = 0; i < xyd.length; i++) {
        xyd[i].addEventListener('click', function () {
            for (let j = 0; j < xyd.length; j++) {
                xyd[j].className = '';
                lis[j].style.display = 'none'
            }
            xyd[i].className = 'on'
            lis[i].style.display = 'block'
        })
    }
    let timer = setInterval(function () {
        var i = 0
        
            // xyd[i].className = ''
            // lis[i].style.display = 'none'
            // if (i < 2) {
            //     xyd[i].className = 'on'
            //     lis[i].style.display = 'block'
            // } else {
            //     xyd[i].className = 'on'
            //     lis[i].style.display = 'block'
            // }
            // i++;
           
            
        
        
        
    }, 2000)

})