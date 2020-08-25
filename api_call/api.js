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
