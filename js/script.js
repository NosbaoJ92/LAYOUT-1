var btn = document.querySelector('#imagehover');
var left= document.querySelector('.left-side-texts');
var leftside = document.querySelector('.left-side')

btn.addEventListener('mouseover', function() {
    if(left.style.display === 'flex' && leftside.style.height === 'auto'){
        left.style.display = 'none';
        leftside.style.height = '230px';
    }else{
        left.style.display = 'flex'; 
        leftside.style.height = 'auto'; 
    }
});
btn.addEventListener('mouseout', function() {
    if(left.style.display === 'flex' && leftside.style.height === 'auto'){
        left.style.display = 'none';
        leftside.style.height = '230px';
    }else{
        left.style.display = 'flex'; 
        leftside.style.height = 'auto'; 
    }
});
