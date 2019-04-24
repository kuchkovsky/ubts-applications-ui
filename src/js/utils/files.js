import axios from 'axios';
import { FILE_DOWNLOAD_TOKEN } from './apiEndpoints';

export const toDataUrl = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const downloadFile = (url, studentId, newTab = false) => {
  axios.get(`${FILE_DOWNLOAD_TOKEN}/${studentId}`)
    .then(response => {
      const link = document.createElement('a');
      link.href = `${url}?token=${response.data.token}`;
      if (newTab) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      document.body.appendChild(link);
      link.click();
    });
};
