const div1 = document.getElementById("authors");
const div2 = document.getElementsByClassName("author");

const button = document.getElementById("button");
button.addEventListener("click",((event)=>{
    const getAuthors = fetch(`https://fakerestapi.azurewebsites.net/api/v1/Authors`)
    .then(response =>{ return response.json()})
    .then(result => {
            
            for (let author =0 ; author < 10 ; author++){                
                div1.insertAdjacentHTML ('beforeend',`
                <div class="author">
                    <h3>${result[author].firstName} ${result[author].lastName}</h3>
                    <h4>Book ID {${result[author].idBook}}</h4>
                    <button class="button">Delete</button>
                </div>
                `)
                document.getElementsByClassName('author')[author].style.border="red solid 1px";
            }   
           
    });
    button.disabled = true;
}))

div1.addEventListener('click',((event)=>{
    if(event.target.nodeName == "BUTTON"){
        event.target.parentNode.remove();
        
    };
}))
