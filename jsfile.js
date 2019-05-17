window.onload=function() {
    //hiden items
    document.getElementById(131).src="New icons/background.png";
    //end hiden items
    document.addEventListener("keydown",event=>{
    if(event.key=="ArrowLeft"){
        l_move() ;
        }    
    if(event.key=="ArrowRight"){
        r_move() ;
        }
    if(event.key==" "){
        spaceship_fire() ;
        }    
    })

    var posT = 0;
    var posL = 0;
    for(var i=1;i<=20;i++){
        document.getElementById(i).style.top  = posT + "px";
        document.getElementById(i).style.left  = posL + "px";
        posL+=60;
        }
            
    var spce_ship = document.getElementById("animate");        
    var posT = 520;
    var posL = 600;
    spce_ship.style.top  = posT + "px";
    spce_ship.style.left = posL + "px";
            
            
    //document.getElementById(31).style.top  = (posT-40) + "px";
    //document.getElementById(31).style.left  = (posL+35) + "px";
            

    function r_move() {
        posL+=10;
        if (posL>=1130)  { posL-=10;    return;}
        spce_ship.style.top  = posT + "px";
        spce_ship.style.left = posL + "px";    
        }

    function l_move() {
        posL-=10;
        if (posL<=0)  { posL+=10;    return;}
        spce_ship.style.top  = posT + "px";
        spce_ship.style.left = posL + "px";                
        }

    var l,t;
    function spaceship_fire_up(){          
        t=t-10;
        if (t<0)  {
            kill(131);
            stopMoveFire();
            }
            
        document.getElementById(31).style.top  = t + "px";
        //document.getElementById(31).style.left = l + "px";
        }
        //var timer = setInterval(spaceship_fire,10);
        function moveFire() {          
            var timer = setInterval(spaceship_fire_up, 20);
            }
            
        function stopMoveFire(){
            clearInterval(timer);
            }


        function spaceship_fire(){
            var arr=[];
            arr=spce_ship.style.left.split("p");
            l=Number(arr[0]);
            l=l+35;
            arr=spce_ship.style.top.split("p");
            t=Number(arr[0]);
            t=t-40;
                
            document.getElementById(31).style.top  = (t) + "px";
            document.getElementById(31).style.left  = (l) + "px";
            document.getElementById(131).src="New icons/spaceship-fire.png";
            moveFire();
            }

        function kill(id){
            document.getElementById(id).src="New icons/background.png";
            document.getElementById(31).style.top  = "0px";
            document.getElementById(31).style.left  = "0px";
            }

            
}