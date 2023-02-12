const input = document.getElementsByTagName('input');
const inputValue = document.getElementById('input').value
const add = document.querySelector('.add')
const text = document.querySelector('.to-do')
const flex = document.querySelector('.flex')



function toDo(){
    add.addEventListener('click',function(e){
       if(document.querySelector('#input').value.length === 0){
        alert('Please input your text')
       }else{
        document.querySelector('.to-do-flex').innerHTML += `
    <div class="flex">
        <p class="to-do">${document.querySelector('#input').value}</p>

        <ion-icon class="delete" name="trash-bin-outline"></ion-icon>
    </div>`;
    const del = document.querySelectorAll('.delete')
    for(let i = 0; i < del.length; i++){
        del[i].onclick = function(){
            this.parentNode.remove()
        }
    }
       }
    })
}
toDo()