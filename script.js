var friends=['Goku','Vegeta','Gohan','Krillen','Bulma']

for(var j=0;j<friends.length;j++){
        for(var i=99;i>0;i--){
            if(i>2){
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + (i-1) + ' lines of code in the file.')
            }else if(i==2){
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[j] + ' strikes one out, clears it all out, ' + (i-1) + ' line of code in the file.')
            }else if(i=1){
            console.log(i + ' line of code in the file, ' + i + ' line of code; ' + friends[j] + ' strikes one out, clears it all out, no more lines of code in the file.')
        }
    };
};