
    var data = [
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3520176/data/6a80e0edff59afdbba3113fae81e1b6c.jpg?ratio=3x4_three-columns&minWidth=409",
            name:"THE STREETWEAR EDIT",
            itemName:"Hype sneakers and top-tier brand",
          
        },
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3520196/data/b508f6a4ef786c750d9db04ec12e5cd1.jpg?ratio=3x4_three-columns&minWidth=480",
            name:"THE MINIMALIST EDIT",
            itemName:"Clean lines and pared-back styles",
           
        },
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3520216/data/e43882f2f3495785c74ee992976d3e92.jpg?ratio=3x4_three-columns&minWidth=480",
            name:"THE CULT EDIT",
            itemName:"Cutting-edge pieces and exprimental design",
        }
    ]
    
    
    
    data.map(function(elem) {
        
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        
        var image = document.createElement("img");
        image.setAttribute("src",elem.imgUrl);
        
        var name = document.createElement("p");
        name.textContent = elem.name;
        
        var itemName = document.createElement("p");
        itemName.textContent = elem.itemName;
                        
        
        div.append(image);
        div2.append(name,itemName);
        
        div.append(div2);
        document.querySelector("#container6").append(div);
      
        
        
    });
    
    