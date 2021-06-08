const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 50px 0px",
};

const imgOptions = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observe) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observe.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
