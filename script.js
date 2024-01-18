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
                                      onclick="modalLogic(event)"
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
                                  <small class="text-muted">9 mins</small>
                              </div>
                            </div>
                          </div>
                        </div>`;


const goToDetails = (id) => {
  window.location.assign('./details.html?picId=' + id);
};

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

