const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//вариант 1

function createGallery(array) {
  const galleryList = document.getElementById("gallery");
  galleryList.classList = "gallery_list";

  const galleryItems = array.reduce(
    (string, el) =>
      string +
      `<li class="gallery_item"><img src="${el.url}" alt="${el.alt}" width="300"></li>`,
    ""
  );

  galleryList.insertAdjacentHTML("afterbegin", galleryItems);

  return galleryList;
}

console.log(createGallery(images));

//вариант 2

/* function createGallery (array) {
const galleryList = document.getElementById("gallery");
galleryList.classList = "gallery_list";
const galleryItems = array.map((item) => {
const galleryItem = document.createElement("li");
galleryItem.classList = "gallery_item";

const galleryImg = document.createElement("img");
galleryImg.setAttribute('src', item.url);
galleryImg.setAttribute('alt', item.alt);
galleryImg.setAttribute('width', 300);
                
galleryItem.append(galleryImg)
 return galleryItem
})
   
galleryList.append(...galleryItems);
return galleryList
}

console.log(createGallery(images)) */
