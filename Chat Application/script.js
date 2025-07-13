const btn = document.querySelector("#search");
const products = document.querySelectorAll(".products .product");
const productSection = document.querySelector(".products")
const back = document.querySelector("#back");
const noProductmsg = document.createElement('p');
const add_to_cart = document.querySelectorAll("#add-cart");
const cart= document.querySelector(".cart");
const add_cart = document.querySelector(".add_cart");
const remove = document.querySelectorAll(".remove");
let cart_model=[];
noProductmsg.textContent="No product found";
noProductmsg.style.textAlign="center"
noProductmsg.style.fontSize="18px";
noProductmsg.style.display="none";
productSection.appendChild(noProductmsg);
function hide() {
    products.forEach(element=> {
        element.style.display="none"
    })
    document.querySelector("#searched-element").style.display="none"
    btn.style.display="none";

}
btn.addEventListener("click",()=> {
    let input = document.querySelector("#searched-element").value.toLowerCase();
    let productFound=false;
    if(input) {
        products.forEach(element => {
            let productName = element.querySelector('h3').textContent.toLowerCase();
            if(productName.includes(input)) {
                element.style.display="block";
                productFound=true;
                back.style.visibility="visible"
            }
            else {
                element.style.display="none"
            }
        });
        if(!productFound) {
            noProductmsg.style.display="block"
            back.style.visibility="visible"
        }
       
    }
   
})
back.addEventListener('click',()=> {
    products.forEach(product=> {
        product.style.display="block";
    })
    noProductmsg.style.display="none"
    add_cart.style.visibility="hidden"
    document.querySelector("#searched-element").value = "";
    back.style.visibility="hidden"
})
add_to_cart.forEach((button)=> {
    button.addEventListener("click",(e)=> {
        let product_container = e.target.closest(".product");
        let product_element = product_container.querySelector("h3").textContent.toLowerCase();
        alert(`${product_element} added to cart successfully `)
        cart_model.push(product_element);
    })
})
cart.addEventListener("click",(e)=> {
    e.preventDefault();
    let htmlContent = ""; // Initialize an empty string
cart_model.forEach(item => {
    htmlContent += `<p>${item}</p>`; // Add each item as a paragraph
    htmlContent += `<span class = "remove"> <img src="remove.png" alt="image-description" /> </span>`
});
add_cart.innerHTML = htmlContent;
        hide();
        back.style.visibility="visible"
        add_cart.style.visibility="visible"
    })
    