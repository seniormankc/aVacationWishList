(function(){
  var firstform=document.getElementById('form')
  firstform.addEventListener('submit',handlefornsubmit)

  function handlefornsubmit(e){
     e.preventDefault()

     destinatin_name=e.target.elements['name'].value
     destinatin_location=e.target.elements['location'].value
     destinatin_photo=e.target.elements['photo'].value
     destinatin_descrip=e.target.elements['description'].value

     
     for(var i=0;i<firstform.length;i++){
        firstform.elements[i].value=''
     }
    //run a function that creates card
    var destcard=createdestinationcard(destinatin_name,destinatin_location,destinatin_photo,destinatin_descrip)

     var wishlistcontainer=document.getElementById('destination-container')
     if(wishlistcontainer.children.length===0){
        document.getElementById("title").innerText='my wish list'
     }

   //add the card
   document.getElementById("destination-container").appendChild(destcard)
  }
 
     
  
 
    

  function createdestinationcard(name,location,photourl,description){
    var card=document.createElement('div')
    card.className='card'

    var img=document.createElement('img')
    img.setAttribute('alt',name) 
    img.className='img'
    card.appendChild(img)

    var constantphotourl='images/fourseason london.webp'
    if(photourl.length==0){
         img.setAttribute('src',constantphotourl)
    }
    else{
         img.setAttribute('src',photourl) 
    }

    var cardbody=document.createElement('div')
    cardbody.className='cardbody'

    var h3=document.createElement('h3')
    h3.className='h33'
    h3.innerText=name
    cardbody.appendChild(h3)

    var h4=document.createElement('h4')
    h4.className='h44'
    h4.innerText=location
    cardbody.appendChild(h4)

    if(description.length !== 0 ){
        var p=document.createElement('p')
        p.className="card-test"
        p.innerText=description 
        cardbody.appendChild(p)
    }

    var deletebtn=document.createElement('button')
    deletebtn.innerText='remove'
    deletebtn.addEventListener('click',removedestination)
    cardbody.appendChild(deletebtn)
   
    card.appendChild(cardbody)
    return card

  }
  function removedestination(event){
   var card=event.target.parentElement.parentElement;
   card.remove()
  }
}())