let col3= document.querySelectorAll('.col-4 img')


col3.forEach(item =>{

     item.addEventListener('click' , (e)=>{

             item.parentNode.classList.add('disparition')
             item.classList.remove('disparition')
     })
         
})

