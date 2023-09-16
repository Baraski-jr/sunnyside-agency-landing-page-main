const toggle = document.querySelector(".hamburger-menue");
const nav = document.querySelector(".primary-navigation");

toggle.addEventListener("click", (e) => {
  console.log("click");
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
    nav.classList.add("close");
  } else {
    nav.classList.remove("close");
    nav.classList.add("open");
  }
});

// const primaryHeader = document.querySelector(".primary-header-navigation");
// const scrollWatcher = document.createElement("div");
// scrollWatcher.textContent = "here";
//
// scrollWatcher.setAttribute("data-scroll-watcher", "");
// primaryHeader.before(scrollWatcher);
// const navObserver = new IntersectionObserver(() => {
//   primaryHeader.classList.toggle("sticking", !entries[0].isIntersecting);
// });
// navObserver.observe(scrollWatcher);
// console.log(primaryHeader);
