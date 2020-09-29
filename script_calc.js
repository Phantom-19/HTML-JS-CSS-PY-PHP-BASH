<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>    
<script>
        function clique1(){
            document.calc.disp.value+=1;
    }
        function clique2(){
            document.calc.disp.value+=2;
    }
        function clique3(){
            document.calc.disp.value+=3;
    }
        function clique4(){
            document.calc.disp.value+=4;
    }
        function clique5(){
            document.calc.disp.value+=5;
    } 
     function clique6(){
            document.calc.disp.value+=6;
    }
        function clique7(){
            document.calc.disp.value+=7;
    }
        function clique8(){
            document.calc.disp.value+=8;
    }
        function clique9(){
            document.calc.disp.value+=9;
    }
        function clique0(){
            document.calc.disp.value+=0;
    }
        function plus(){
            document.calc.disp.value+="+";
        }
        function sous(){
            document.calc.disp.value+="-";
        }
        function mul(){
            document.calc.disp.value+="*";
        }
        function div(){
            document.calc.disp.value+="/";
        }
        function egal(){
            if(document.calc.disp.value==""){
                var eg="";
            }
            else{
                var eg=eval(document.calc.disp.value)
            }
            document.calc.disp.value=eg;
        }
        function deci(){
            document.calc.disp.value+=".";
        }
        function prcent(){
            document.calc.disp.value+="%";
        }
        function par1(){
            document.calc.disp.value+="(";
        }
        function par2(){
            document.calc.disp.value+=")";
        }
        function AC(){
            document.calc.disp.value="";
        }
</script>
