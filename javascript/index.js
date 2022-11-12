// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
obtainInstruction('steak', 0).then((value0) => {
    document.querySelector("#steak").innerHTML += `<li>${value0}</li>`
    
    obtainInstruction('steak', 1).then((value1) => {
      document.querySelector("#steak").innerHTML += `<li>${value1}</li>`

      obtainInstruction('steak', 2).then((value2) => {
        document.querySelector("#steak").innerHTML += `<li>${value2}</li>`

        obtainInstruction('steak', 3).then((value3) => {
          document.querySelector("#steak").innerHTML += `<li>${value3}</li>`

          obtainInstruction('steak', 4).then((value4) => {
            document.querySelector("#steak").innerHTML += `<li>${value4}</li>`

            obtainInstruction('steak', 5).then((value5) => {
              document.querySelector("#steak").innerHTML += `<li>${value5}</li>`

              obtainInstruction('steak', 6).then((value6) => {
                document.querySelector("#steak").innerHTML += `<li>${value6}</li>`
                document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`
              })
            })
          })
        })
      })
    })
  })

  
/* No conseguí con el for
for (i=0; (i+1)<steak.length;i++) {
  let varSteak = obtainInstruction("steak", i)
  if (varSteak.isFulfilled) {
    console.log(document.querySelector("#steak").innerHTML += `<li>${varSteak}</li>`)
  }
}
*/





// Iteration 3 using async/await
// ...
/*
async function Broccoli() {
  let value = await obtainInstruction("broccoli",0);
  document.querySelector("broccoli").innerHTML += `<li>${value}</li>`;
}
*/

// Bonus 2 - Promise all
// ...