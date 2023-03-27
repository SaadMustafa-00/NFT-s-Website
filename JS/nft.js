
let collectionbtn=document.getElementById('collection-btn');
let collectiondiv=document.getElementById('collection-div');

let listingbtn=document.getElementById('listing-btn');
let listingdiv=document.getElementById('listing-div');

collectionbtn.addEventListener('click' , ()=>{
    if(collectiondiv.style.display!='none'){
        collectiondiv.style.display=`none`;  
        collectionbtn.style.borderBottom='none';
        listingbtn.style.borderBottom='4px solid black';
        listingdiv.style.display=`block`;
    }
    else{
        collectiondiv.style.display=`block`;
        listingdiv.style.display=`none`;  
        collectionbtn.style.borderBottom='4px solid black'
        listingbtn.style.borderBottom='none';
    }
})
      
      
      
        let clock=document.getElementById('clock');
        let close1=document.getElementById('close1');
        let popup1=document.getElementById('popup-1');
        let element=document.getElementById('html');


        let search=document.getElementById('search');
        let close2=document.getElementById('close2');
        let popup2=document.getElementById('popup-2');

        let wallet=document.getElementById('wallet');
        let close3=document.getElementById('close3');
        let popup3=document.getElementById('popup-3');


      
        


        clock.addEventListener('click' , ()=>{
            if(popup1.style.display!='none'){
                popup1.style.display=`none`;
                element.style.opacity = "1";
            }
            else{
                popup1.style.display=`block`;
                popup1.style.opacity = "1";
                element.style.opacity = "0.5";
            }
        })
        close1.addEventListener('click' , ()=>{
            if(popup1.style.display!='none'){
                popup1.style.display=`none`;
                popup1.style.opacity = "0.5";
                element.style.opacity = "1";
            }
            else{
                popup1.style.display=`block`;
            }
        })


        search.addEventListener('click' , ()=>{
            if(popup2.style.display!='none'){
                popup2.style.display=`none`;
                element.style.opacity = "1";
            }
            else{
                popup2.style.display=`block`;
                popup2.style.opacity = "1";
                element.style.opacity = "0.5";
            }
        })
        close2.addEventListener('click' , ()=>{
            if(popup2.style.display!='none'){
                popup2.style.display=`none`;
                popup2.style.opacity = "0.5";
                element.style.opacity = "1";
            }
            else{
                popup2.style.display=`block`;
            }
        })
        

        wallet.addEventListener('click' , ()=>{
            if(popup3.style.display!='none'){
                popup3.style.display=`none`;
                element.style.opacity = "1";
            }
            else{
                popup3.style.display=`block`;
                popup3.style.opacity = "1";
                element.style.opacity = "0.5";
            }
        })
        close3.addEventListener('click' , ()=>{
            if(popup3.style.display!='none'){
                popup3.style.display=`none`;
                popup3.style.opacity = "0.5";
                element.style.opacity = "1";
            }
            else{
                popup3.style.display=`block`;
            }
        })
  