var friends=['Goku','Vegeta','Gohan','Krillen','Bulma']


function sing(){
    for(var j=0;j<friends.length;j++){

        var div = document.createElement("div");
        var h3 = document.createElement("h3");

        div.className='friends';
        h3.innerHTML = friends[j];
        document.body.appendChild(div);
        div.appendChild(h3);

        for(var i=99;i>0;i--){
        var para = document.createElement("p");
        div.appendChild(para);
                if(i>2){
                para.innerHTML=i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + (i-1) + ' lines of code in the file.'
                }else if(i==2){
                para.innerHTML=i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + (i-1) + ' line of code in the file.'
                }else if(i=1){
                para.innerHTML=i + ' line of code in the file, ' + i + ' line of code; ' + friends[j] + ' strikes one out, clears it all out, no more lines of code in the file.'
        }
    };
};
document.body.appendChild(div);
};
var btn = document.getElementById('my-btn');
btn.addEventListener('click', sing);
        






