// first I'm going to get all the childrens of accordion 
let accordions = document.querySelectorAll('.accordion');
// after tshat I'll get the span inside my wrappers and I'll add event listener to it 

accordions.forEach(accordion => {
    Array.from(accordion.children).forEach(wrapper => {
        wrapper.querySelector("span").addEventListener("click" , e => {
            let span  = e.target ;
            let parent = span.parentElement ;
            let hiddenDiv  = span.nextElementSibling;
            // now I'm going to give the hidden div a class
            wrapper.classList.toggle("show");
            // in this part i'm adding the transition property
            if (wrapper.classList.contains("show")) {
                hiddenDiv.style.maxHeight += hiddenDiv.scrollHeight + 40+"px";
            } else {
                hiddenDiv.style.maxHeight = null;
            }
            Array.from(accordion.children).forEach(w => {
                if (w != wrapper) {
                    w.classList.remove("show");
                    w.querySelector('div').style.maxHeight = null;
                  
                }
            })
            
        })
    });
});



