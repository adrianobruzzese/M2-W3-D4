const photoPick = (image) => `<div class="col mb-4">
                          <div class="card mb-4 shadow-sm h-100">
                          <img src=${image.src.large} class="card-img-top" alt=${image.alt} style="height: 200px; object-fit: cover; cursor: pointer" onclick="goToDetails(${image.id})">
                            <div class="card-body d-flex flex-column">
                              <h5 class="card-title" onclick="goToDetails(${image.id})" style="cursor: pointer">${image.alt}</h5>
                                <p class="card-text mt-auto">
                                </p>
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <div class="btn-group">
                                    <button
                                      type="button"
                                      class="btn btn-sm btn-outline-secondary"
                                      
                                    >
                                      View
                                    </button>
                                    <button
                                      type="button"
                                       class="btn btn-sm btn-outline-secondary"
                                         ">
                                      Hide
                                    </button>
                                  </div>
                                  <small class="text-muted">${image.id}</small>
                              </div>
                            </div>
                          </div>
                        </div>`;



const apiKey = 'NFPIxdAAaZqfK3B4EE6nSXm1H4d5wOTkaUqnpA8nxB8p3YJIS7m3SwDP';
let loadImages = async (query) => {
  const resp = await fetch('https://api.pexels.com/v1/search?query=' + query, {
    method: 'GET',
    headers: {
      Authorization: 'NFPIxdAAaZqfK3B4EE6nSXm1H4d5wOTkaUqnpA8nxB8p3YJIS7m3SwDP',
    },
  });
  const body = await resp.json();

  const grid = document.getElementById('myGrid');

  grid.innerHTML = '';
  body.photos.forEach((photo) => {
    grid.innerHTML += photoPick(photo);
  });
};
//ha senso cancellare tutte le immagini per crearne di nuove??

let searchQuery;

const handleSearchQuery = (e) => {
  searchQuery = e.target.value;
};

const searchImages = () => {
  loadImages(searchQuery);
};

window.onload = () => {
  const loadImagesBtn = document.querySelector(
    '.jumbotron a.btn:first-of-type'
  );
  loadImagesBtn.onclick = () => loadImages('wine');

  const loadSecondaryImagesBtn = document.querySelector(
    '.jumbotron a.btn:nth-of-type(2)'
  );
  loadSecondaryImagesBtn.onclick = () => loadImages('pizza');

  const searchInput = document.querySelector('.jumbotron .form-control');
  searchInput.oninput = (event) => handleSearchQuery(event);

  const searchBtn = document.querySelector('.jumbotron button.btn');
  searchBtn.onclick = () => searchImages();
};

const goToDetails = (id) => {
    window.location.assign('./details.html?picId=' + id);
  };
