export const api = {
  checkout() {
    return fetch('http://127.0.0.1:3000')
      .then(response => response.json());
  }
}
