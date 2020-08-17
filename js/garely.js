$(function () { 
    const galeryLinks = $(".galery-tabs-main a");
    const  boxGalery = $(".box-galery");


    const obj = {};
    [...boxGalery].forEach(box => {
        const group = box.dataset.group;
        obj[group] = (obj[group]|| []).concat([box]);
    });

    $.each(galeryLinks, function (i, item) { 
         $(item).on("click",function(e){
            e.preventDefault();
            removeActive(galeryLinks,"active");

            $(this).addClass("active");
            const dataId = $(this).data().id;

            for (const key in obj) {
                removeActive(obj[key],"active");
                if(dataId==="ALL")
                {
                    addActive(obj[key],"active");
                }
            }
            for (const key in obj) {
                if(dataId===key)
                {
                    addActive(obj[key],"active");
                }
            }
         });
    });

  

 });
 function addActive(tabs,className) { 
    for(let i= 0 ; i < tabs.length;i++)
    {
        tabs[i].classList.add(className);
    }
 }

 
 function removeActive(tabs,className) { 
    for(let i= 0 ; i < tabs.length;i++)
    {
        tabs[i].classList.remove(className);
    }
 }

 