"use strict";

const mainContent = document.querySelector(".main-content");

fetch("https://dummyjson.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.posts.forEach((post) => {
      const article = document.createElement("article");
      article.classList.add("post");

      const h2 = document.createElement("h2");
      h2.textContent = post.title;

      const p = document.createElement("p");
      p.textContent = post.body;
      article.appendChild(h2);
      article.appendChild(p);
      mainContent.appendChild(article);
    });
  });
git