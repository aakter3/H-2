const innerSearch = document.getElementById("searchbox");
const btnclick = document.getElementById("btnclick");
 
let getProdect = document.getElementById("Items"); //moved to top to have global scope
let getArray ='';


fetch("https://fakestoreapi.com/products?limit=10")
.then((request)=> request.json())
.then((productLIST) =>{
    getArray = productLIST;
    productLIST.map((obj) => {ProductAdd(obj)});
});

btnclick.onclick = () => { 
    getProdect.innerHTML =''; //move outside of for loop
    for(let i =0; i<getArray.length; i++){
        if(getArray[i].title.toLowerCase().includes(innerSearch.value)){
            ProductAdd(getArray[i]);
        }
    }
};

function buttonChange(event){
    let btn = event.target;
    let btnClass = btn.getAttribute("class");
    if(btnClass =="btn btn-outline-secondary"){
        btn.innerHTML ="dismissed";
        btn.setAttribute("class", "btn btn-outline-danger");
    } else{
        btn.innerHTML ="dismiss";
        btn.setAttribute("class", "btn btn-outline-secondary");
    }
}

function ProductAdd(productLIST){
    let stringProduct =`
    <div class="row">
    <div class="col-md-7">
        <h2> ${productLIST.title}</h2>
        <div> <b>Price:</b> $ ${productLIST.price}</div>
        <p> <b>Description:</b> ${productLIST.description}</p>
        <div><b>Category:</b> ${productLIST.category}</div>
        <div class="my-3">
        <button  class= "btn btn-outline-secondary" onclick="buttonChange(event)">Dismiss </button>
        </div>
    </div>
    <div class="col-md-5">
        <img src ="${productLIST.image}" alt ="${productLIST.title}">
    </div>
</div> 
<hr />

<br>
</div> `;
getProdect.innerHTML+=stringProduct;
}
