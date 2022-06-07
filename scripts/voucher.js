let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
  let bal = document.getElementById("wallet_balance")
  let user_obj = JSON.parse(localStorage.getItem("user"))
  bal.innerText = user_obj.wallet
  let getData = async () =>{
    try{
      let res = await fetch(url)
      let data = await res.json()
      console.log(data[0].vouchers)
      append(data[0].vouchers)
    }
    catch(err){
      console.log(err)
    }
  }
  let cont = document.getElementById("voucher_list")

  function append(data){
    data.forEach((el) =>{
      let div = document.createElement("div")
      let img = document.createElement("img")
      img.src = el.image;
      let p1 =document.createElement("p")
      p1.innerText = el.name
      let p2 = document.createElement("p")
      p2.innerText = el.price;
      let b = document.createElement("button")
      b.innerText = "Buy"
      b.setAttribute("class","buy_voucher")
      b.addEventListener("click",function(){
        buy(el)
      })
      div.append(img,p1,p2,b)
      cont.append(div)
    })
  }
  let arr = JSON.parse(localStorage.getItem("purchase"))||[]
  function PurchaseObj(img,n,p){
    this.image = img;
    this.name = n;
    this.price = p;
  }
  let buy = (el) =>{
    let cost = el.price;
    let wallet_bal_obj = JSON.parse(localStorage.getItem("user"))
    let avail_bal = wallet_bal_obj.wallet
    // console.log(wallet_bal_obj.wallet)
    if(avail_bal>=cost){
      alert("Hurray! purchase successful")
      avail_bal = avail_bal-cost;
      wallet_bal_obj.wallet = avail_bal;
      localStorage.setItem("user",JSON.stringify(wallet_bal_obj))
      bal.innerText = wallet_bal_obj.wallet


      let prod = new PurchaseObj(el.image,el.name,el.price)
      arr.push(prod)
      localStorage.setItem("purchase",JSON.stringify(arr))


      
    }
    else{
      alert("Sorry! insufficient balance")
    }


  }
  getData()