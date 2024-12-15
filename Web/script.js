const addProduct=document.getElementById('addProduct');
const modal=document.querySelector('.modals');
addProduct.addEventListener('click',()=>{
    modal.style.display='block'
})
document.querySelector('.btncancel').addEventListener('click',()=>{
    modal.style.display='none';
})

const btnSave=document.querySelector('.btnSave');
btnSave.addEventListener('click',function(){
    const title=document.getElementById('title').value;
    const price=document.getElementById('price').value;
    const description=document.getElementById('des').value;
    const image=document.getElementById('image').files[0];  
    modal.style.display='none';
    const row=document.querySelector('.row');
    row.innerHTML+=`
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="img">
                <img src="${URL.createObjectURL(image)}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h6 class="card-title">${title}</h6>
                  <p class="card-text">${description}</p>
                  <p class="card-text float-end">Price :$ ${price}</p>
               
                </div>
              </div>
        </div>
    `;
})