let regex =" ^(?=*[a-z])(?=*[A-Z])(?=.*\d)(?=.*[@#$%^&*]){8,}$"

let password ="qwertyu245$";

let checkPwd=(pwd)=>{
    if(regex.test(pwd))console.log("success");
    else console.log("Failure");
}

checkPwd(password);


let host="http://localhost:3000";

let onSub =async(e)=>{
    let data = await fetch(`host/api/auth/user`);
    console.log(data);
}