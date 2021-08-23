function menuToggle(){
    let nav= document.querySelector('nav')
    if(nav.style.display== 'inline-block'){
        nav.style.display='none';
    }else{
        nav.style.display='inline-block';
        

    }
}


function discussion(){
    let discussion= document.querySelector(".resume2")
        discussion.style.display='flex';
        document.querySelector('.end--resume').style.display='none';
    
        


    
}

function discussion2(){
    let discussion2= document.querySelector(".resume3")
        document.querySelector('.resume2').style.display='none';
        discussion2.style.display="flex";
      

}


function discussion3(){
    document.querySelector('.resume3').style.display='none';
    document.querySelector('.end--resume').style.display='flex';
    

}