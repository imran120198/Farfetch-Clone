
    var data = [
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3520268/data/c27e5a1f460423edd607b0d489ffff0e.jpg?ratio=3x4_three-columns&minWidth=409",
            name:"THE JOY OF SETS",
            itemName:"Co-ords from Nicholas Daley and more",
          
        },
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3520288/data/5deeed879b095aeca944d97d91ae3e54.jpg?ratio=3x4_three-columns&minWidth=480",
            name:"MARNI",
            itemName:"This way for bold color",
           
        },
        {
            imgUrl:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3520310/data/432bca2dc6ef3c94c4ec6f6578396603.jpg?ratio=3x4_three-columns&minWidth=409",
            name:"DSQUARED2",
            itemName:"Dean and dan Caten's unmistakable styles",
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
        document.querySelector("#container2").append(div);
      
        
        
    });
    
    