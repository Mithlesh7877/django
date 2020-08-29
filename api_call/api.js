document.getElementById('Text').addEventListener('click',function() {
    add_element_to_array(array);
  })
let ouptut = document.querySelector('#output');
var a =5;
var array = Array();
(function getText(){
    fetch('https://randomuser.me/api/?results=15')
    .then(res=>{
      return  res.json();
    })
    .then(x=>{
        console.log(x.results);
        array=x.results;
        // console.log(array);
        // add_element_to_array(array)
    //     const html= x.results.map(user=>{
    //                     return `
    //         <h4>Name: ${user.name.first}</h4>
    //         <p><img src ='${user.picture.large}' alt='${user.name.firtst}'></p> `
    //     }).join(' ');
    //     console.log(html)
    //     document.getElementById('output').innerHTML=html;
    });


    
        // document.getElementById('output').innerHTML=;    
    // fetch('sample.txt')
    //     .then(function(res){
    //       return res.text();
    //     })
    //     .then(function(data)
    //     {
    //         console.log(data);
    //     });
    // fetch('https://randomuser.me/api/?results=1')
    // .then((res)=>res.text())
    // .then((data)=>{
    //     document.getElementById('output').innerHTML=data;
    // })
}());

// const html=Array();
function add_element_to_array(array){
    document.getElementById('output').innerHTML = "";
    console.log(array);
    if(a==5){
    for (let i=0;i<a;i++){
        let html= `<h4>Name: ${array[i].name.first}</h4>
       <p><img src ='${array[i].picture.large}' alt='${array[i].name.firtst}'></p>`
                console.log(html);
                document.getElementById('output').innerHTML+=html;                  
    }
    a=a+5;
    }
    else if(a==10){
        for (let i=5;i<a;i++){
            let html= `<h4>Name: ${array[i].name.first}</h4>
           <p><img src ='${array[i].picture.large}' alt='${array[i].name.firtst}'></p>`
                    console.log(html);
                    document.getElementById('output').innerHTML+=html;
        }
        a=a+5;
    }
    else{
        for (let i=10;i<a;i++){
            let html= `<h4>Name: ${array[i].name.first}</h4>
           <p><img src ='${array[i].picture.large}' alt='${array[i].name.firtst}'></p>`
                    console.log(html);
                    document.getElementById('output').innerHTML+=html;

       }
    }
}




// Pattern
var start=0;
var even=50;
var odd=51;
var end=100;
var x=0;
function test(){
    console.log(start);
    console.log(start+1);
    m=(x%2==0)?even:odd;
    console.log(m);
    (m==even)?even--:odd++;
    console.log(end-1);
    console.log(end);
    start += 2;
    end   -= 2;
    x     += 1;
}


// 0 1 50 99 100 
// 2 3 51 97 98 
// 4 5 49 95 96
// 6 7 52 93 94
// 8 9 48 91 92
