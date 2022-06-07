let bal = document.getElementById("wallet_balance")
  let user_obj = JSON.parse(localStorage.getItem("user"))
  bal.innerText = user_obj.wallet
  let cont = document.getElementById("purchased_vouchers")
  let arr = JSON.parse(localStorage.getItem("purchase"))||[]
  append(arr)

function append(data){
  data.forEach((el) =>{
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.image;
    let p1 =document.createElement("p")
    p1.innerText = el.name
    let p2 = document.createElement("p")
    p2.innerText = el.price;
    div.append(img,p1,p2)
    cont.append(div)
  })
}