const searchForm=document.getElementById("search_form");
const searchInput=document.getElementById("input_search");
const linkList=document.getElementById("history_linklist");
const deleteLinkBtn=linkList.getElementsByTagName("button");
let linkHistory=[];
linkHistory = JSON.parse(localStorage.getItem("link"));
if(linkHistory){
for(let item of linkHistory){
    const linkLi=document.createElement("li");
    const linkA=document.createElement("a");
    const delete_link=document.createElement("button");
    const delete_logo=document.createElement("i");
    delete_logo.classList.add("far");
    delete_logo.classList.add("fa-trash-alt");
    //delete_logo.classList.add("hidden");
    delete_logo.style.color="#CC0000";
    let name;
    delete_link.appendChild(delete_logo);
    name = item[0].replace(".com","");
    name = name.replace("www.","");
    name = name.replace("https://","");
    linkA.innerText=`${name}`;
    linkA.href=`${item[0]}`;
    linkA.target="_blank";
    linkLi.appendChild(delete_link);
    linkLi.appendChild(linkA);
    linkList.appendChild(linkLi);
}
}else{
    linkHistory=[];
}

function handleSearchInput(event){
    //event.preventDefault();
    searchForm.action=`https://${searchInput.value}`;
    let name = searchInput.value.replace(".com","");
    name = name.replace("www.","");
    
    let findLinkArr=[];
    for(let item of linkHistory){
        findLinkArr.push(item[1]);
    }
    if(findLinkArr.indexOf(name)===-1){
        greetingLink(searchInput.value);
        localStorage.setItem("link",JSON.stringify(linkHistory));
    }
    searchInput.value="";
}

function greetingLink(ele){
    const linkLi=document.createElement("li");
    const linkA=document.createElement("a");
    const delete_link=document.createElement("button");
    const delete_logo=document.createElement("i");
    delete_logo.classList.add("far");
    delete_logo.classList.add("fa-trash-alt");
    //delete_logo.classList.add("hidden");
    delete_logo.style.color="#CC0000";
    let name = ele.replace(".com","");
    name = name.replace("www.","");
    name = name.replace("https://","");
    linkA.innerText=`${name}`;
    linkA.target="_blank";
    linkA.href=`https://${ele}`;
    delete_link.appendChild(delete_logo);
    linkLi.appendChild(delete_link);
    linkLi.appendChild(linkA);
    linkList.appendChild(linkLi);
    linkHistory.push([`https://${ele}`,name]);
   
}

function handleDeleteLink(event){
    console.log(event);
}
deleteLinkBtn.addEventListener("click",handleDeleteLink)
searchForm.addEventListener("submit",handleSearchInput)