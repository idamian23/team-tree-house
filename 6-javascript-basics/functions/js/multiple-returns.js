function isFieldEmpty(){
    const field = document.querySelector('#info');
    if(!field.value){
       return true;
    }else{
        return false;
    }
}

let validation = isFieldEmpty();

if(validation){
    alert("Please provide data!");
}else {
    alert("good boy!");
}
