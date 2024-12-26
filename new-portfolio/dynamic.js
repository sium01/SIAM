const textElement = document.getElementById("text");
    const textToType = "Hello, I'm Sohail Hazary Siam! Wellcome To My Portfolio!";
    let index = 0;


    function typeText() {
      if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100);  
      } else {
        
        setTimeout(() => {
          textElement.textContent = "";  
          index = 0;  
          typeText();  
        }, 3000); 
      }
    }

  
    typeText();