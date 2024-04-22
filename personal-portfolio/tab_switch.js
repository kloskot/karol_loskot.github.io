function opentab(tabname,img,id){
    var specified_id = document.getElementById(id);
    var tablinks = specified_id.getElementsByClassName("tab-links");
    var tabcontents = specified_id.getElementsByClassName("tab-contents");
    var tabimg = specified_id.getElementsByClassName("image_display");
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    for(image_dis of tabimg){
        image_dis.classList.remove("active-img");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(img).classList.add("active-img");
    document.getElementById(tabname).classList.add("active-tab");
}