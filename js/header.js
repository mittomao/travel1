$(function () { 
     new Glide('#glide1', {
        type : 'carousel',
        startAt: 0,
        animationTimingFunc : 'ease-in-out',
        gap:100,
        perView: 3
      }).mount();


      const prevBtn = document.querySelector("#prevGlide");
      const nextBtn = document.querySelector("#nextGlide");
      const glideSlides = document.querySelectorAll(".glide__slide");
      const lineIndexs = document.querySelectorAll(".index");
      const background = document.querySelector(".background img");

      const listBg = ["b5.jpg","b2.jpg","b6.jpg","b7.jpg","b8.jpg"];

      // const myAnimation1 = new hoverEffect({
      //   parent: document.querySelector('.background'),
      //   intencity : 0.9,
      //   image1: `img/Banner/${listBg[0]}`,
      //   image2: `img/Banner/${listBg[1]}`,
      //   displacementImage: 'img/Banner/b7.jpg',
      //   hover : false
      // });
      // const myAnimation2 = new hoverEffect({
      //   parent: document.querySelector('.background'),
      //   intencity : 0.9,
      //   image1: `img/Banner/${listBg[1]}`,
      //   image2: `img/Banner/${listBg[2]}`,
      //   displacementImage: 'img/Banner/b7.jpg',
      //   hover : false
      // });
      // const myAnimation3 = new hoverEffect({
      //   parent: document.querySelector('.background'),
      //   intencity : 0.9,
      //   image1: `img/Banner/${listBg[2]}`,
      //   image2: `img/Banner/${listBg[3]}`,
      //   displacementImage: 'img/Banner/b7.jpg',
      //   hover : false
      // });
      // const myAnimation4 = new hoverEffect({
      //   parent: document.querySelector('.background'),
      //   intencity : 0.9,
      //   image1: `img/Banner/${listBg[3]}`,
      //   image2: `img/Banner/${listBg[4]}`,
      //   displacementImage: 'img/Banner/b7.jpg',
      //   hover : false
      // });
      // const myAnimation5 = new hoverEffect({
      //   parent: document.querySelector('.background'),
      //   intencity : 0.9,
      //   image1: `img/Banner/${listBg[4]}`,
      //   image2: `img/Banner/${listBg[0]}`,
      //   displacementImage: 'img/Banner/b7.jpg',
      //   hover : false
      // });


      // const displayBg = [
      //   myAnimation1,
      //   myAnimation2,
      //   myAnimation3,
      //   myAnimation4,
      //   myAnimation5
      // ];

      prevBtn.addEventListener("click",handlePrev);
      nextBtn.addEventListener("click",handleNext);

      let currentIndex = 0;

      function handlePrev() { 
        removeActive(lineIndexs);
        currentIndex--;
        
        if(currentIndex < 0) {
          currentIndex = lineIndexs.length-1;
        }
        lineIndexs[currentIndex].classList.add("active");
        showTitle("prev");

        background.setAttribute("src",`img/Banner/${listBg[currentIndex]}`);

        // displayBg[currentIndex].next();
      //   setTimeout(() => {
      //     let canvas = background.querySelectorAll("canvas");
      //     background.insertBefore(canvas[canvas.length-1] , background.firstChild);
      //     displayBg[currentIndex].previous();
      // }, 1000);
       
      }

      function handleNext() { 
        let prevIndex = currentIndex;
        removeActive(lineIndexs);
        currentIndex = (currentIndex + 1) % lineIndexs.length;
        lineIndexs[currentIndex].classList.add("active");
        showTitle("next");

        background.setAttribute("src",`img/Banner/${listBg[currentIndex]}`);


        // displayBg[prevIndex].next();
        // setTimeout(() => {
        //     let canvas = background.querySelectorAll("canvas");
        //     background.appendChild(canvas[0]);
        //     displayBg[prevIndex].previous();
        // }, 1200);
      }
      function removeActive(tabs) {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
      }


      // Title , Description

      let titleD = 0;
      let descriptD = 0;

      function showTitle(type) {
        const titles = document.querySelectorAll(".text-title h4");
        const texts = document.querySelectorAll(".description p");

        const titlesLenght = -120*(titles.length -1);
        const textsLenght = -85*(texts.length -1 );
        if(titleD === 0 && type === "prev")
        {
          titleD = titlesLenght;
        }
        else if(titleD === titlesLenght && type === "next") {
          titleD = 0;
        }
        else {
          titleD = (type ==="next") ? titleD - 120 : titleD + 120;
        }

        

        // Desciption 
        if(descriptD === 0 && type === "prev")
        {
          descriptD = textsLenght;
        }
        else if(descriptD === textsLenght && type === "next") {
          descriptD = 0;
        }
        else {
          descriptD = (type ==="next") ? descriptD - 85 : descriptD + 85;
        }
 
        titles.forEach(title => {
          TweenMax.to(title , 1 ,{
            top : `${titleD}px`,
            ease : Strong.easeInOut
          })
        });
        texts.forEach((text,index) => {
          let opacity = 0;
          if(index === currentIndex)
          {
            opacity = 1;
          }
          else{
            opacity = 0;
          }
          TweenMax.to(text , 1 ,{
            top : `${descriptD}px`,
            ease : Strong.easeInOut,
            opacity : opacity
          })
        });


        
      }
      

}); 