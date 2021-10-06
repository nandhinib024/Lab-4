var o= window.onload=function()
      {
        document.getElementById("sem1").style.display = "none";
        document.getElementById("getsem1").style.display = "none";
        document.getElementById("sem2").style.display = "none";
        document.getElementById("getsem2").style.display = "none";
        document.getElementById("sem3").style.display = "none";
        document.getElementById("getsem3").style.display = "none";
        document.getElementById("sem4").style.display = "none";
        document.getElementById("getsem4").style.display = "none";
        document.getElementById("sem5").style.display = "none";
        document.getElementById("getsem5").style.display = "none";
        document.getElementById("sem6").style.display = "none";
        document.getElementById("getsem6").style.display = "none";
        document.getElementById("sem7").style.display = "none";
        document.getElementById("getsem7").style.display = "none";
        document.getElementById("sem8").style.display = "none";
        document.getElementById("getsem8").style.display = "none";
        
      }
      function sem()
      {
        o();
        var t=document.getElementById("semester").selectedIndex;
       if(t==1){
        document.getElementById("sem1").style.display = "inline";
        document.getElementById("getsem1").style.display = "inline";
       }
       else if(t==2){
        document.getElementById("sem1").style.display = "inline";
        document.getElementById("getsem1").style.display = "inline";
        document.getElementById("sem2").style.display = "inline";
        document.getElementById("getsem2").style.display = "inline";
       }
       else if(t==3){
        document.getElementById("sem1").style.display = "inline";
        document.getElementById("getsem1").style.display = "inline";
        document.getElementById("sem2").style.display = "inline";
        document.getElementById("getsem2").style.display = "inline";
        document.getElementById("sem3").style.display = "inline";
        document.getElementById("getsem3").style.display = "inline";
       }
       else if(t==4){
        document.getElementById("sem1").style.display = "inline";
        document.getElementById("getsem1").style.display = "inline";
        document.getElementById("sem2").style.display = "inline";
        document.getElementById("getsem2").style.display = "inline";
        document.getElementById("sem3").style.display = "inline";
        document.getElementById("getsem3").style.display = "inline";
        document.getElementById("sem4").style.display = "inline";
        document.getElementById("getsem4").style.display = "inline";
       }
       else if(t==5){
        document.getElementById("sem1").style.display = "inline";
        document.getElementById("getsem1").style.display = "inline";
        document.getElementById("sem2").style.display = "inline";
        document.getElementById("getsem2").style.display = "inline";
        document.getElementById("sem3").style.display = "inline";
        document.getElementById("getsem3").style.display = "inline";
        document.getElementById("sem4").style.display = "inline";
        document.getElementById("getsem4").style.display = "inline";
        document.getElementById("sem5").style.display = "inline";
        document.getElementById("getsem5").style.display = "inline";

       }
       else if(t==6){
        document.getElementById("sem1").style.display = "inline";
        document.getElementById("getsem1").style.display = "inline";
        document.getElementById("sem2").style.display = "inline";
        document.getElementById("getsem2").style.display = "inline";
        document.getElementById("sem3").style.display = "inline";
        document.getElementById("getsem3").style.display = "inline";
        document.getElementById("sem4").style.display = "inline";
        document.getElementById("getsem4").style.display = "inline";
        document.getElementById("sem5").style.display = "inline";
        document.getElementById("getsem5").style.display = "inline";
        document.getElementById("sem6").style.display = "inline";
        document.getElementById("getsem6").style.display = "inline";

       }
       else if(t==7){
        document.getElementById("sem1").style.display = "inline";
        document.getElementById("getsem1").style.display = "inline";
        document.getElementById("sem2").style.display = "inline";
        document.getElementById("getsem2").style.display = "inline";
        document.getElementById("sem3").style.display = "inline";
        document.getElementById("getsem3").style.display = "inline";
        document.getElementById("sem4").style.display = "inline";
        document.getElementById("getsem4").style.display = "inline";
        document.getElementById("sem5").style.display = "inline";
        document.getElementById("getsem5").style.display = "inline";
        document.getElementById("sem6").style.display = "inline";
        document.getElementById("getsem6").style.display = "inline";
        document.getElementById("sem7").style.display = "inline";
        document.getElementById("getsem7").style.display = "inline";
       }
       else if(t==8){
        document.getElementById("sem1").style.display = "inline";
        document.getElementById("getsem1").style.display = "inline";
        
        document.getElementById("sem2").style.display = "inline";
        document.getElementById("getsem2").style.display = "inline";
        document.getElementById("sem3").style.display = "inline";
        document.getElementById("getsem3").style.display = "inline";
        document.getElementById("sem4").style.display = "inline";
        document.getElementById("getsem4").style.display = "inline";
        document.getElementById("sem5").style.display = "inline";
        document.getElementById("getsem5").style.display = "inline";
        document.getElementById("sem6").style.display = "inline";
        document.getElementById("getsem6").style.display = "inline";
        document.getElementById("sem7").style.display = "inline";
        document.getElementById("getsem7").style.display = "inline";
        document.getElementById("sem8").style.display = "inline";
        document.getElementById("getsem8").style.display = "inline";
       }
       
      }
      function calc(){
        document.getElementById("ans").value=0;
        var t=document.getElementById("semester").selectedIndex;
        var c=0;
        var a=0;
        var y1=parseInt(document.getElementById("sem11").value);
        var y2=parseInt(document.getElementById("sem22").value);
        var y3=parseInt(document.getElementById("sem33").value);
        var y4=parseInt(document.getElementById("sem44").value);
        var y5=parseInt(document.getElementById("sem55").value);
        var y6=parseInt(document.getElementById("sem66").value);
        var y7=parseInt(document.getElementById("sem77").value);
        var y8=parseInt(document.getElementById("sem88").value);
        
        if(c<t){
          c=c+1;
          if((y1!=0)&& (c<t))
          {
            c=c+1;
            if((y2!=0)&&(c<t)){
              c=c+1;
              if((y3!=0)&&(c<t)){
                c=c+1;
               if((y4!=0)&&(c<t)){
                c=c+1;
               if((y5!=0)&&(c<t)){
                c=c+1;
               if((y6!=0)&&(c<t)){
                c=c+1;
               if((y7!=0)&&(c<t)){
                c=c+1;
               if((y8!=0)&&(c<t)){
              } 
              else if((y8!=0)&& (c==t))
              {
                document.getElementById("ans").innerHTML=(y1+y2+y3+y4+y5+y6+y7+y8)/8;
              }
            else
            {
              window.alert("8th Semester not entered");
            }
                
          } 
          else if((y7!=0)&& (c==t))
          {

            document.getElementById("ans").innerHTML=(y1+y2+y3+y4+y5+y6+y7)/7;
          }
            else{
            window.alert("7th Semester not entered");
          }
          }  
              else if((y6!=0)&& (c==t)){
            document.getElementById("ans").innerHTML=(y1+y2+y3+y4+y5+y6)/6;
            }
            else{
            window.alert("6th Semester not entered");
          }
              } 
              else if((y5!=0)&& (c==t)){
            document.getElementById("ans").innerHTML=(y1+y2+y3+y4+y5)/5;
            }
            else{
            window.alert("5th Semester not entered");
          }
              } 
              else if((y4!=0)&& (c==t)){
            document.getElementById("ans").innerHTML=(y1+y2+y3+y4)/4;
            }
            else{
            window.alert("4th Semester not entered");
          }
              }  
              else if((y3!=0)&& (c==t)){
            document.getElementById("ans").innerHTML=(y1+y2+y3)/3;
            }
            else{
            window.alert("3rd Semester not entered");
          }
            }
            else if((y2!=0)&& (c==t)){
            document.getElementById("ans").innerHTML=(y1+y2)/2;
            }
          else{
            window.alert("2nd Semester not entered");
          }
          }
          else if((y1!=0)&& (c==t)){
            document.getElementById("ans").innerHTML=y1;
          }
          else{
           window.alert("1st Semester not entered");
          }
          }
        else{
          // window.alert("Semester not choosen");
        }
      }


      