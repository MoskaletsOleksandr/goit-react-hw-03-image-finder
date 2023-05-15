export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '34991983-4beab49a12e957ed3014e2d55';

  searchedWord = null;
  page = 1;
  per_page = 12;

  loadedPhotos() {
    return this.page * this.per_page;
  }

  async fetchPhotos() {
    return await fetch(
      `${this.#BASE_URL}/?key=${this.#API_KEY}&q=${
        this.searchedWord
      }&image_type=photo&orientation=horizontal&page=${this.page}&per_page=${
        this.per_page
      }`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(
        new Error(`Картинок по запиту ${this.searchedWord}не знайдено`)
      );
    });
  }
}
