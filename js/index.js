window.addEventListener("load", () => init());
window.onerror = (errEvent) => console.log("Error caught:", errEvent);

function init() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let output = document.querySelector("output");
    let firstNum = document.querySelector("#first-num").value;
    let secondNum = document.querySelector("#second-num").value;
    let operator = document.querySelector("#operator").value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  });

  let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

  // Start your code here
  // You may move this JS to another file if you wish
  //
  const buttonCallbacks = {
    "Console Log": () => console.log("some message"),
    "Console Error": () => console.error("some error"),
    "Console Count": () => console.count("some message"),
    "Console Warn": () => console.warn("some warning"),
    "Console Assert": () => console.assert(1 + 2 == 2),
    "Console Clear": () => console.clear(),
    "Console Dir": () => console.dir(document.getElementById("calculate")),
    "Console dirxml": () => console.dirxml(document.getElementById("operator")),
    "Console Group Start": () => console.group(),
    "Console Group End": () => console.groupEnd(),
    "Console Table": () => console.table([1, 2, 3]),
    "Start Timer": () => console.time("my-timer"),
    "End Timer": () => console.timeEnd("my-timer"),
    "Console Trace": () => {
      testTrace();
    },
    "Trigger a Global Error": () => {
      throw new CustomError("This is a custom error");
    },
  };
  for (const button of errorBtns) {
    if (buttonCallbacks[button.innerText]) {
      button.addEventListener("click", buttonCallbacks[button.innerText]);
    }
  }

  try {
    console.log(document.querySelector("fakebutton").innerText);
  } catch (err) {
    console.log("Could not find the button", err);
  } finally {
    console.log("Finished processing fakebutton request");
  }
}

function testTrace() {
  const something = new Array();
  testTrace2();
  return something;
}

function testTrace2() {
  console.trace();
}

class CustomError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "CustomError";
  }
}
