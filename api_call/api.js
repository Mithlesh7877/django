document.getElementById('getText').addEventListener('click',getText);
function getText(){
    fetch('https://randomuser.me/api/?results=10')
    .then(res=>{
      return  res.json();
    })
    .then(x=>{
        console.log(x.results.slice(1,6));
        const html= x.results.slice(1,6).map(user=>{
                        return `
            <h4>Name: ${user.name.first}</h4>
            <p><img src ='${user.picture.large}' alt='${user.name.firtst}'></p> `
        }).join(' ');
        // console.log(html)
        document.getElementById('output').innerHTML=html;
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
}