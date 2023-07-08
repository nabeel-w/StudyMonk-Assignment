const search=document.getElementById("search");
const searchButton=document.getElementById("search-button")
const tableContent=document.getElementsByClassName("table-body-content");
const expirence=document.getElementById("experince")

searchButton.addEventListener("click",()=>{
    let filter=search.value.toUpperCase();
    for (let index = 0; index < tableContent.length; index++) {
        const element = tableContent[index].getElementsByClassName("searchable");
        if(element[0].innerHTML.toUpperCase().indexOf(filter)>-1||element[1].innerHTML.toUpperCase().indexOf(filter)>-1){
            console.log("found",tableContent[index]);
            tableContent[index].style.display= '';
        }else{
            tableContent[index].style.display= 'none';
        }
    }
});
