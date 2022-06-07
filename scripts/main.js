let btn = document.getElementById("submit")
btn.addEventListener("click",submit)

function UserObj(n,e,a,amt){
  this.name = n;
  this.emial = e;
  this.address = a;
  this.wallet = amt;
}

function submit(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let amt = document.getElementById("amount").value;
  let u = new UserObj(name,email,address,amt)
  localStorage.setItem("user",JSON.stringify(u))
  document.getElementById("name").value= "";
  document.getElementById("email").value= "";
  document.getElementById("address").value= "";
  document.getElementById("amount").value= "";
  alert("SignUp Successful")
  window.location.href = "voucher.html"
}