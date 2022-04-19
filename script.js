
let div=document.getElementById("container")

let btn=document.getElementById("button").addEventListener("click",()=>{
  let count=10;
  container.innerText=count;
setTimeout(() => {
    count--;
    container.innerText = count;
    setTimeout(() => {
      count--;
      container.innerText = count;
      setTimeout(() => {
        count--;
        container.innerText = count;
        setTimeout(() => {
          count--;
          container.innerText = count;
          setTimeout(() => {
            count--;
            container.innerText = count;
            setTimeout(() => {
              count--;
              container.innerText = count;
              setTimeout(() => {
                count--;
                container.innerText = count;
                setTimeout(() => {
                  count--;
                  container.innerText = count;
                  setTimeout(() => {
                    count--;
                    container.innerText = count;
                    setTimeout(() => {
                      count--;
                      container.innerText = count;
                      setTimeout(() => {
                        container.innerText = 'Happy Independence Day'
                        container.style.backgroundColor="pink";      
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
})