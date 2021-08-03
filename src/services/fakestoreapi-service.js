export default class FakestoreapiService {

  _apiBase = 'https://fakestoreapi.com'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
  
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }
  
    return await res.json();
  }

  getProducts() {
    return this.getResource(`/products/`)
  }

  getProduct(id) {
    return this.getResource(`/products/${id}`)
  }
}

const fakestoreapi = new FakestoreapiService();

fakestoreapi.getProduct(3).then(product => {
  console.log(product)
})