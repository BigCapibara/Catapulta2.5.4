const bg = document.getElementById("bg");
const container = document.getElementById("container");

container.addEventListener("mousemove", (e) => {
  const y = e.clientY;
  const w = e.clientX;

  bg.style.top = `${y - 450}px`;
  bg.style.left = `${w - 300}px`;
});

let exp = true;

const expander = document.getElementById("expander");
const sect = document.getElementById("sec-2");

expander.addEventListener("click", () => {
  if (exp) {
    sect.style.height = 100vh;
    sect.style.overflowY = "scroll";
    sect.style.paddingTop = "100px";
    exp = false;
  } else {
    sect.style.height = 0;
    sect.style.overflowY = "hidden";
    sect.style.paddingTop = "0";
    exp = true;
  }
});

const navs = document.querySelectorAll(".navs");

navs.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("act");
    setTimeout(() => {
      e.classList.remove("act");
    }, 250);
  });
});

const e1 = document.getElementById("e-1");
const e2 = document.getElementById("e-2");
const e3 = document.getElementById("e-3");

const btn1 = document.getElementById("bt-e1");
const btn2 = document.getElementById("bt-e2");
const btn3 = document.getElementById("bt-e3");

let t1 = false;
let t2 = false;
let t3 = false;

const comrpobar = () => {
  if (t1) {
    e1.style.height = "0";
    e1.style.padding = "0";
    t1 = false;
  } else if (t2) {
    e2.style.height = "0";
    e2.style.padding = "0";
    t2 = false;
  } else if (t3) {
    e3.style.height = "0";
    e3.style.padding = "0";

    t3 = false;
  }
};

btn1.addEventListener("click", (e) => {
  if (!t1 && !t2 && !t3) {
    e1.style.height = "60vh";
    e1.style.padding = "100px";
    t1 = true;
  } else {
    e1.style.height = "60vh";
    e1.style.padding = "100px";
    t1 = true;
    comrpobar();
  }
});

btn2.addEventListener("click", (e) => {
  if (!t1 && !t2 && !t3) {
    e2.style.height = "60vh";
    e2.style.padding = "100px";
    t2 = true;
  } else {
    e2.style.height = "60vh";
    e2.style.padding = "100px";
    t2 = true;
    comrpobar();
  }
});

btn3.addEventListener("click", (e) => {
  if (!t1 && !t2 && !t3) {
    e3.style.height = "60vh";
    e3.style.padding = "100px";
    t3 = true;
  } else {
    e3.style.height = "60vh";
    e3.style.padding = "100px";
    t3 = true;
    comrpobar();
  }
});
