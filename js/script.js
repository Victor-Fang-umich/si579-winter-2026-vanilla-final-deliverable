
// OLD code

// const addNumbers = (first, second) => {
//   return first + second;
// }

// if (typeof module !== 'undefined') {
//   module.exports = {
//     addNumbers
//   }
// }


// NEW code
document.querySelector('#button')
  .addEventListener('click', () => {
    document.querySelector('#output')
      .textContent = 'world';
  })


// *** Open Terminal in VS Code ***
// control + shift + `  

// *** Clone repository ***
// go to a folder via cd
// git clone repository_link

// git add -A
// git commit -m "Your commit message"
// git push