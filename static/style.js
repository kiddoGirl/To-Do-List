document.addEventListener('DOMContentLoaded',function(){

    //delete note

    const list = document.querySelector("#list-box ul");
    list.addEventListener('click',function(e){
        if(e.target.className == 'span-btn'){
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });

    //add note

    const addnote = document.forms['add-note'];
    addnote.addEventListener('submit',function(e){
        e.preventDefault();
        const value = addnote.querySelector('input[type="text"]').value;


        const li = document.createElement('li');
        const notename = document.createElement('span');
        const spanbtn = document.createElement('span');

        spanbtn.textContent = 'Delete';
        notename.textContent = value;

        notename.classList.add('name');
        spanbtn.classList.add('span-btn');

        li.appendChild(notename);
        li.appendChild(spanbtn);
        list.appendChild(li);
        addnote.querySelector('input[type="text"]').value="";
    });

    //search note

    const searchbox = document.forms['search-box'].querySelector('input');
        searchbox.addEventListener('keyup',function(e){ 
            const term = e.target.value.toLowerCase(); 
            const books = list.getElementsByTagName('li'); 
            Array.from(books).forEach(function(book){   
                const title = book.firstElementChild.textContent;  
                if(title.toLowerCase().indexOf(term)!=-1){
                    book.style.display = 'block';  
                }else{
                    book.style.display = 'none';  
                }
            });
        });

    //hide notes

    const hideBox = document.querySelector('#hide');
        hideBox.addEventListener('change',function(e){
            if(hideBox.checked){
                list.style.display="none";
            }else{
                list.style.display="initial";
            }
        });

});


