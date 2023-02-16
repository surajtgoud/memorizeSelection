const gridItems = document.querySelectorAll(".grid-item");
const clickedItems = [];
const grid = [...gridItems];

grid.forEach((item) => {
  item.addEventListener("click", (event) => {
    const index = clickedItems.indexOf(item);
    if (index === -1) {
      clickedItems.push(item);
      //   item.style.backgroundColor = "lightblue";
    } else {
      clickedItems.splice(index, 1);
      item.style.backgroundColor = "";
    }
  });
});

// const play = () => {
//   clickedItems.forEach((item) => {
//     item.style.backgroundColor = "lightblue";
//   });
// };

const play = () => {
  let i = 0;
  const intervalId = setInterval(() => {
    if (i === clickedItems.length) {
      clearInterval(intervalId);
      return;
    }
    clickedItems[i].style.backgroundColor = "lightblue";
    i++;
  }, 1000);
};
