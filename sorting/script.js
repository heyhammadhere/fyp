let main = document.querySelector("main");
let instructions = document.querySelector("#instructions");
let generate = document.querySelector("#generate");
let bubbleSort = document.querySelector("#bubbleSort");
let insertionSort = document.querySelector("#insertionSort");
let selectionSort = document.querySelector("#selectionSort");
let quickSort = document.querySelector("#quickSort");
bubbleSort.disabled = true;
insertionSort.disabled = true;
selectionSort.disabled = true;
quickSort.disabled = true;
let speed = document.querySelector("#speed");
let speedInMS = 0;
let listLength = 50;

let colors = {
  white: "#fcfcfd",
  black: "#222",
  yellow: "yellow",
  red: "#ef2d56",
  green: "#00704f",
  blue: "#001F42",
};

instructions.onclick = async () => {
  main.innerHTML = "";
  bubbleSort.disabled = true;
  insertionSort.disabled = true;
  selectionSort.disabled = true;
  quickSort.disabled = true;
  main.innerHTML = `<div>
        <strong>
          <p>
            Click Generate Button To Generate A Random List With 50 Elements
          </p></strong
        >
        <p>
          <strong style="color: #fff; background-color: #001f42">Blue</strong>
          Bars Indicate Unsorted Elements
        </p>
        <p>
          <strong style="color: #fff; background-color: #00704f"> Green</strong>
          Bars Indicate Sorted Elements
        </p>
        <p>
          <strong style="color: #fff; background-color: #ef2d56"> Red</strong>
          Bar Indicate Active Element For Comparison
        </p>
        <p>
          <strong style="color: #001f42; background-color: yellow">
            Yellow</strong
          >
          Bar Indicate Element To Compare With Active Element
        </p>
      </div>`;
};

generate.onclick = async () => {
  main.innerHTML = "";
  instructions.disabled = true;
  generate.disabled = true;
  bubbleSort.disabled = true;
  insertionSort.disabled = true;
  selectionSort.disabled = true;
  quickSort.disabled = true;
  for (let i = 0; i < listLength; i++) {
    let randomNumber = Math.floor(Math.random() * (75 - 1) + 1);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        let bar = document.createElement("span");
        bar.id = `bar-${i}`;
        bar.innerText = randomNumber;
        bar.style["height"] = `${randomNumber}vh`;
        main.append(bar);
        resolve();
      }, speed);
    });
  }
  instructions.disabled = false;
  generate.disabled = false;
  bubbleSort.disabled = false;
  insertionSort.disabled = false;
  selectionSort.disabled = false;
  quickSort.disabled = false;
};

bubbleSort.onclick = async () => {
  instructions.disabled = true;
  bubbleSort.disabled = true;
  insertionSort.disabled = true;
  selectionSort.disabled = true;
  quickSort.disabled = true;
  let bars = [...document.querySelectorAll("span")];
  let list = [...bars].map((bar) => {
    return parseInt(bar.innerText);
  });
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      bars[j].style["backgroundColor"] = colors.red;
      bars[j + 1].style["color"] = colors.black;
      bars[j + 1].style["backgroundColor"] = colors.yellow;
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (list[j] > list[j + 1]) {
            let tmp = list[j];
            list[j] = list[j + 1];
            list[j + 1] = tmp;
            bars[j].innerText = list[j];
            bars[j].style["height"] = `${list[j]}vh`;
            bars[j + 1].innerText = list[j + 1];
            bars[j + 1].style["height"] = `${list[j + 1]}vh`;
          }
          resolve();
        }, speed);
      });
      bars[j].style["backgroundColor"] = colors.blue;
      bars[j + 1].style["color"] = colors.white;
      bars[j + 1].style["backgroundColor"] = colors.blue;
    }
    bars[list.length - 1 - i].style["backgroundColor"] = colors.green;
  }
  instructions.disabled = false;
  bubbleSort.disabled = false;
  insertionSort.disabled = false;
  selectionSort.disabled = false;
  quickSort.disabled = false;
};

insertionSort.onclick = async () => {
  instructions.disabled = true;
  bubbleSort.disabled = true;
  insertionSort.disabled = true;
  selectionSort.disabled = true;
  quickSort.disabled = true;
  let key, j;
  let bars = [...document.querySelectorAll("span")];
  let list = [...bars].map((bar) => {
    return parseInt(bar.innerText);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, speed);
  });
  for (let i = 0; i < list.length; i++) {
    key = list[i];
    j = i - 1;
    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = key;
  }
  instructions.disabled = false;
  bubbleSort.disabled = false;
  insertionSort.disabled = false;
  selectionSort.disabled = false;
  quickSort.disabled = false;
  console.log(list);
};

selectionSort.onclick = async () => {
  instructions.disabled = true;
  bubbleSort.disabled = true;
  insertionSort.disabled = true;
  selectionSort.disabled = true;
  quickSort.disabled = true;
  let bars = [...document.querySelectorAll("span")];
  let list = [...bars].map((bar) => {
    return parseInt(bar.innerText);
  });
  for (let i = 0; i < list.length; i++) {
    bars[i].style["backgroundColor"] = colors.red;
    for (let j = i + 1; j < list.length; j++) {
      bars[j].style["color"] = colors.black;
      bars[j].style["backgroundColor"] = colors.yellow;
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (list[j] < list[i]) {
            let tmp = list[i];
            list[i] = list[j];
            list[j] = tmp;
            bars[i].innerText = list[i];
            bars[i].style["height"] = `${list[i]}vh`;
            bars[j].innerText = list[j];
            bars[j].style["height"] = `${list[j]}vh`;
          }
          resolve();
        }, speed);
      });
      bars[j].style["color"] = colors.white;
      bars[j].style["backgroundColor"] = colors.blue;
    }
    bars[i].style["backgroundColor"] = colors.green;
  }
  instructions.disabled = false;
  bubbleSort.disabled = false;
  insertionSort.disabled = false;
  selectionSort.disabled = false;
  quickSort.disabled = false;
};

quickSort.onclick = async () => {
  instructions.disabled = true;
  bubbleSort.disabled = true;
  insertionSort.disabled = true;
  selectionSort.disabled = true;
  quickSort.disabled = true;
  let bars = [...document.querySelectorAll("span")];
  let list = [...bars].map((bar) => {
    return parseInt(bar.innerText);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, speed);
  });
  const partition = (list, left, right) => {
    let pivot = list[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (list[i] < pivot) {
        i++;
      }
      while (list[j] > pivot) {
        j--;
      }
      if (i <= j) {
        let tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
        i++;
        j--;
      }
    }
    return i;
  };
  const sort = (list, left, right) => {
    let index;
    if (list.length > 1) {
      index = partition(list, left, right);
      if (left < index - 1) {
        sort(list, left, index - 1);
      }
      if (index < right) {
        sort(list, index, right);
      }
    }
  };
  sort(list, 0, list.length - 1);
  instructions.disabled = false;
  bubbleSort.disabled = false;
  insertionSort.disabled = false;
  selectionSort.disabled = false;
  quickSort.disabled = false;
  console.log(list);
};

speed.onchange = (e) => {
  speed = parseInt(e.target.value);
};
