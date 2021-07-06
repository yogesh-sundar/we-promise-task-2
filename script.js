function food() {
    fetch("https://foodish-api.herokuapp.com/api/")
        .then((response) => {
            return response.json();
        })
        .then((get) => {
            document.getElementById("image").src = get.image;
            
        })
        .catch((error) => {
            console.log(error);
        })
}

function submit()
{
    document.getElementById("comment").value="";
    
}