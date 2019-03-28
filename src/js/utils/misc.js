export const toDataUrl = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const scrollToTop = () => window.scrollTo(0, 0);

export const scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight);
