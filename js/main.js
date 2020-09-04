const tabs = document.querySelectorAll(".tab-mains a");
const contents = document.querySelectorAll(".tab-contents__item");

tabs.forEach(tab=>{
    tab.addEventListener("click",function (e) { 
        e.preventDefault();
        removeActive(tabs);
        tab.classList.add("active");
        const id = this.getAttribute("data-id");
        removeActive(contents);
        document.querySelector(`#${id}`).classList.add("active");
     })
});

// Tab1 


const tab1s = document.querySelectorAll("#tab1 .tab_main-top a");
const content1s = document.querySelectorAll("#tab1 .tab_content1 .tab_item1");

tab1s.forEach((tab,i)=>{
    tab.addEventListener("click",function (e) { 
        e.preventDefault();
        removeActive(tab1s);
        removeActive(content1s);
        this.classList.add("active");
        content1s[i].classList.add("active");
     })
});

// Hotel

const tab2 = document.querySelectorAll("#hotelList .tab-main-hotel a");
const content2 = document.querySelectorAll("#hotelList .tab_content-hotels .tab_item");

tab2.forEach((tab,i)=>{
    tab.addEventListener("click",function (e) { 
        e.preventDefault();
        removeActive(tab2);
        removeActive(content2);
        this.classList.add("active");
        const dataId = tab.dataset.id;
        document.querySelector(`#${dataId}`).classList.add("active");   
     })
});




// Accodrior

const links = document.querySelectorAll(".list-item h5");
links.forEach((link,i)=>{
    link.addEventListener("click",function (){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("active");
   
    });
})


function removeActive(tabs) { 
    for(let i= 0 ; i < tabs.length;i++)
        {
            tabs[i].classList.remove("active");
        }
 }



const openSearch = document.querySelector("#openSearch");
const closeSearch = document.querySelector("#closeSearch");
const box = document.querySelector(".box-search");
openSearch.addEventListener("click",function () { 
    box.classList.add("active");
});
closeSearch.addEventListener("click",function () { 
    box.classList.remove("active");
});


    
//  
$(function () { 
    const menuTops = $(".menu-top__header");
    const megaMenus = $(".mega-menu");
    // get wiwth cua menu
    // console.log(menuTops.width());
    const widthMain = menuTops.width();
    const osMain = menuTops.offset().left;
    console.log(osMain)
    $.each(megaMenus, function (i, item) { 
         const widthMenu = $(item).width();
         const osetLeft = $(item).offset().left;
        //  const pos = osetLeft - osMain;
         const pos = (osetLeft+widthMenu+45)-(widthMain+osMain);
         if(pos > 0)
         {
             $(item).css({
                "transform" : `translateX(-${pos}px)`
             });
         }
         console.log(pos);
    });
 });



 $(function () { 
     $.each($(".nav-menu >  ul >  li >  a"), function (i, item) { 
          $(item).on("click",function (e) { 
              e.preventDefault();
              $(this).next().toggleClass("active");
           });
     });
     $.each($(".mega-menu .box-sub-menu h3.title"), function (i, item) { 
        $(item).on("click",function (e) { 
            $(this).next().toggleClass("active");
         });
   });
  });


  $(function () { 
    $("#toggleMenu").on("click",function(){
        $("#menuMobile").toggleClass("active");
    });
   });

