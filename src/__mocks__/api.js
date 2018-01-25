export const api = {
  checkout() {
    return new Promise(resolve => {
      setTimeout(() => resolve('ok'), 1000);
    });
  }
}
