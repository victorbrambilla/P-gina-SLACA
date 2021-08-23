function menuToggle(){
    let nav= document.querySelector('nav')
    if(nav.style.display== 'inline-block'){
        nav.style.display='none';
    }else{
        nav.style.display='inline-block';
        

    }
}


function discussion(){
    let discussion= document.querySelector('end--resume2')
    if(discussion.style.display== "none"){
        discussion.style.display='flex';
        document.querySelector('end--resume').style.display='none';
    }else{
        discussion.style.display='none';
        document.querySelector('end--resume').style.display='flex';
        

    }
}