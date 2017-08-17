function FunnyStory() {

}
FunnyStory.HOST="https://route.showapi.com/";
FunnyStory.GETSTORY="255-1";
FunnyStory.prototype.loadData=function (num) {
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff";
    var request= new XMLHttpRequest();
    request.open("get",FunnyStory.HOST+FunnyStory.GETSTORY+"?"+parm);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body.pagebean.contentlist;
            var container=document.querySelector(".content");
            var content="";


            datas.forEach(function (p1, p2, p3) {
                if(p1.type==41){
                    content+="<div class='ppp'> <div class='content-head'><img class='user' src='"+p1.profile_image+"'/>"+ "<div class='par'><p class='usernamer'>"+p1.name +"</p><p class='time'>"+p1.create_time+"</p></div></div>" +"<p class='text'> "+p1.text+"</p>"  +"<p class='sss'><video class='video' src='"+ p1.video_uri+"' controls='controls' ></video>"+"</p></div>";

                        //"<p>创建时间:"+p1.create_time+"赞:"+p1.love+"踩:"+p1.hate+"id:"+p1.id+"</p>"+"<p>"+"<img src='"+p1.profile_image+"'/>"+"</p>"+"<p>"+p1.text+"</p>"+"</p>"

                    }

            })
            container.innerHTML=content;



        }
    };
    request.send();
}
FunnyStory.prototype.loadData2=function (num) {
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff";
    var request= new XMLHttpRequest();
    request.open("get",FunnyStory.HOST+FunnyStory.GETSTORY+"?"+parm);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body.pagebean.contentlist;
            var container=document.querySelector(".content");
            var content="";

            //+"</p>"+"<p>"+"<img src='"+p1.image1+"'/>"+ +"</p>"+"<p>"+"<img src='"+p1.image2+"'/>"+ +"</p>"+"<p>"+"<img src='"+p1.image3+"'/>"+
            datas.forEach(function (p1, p2, p3) {
                if(p1.type==41){
                    content+="<div class='ppp'> <div class='content-head'><img class='user' src='"+p1.profile_image+"'/>"+ "<div class='par'><p class='usernamer'>"+p1.name +"</p><p class='time'>"+p1.create_time+"</p></div></div>" +"<p class='text'> "+p1.text+"</p>"  +"<p class='sss'><video class='video' src='"+ p1.video_uri+"' controls='controls' ></video>"+"</p></div>";

                    //"<p>创建时间:"+p1.create_time+"赞:"+p1.love+"踩:"+p1.hate+"id:"+p1.id+"</p>"+"<p>"+"<img src='"+p1.profile_image+"'/>"+"</p>"+"<p>"+p1.text+"</p>"+"</p>"

                }

            })
            container.innerHTML=content;

        }
    };
    request.send();
}

FunnyStory.prototype.loadData3=function (num) {
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff";
    var request= new XMLHttpRequest();
    request.open("get",FunnyStory.HOST+FunnyStory.GETSTORY+"?"+parm);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body.pagebean.contentlist;
            var container=document.querySelector(".content");
            var content="";

            //+"</p>"+"<p>"+"<img src='"+p1.image1+"'/>"+ +"</p>"+"<p>"+"<img src='"+p1.image2+"'/>"+ +"</p>"+"<p>"+"<img src='"+p1.image3+"'/>"+
            datas.forEach(function (p1, p2, p3) {
                if(p1.type==10){
                    content+="<div class='ppp'> <div class='content-head'><img class='user' src='"+p1.profile_image+"'/>"+ "<div class='par'><p class='usernamer'>"+p1.name +"</p><p class='time'>"+p1.create_time+"</p></div></div>" +"<p class='text'> "+p1.text+"</p>"  +"<p class='sss'><img class='video' src='"+ p1.image2+"' controls='controls' ></img>"+"</p></div>";

                    //"<p>创建时间:"+p1.create_time+"赞:"+p1.love+"踩:"+p1.hate+"id:"+p1.id+"</p>"+"<p>"+"<img src='"+p1.profile_image+"'/>"+"</p>"+"<p>"+p1.text+"</p>"+"</p>"

                }

            })
            container.innerHTML=content;

        }
    };
    request.send();
}

FunnyStory.prototype.loadData4=function (num) {
    var result=null;
    var parm="showapi_appid=42209&showapi_sign=3ce6b3fcee8443ccb51cbf7c046f30ff";
    var request= new XMLHttpRequest();
    request.open("get",FunnyStory.HOST+FunnyStory.GETSTORY+"?"+parm);

    request.onreadystatechange=function () {
        console.log(this.readyState);
        if (this.readyState===4){
            // console.log(this.response);
            result=JSON.parse(request.response);
            console.log(result);
            var datas=  result.showapi_res_body.pagebean.contentlist;
            var container=document.querySelector(".content");
            var content="";

            //+"</p>"+"<p>"+"<img src='"+p1.image1+"'/>"+ +"</p>"+"<p>"+"<img src='"+p1.image2+"'/>"+ +"</p>"+"<p>"+"<img src='"+p1.image3+"'/>"+
            datas.forEach(function (p1, p2, p3) {
                if(p1.type==29){
                    content+="<div class='ppp'> <div class='content-head'><img class='user' src='"+p1.profile_image+"'/>"+ "<div class='par'><p class='usernamer'>"+p1.name +"</p><p class='time'>"+p1.create_time+"</p></div></div>" +"<p class='text'> "+p1.text+"</p>"  +"<p class='sss'><img class='video' src='"+ p1.image2+"' controls='controls' ></img>"+"</p></div>";

                    //"<p>创建时间:"+p1.create_time+"赞:"+p1.love+"踩:"+p1.hate+"id:"+p1.id+"</p>"+"<p>"+"<img src='"+p1.profile_image+"'/>"+"</p>"+"<p>"+p1.text+"</p>"+"</p>"

                }

            })
            container.innerHTML=content;

        }
    };
    request.send();
}
var han= new FunnyStory();
han.loadData();
var q1=document.querySelector("#q1");
var q2=document.querySelector("#q2");
var q3=document.querySelector("#q3");
var q4=document.querySelector("#q4");
var q5=document.querySelector("#q5");
var q6=document.querySelector("#q6");
var li=document.querySelectorAll("li");
q1.onclick=function () {
    for (var i=0;i<li.length;i++)
    {
        li[i].className="";
    }
    this.className="active";

}
q2.onclick=function () {
    for (var i=0;i<li.length;i++)
    {
        li[i].className="";
    }
    this.className="active";
    han.loadData2();

}
q3.onclick=function () {
    for (var i=0;i<li.length;i++)
    {
        li[i].className="";
    }
    this.className="active";
   han.loadData3();
}
q4.onclick=function () {
    for (var i=0;i<li.length;i++)
    {
        li[i].className="";
    }
    this.className="active";
    han.loadData4();

}
q5.onclick=function () {
    for (var i=0;i<li.length;i++)
    {
        li[i].className="";
    }
    this.className="active";

}
q6.onclick=function () {
    for (var i=0;i<li.length;i++)
    {
        li[i].className="";
    }
    this.className="active";

}

// setTimeout(function () {
//     var video=document.querySelectorAll("video");
//     console.log(video);
//
//     for(var j=0;j<video.length;j++){
//         video[j].controls=true;
//
//     }
// },1000)
