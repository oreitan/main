var gamebox = document.getElementById('js-gamebox');

var height = 80;
var width = 80;

var leterarray = ['O','R','E','I','T','A','N'];

var resList = [];

var creategambox = function(){
    for(var i=0 ; i<3 ; i++){
        
        blackbox = document.createElement('DIV');
        blackbox.style.height = height + 'px';
        blackbox.style.width = width + 'px';
        blackbox.className = 'blackbox';
        var rand = Math.floor(Math.random()*leterarray.length);
        blackbox.innerHTML = '<p style="margin-top: '+height*0.25+'px; font-size: '+height*0.35+'px;">'+leterarray[rand]+'</p>';
        height = height + 20;
        width = width + 20;

        blackbox.addEventListener('click',function(){
            if(!this.className.includes('show')){
                if(!this.className.includes('correct')){
                    this.className = this.className + ' show';
                    
                    resList.push(this);
                    setTimeout(function(){
                        
                        if(resList.length == 2){
                            testRes();

                            resList = [];
                        }
                    },1000);
                    }
                }
                else{
                    this.className = this.className.replace(' show','');
                    resList = [];

                }
            });
        console.log(blackbox);
        gamebox.appendChild(blackbox);
    }
};

var volComp = function(){
    var rSide = resList[0].innerHTML;
    var lSide = resList[1].innerHTML;
    var commaIndex = rSide.indexOf('">');
    var slashIndex = rSide.indexOf('</p');
    var theLetterR = rSide.substring(commaIndex+2,slashIndex);
    commaIndex = lSide.indexOf('">');
    slashIndex = lSide.indexOf('</p');
    var theLetterL = lSide.substring(commaIndex+2,slashIndex)

    if (theLetterR == theLetterL){
        return true;
    }
    return false;
};

var testRes = function(){

    if(volComp()){
        for(var i = 0; i < resList.length; i++){
            resList[i].className = resList[i].className.replace('show','correct');
        }
    }
    else{
        for(var i = 0; i < resList.length; i++){
            resList[i].className = resList[i].className.replace('show',' ');       
        }
    }
}

