


    var data = [
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/37/84/42/18378442_39411723_1000.jpg",
            brand:"New Season",
            name:"Jacqemus",
            itemName:"contrast-stitch detail denim jacket",
            price:"$923",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/35/22/24/18352224_39283759_600.jpg",
            brand:"New Season",
            name:"Isabel Marant",
            itemName:"Olga wide-leg trousers",
            price:"$944",
           
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/36/42/73/18364273_4a092326-c65e-421f-a92e-db89796f5846_600.jpg",
            brand:"New Season",
            name:"Maison Margiela",
            itemName:"lace-trim silk slip dress",
            price:"$1505",
          
        },
        {
            imgUrl:"https://cdn-images.farfetch-contents.com/18/35/50/24/18355024_39369607_600.jpg",
            brand:"New Season",
            name:"Saint Laurent",
            itemName:"medium Niki shoulder bag",
            price:"$4420",
           
        }
    ]
    
    
    
    data.map(function(elem) {
        
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        
        var image = document.createElement("img");
        image.setAttribute("src",elem.imgUrl);
        
        
        var brand = document.createElement("p");
        brand.textContent = elem.brand;
        
        var name = document.createElement("h4");
        name.textContent = elem.name;
        
        var itemName = document.createElement("p");
        itemName.textContent = elem.itemName;
        
        var price = document.createElement("p");
        price.textContent = elem.price;
        
        
        var div3 = document.createElement("div");
        var btn = document.createElement("button");
        btn.textContent = "Shop Now";
        btn.addEventListener("click",function(){
            window.location.href="womensData.html"
        })
       
        div3.append(btn);
       
        
        
        div.append(image);
        div2.append(brand,name,itemName,price);
        
        div.append(div2,div3);
        document.querySelector("#container").append(div);
      
        
        
    });
    
    