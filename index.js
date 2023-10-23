function maskpassword(pass){
    let str = ""
    for (let index = 0; index < pass.length; index++) {
        str += "*"
        
    }
    return str
}




function copytext(txt) {
    navigator.clipboard.writeText(txt).then(
        () =>{
            alert("Copied!");
        },
        () =>{
            alert("Couldn't copied");
        },
        );
    }
    
    const deletepassword = (website)=>{
        let data =localStorage.getItem("passwords")
        let arr = JSON.parse(data);   
        arrupdate = arr.filter((e)=>{
            return e.website != website
        })
        localStorage.setItem("passwords", JSON.stringify(arrupdate))
        alert(`Successfully deleted ${website}'s password`)
        showpassword()
    }

    
    // Login to fill the table data
    
    const showpassword = ()=>{
        
        
        
        let tb =document.querySelector("table")
        let data =localStorage.getItem("passwords")
        if(data == null || JSON.parse(data).length == 0){
            tb.innerHTML ="No data show "
        }
        
        else{
            tb.innerHTML=` <tr>
            <th>WebSite</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Delete</th>
            </tr>`
            let arr = JSON.parse(data);
            let str =""
            for (let index = 0; index < arr.length; index++) {
                const element = arr[index];
                
                
                
                str += `<tr>
                <td>${element.website} <img onclick="copytext('${element.website}')" src="./copy.svg" alt="Copy" width="40" height="40"></td>

                <td>${element.username} <img onclick="copytext('${element.username}')" src="./copy.svg" alt="Copy" width="40" height="40"></td>

                <td>${maskpassword(element.password)} <img onclick="copytext('${element.password}')" src="./copy.svg" alt="Copy" width="40" height="40"></td>

               <td><button class="btn" onclick="deletepassword('${element.website}')">Delete</button>
               </td>
               </tr>`
       }
       tb.innerHTML= tb.innerHTML + str
    }

       website.value =""
       username.value =""
       password.value =""




}

// console.log("Working");
showpassword()

document.querySelector(".btn").addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Clicked");
    console.log(username.value , password.value);
    let passwords = localStorage.getItem("passwords");
    console.log(passwords);
    if(passwords == null){
        let json = []
        json.push({website : website.value , username: username.value, password:password.value})
      
        localStorage.setItem("passwords", JSON.stringify(json))
        alert("password is saved successfully");
    }
    else{
      let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({website : website.value , username: username.value, password:password.value})
       
        localStorage.setItem("passwords", JSON.stringify(json))
        alert("password is saved successfully");
    }
    showpassword()
})

