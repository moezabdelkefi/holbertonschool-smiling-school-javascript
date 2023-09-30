$(document).ready(function () {
  const loader = $(".loader");
  const carouselInner = $(".carousel-inner");

  loader.html('<div class="d-flex justify-content-center"><div class="spinner-border text-light" role="status" style="width: 5rem; height: 5rem; border-width: .7em;"><span class="sr-only">Loading...</span></div></div>');

  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    success: function (res) {
      loader.hide();

      carouselInner.empty();
      res.forEach((quote, i) => {
        const isActive = i === 0 ? "active" : "";
        const quoteHTML = `
                  <div class="carousel-item ${isActive}">
                      <div class="row mx-auto align-items-center">
                          <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                              <img src="${quote.pic_url}" class="d-block align-self-center" alt="Carousel Pic ${i + 1}" />
                          </div>
                          <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                              <div class="quote-text">
                                  <p class="text-white">${quote.text}</p>
                                  <h4 class="text-white font-weight-bold">${quote.name}</h4>
                                  <span class="text-white">${quote.title}</span>
                              </div>
                          </div>
                      </div>
                  </div>`;
        carouselInner.append(quoteHTML);
      });
    },
    error: function (error) {
      loader.hide();
      console.error("Error fetching quotes:", error);
    }
  });
});
  