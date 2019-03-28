import { setOptions } from 'filepond';
import { registerPlugin } from 'react-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

registerPlugin(FilePondPluginFileValidateType);
registerPlugin(FilePondPluginFileValidateSize);
registerPlugin(FilePondPluginImagePreview);

setOptions({
  labelButtonAbortItemLoad: 'Скасувати',
  labelButtonAbortItemProcessing: 'Скасувати',
  labelButtonRemoveItem: 'Видалити',
  labelButtonRetryItemProcessing: 'Повторити спробу',
  labelFileProcessing: 'Завантаження файлу',
  labelFileProcessingAborted: 'Завантаження скасовано',
  labelFileProcessingComplete: 'Файл успішно завантажено',
  labelFileProcessingError: 'Не вдалося завантажити файл',
  labelFileRemoveError: 'Не вдалося видалити файл',
  labelIdle: 'Перетягніть файл або натисніть, щоб <span class="filepond--label-action"> Вибрати </span>',
  labelTapToCancel: 'Натисніть, щоб скасувати',
  labelTapToRetry: 'Спробувати знову',
  labelTapToUndo: 'Натисніть, щоб видалити',
  labelButtonRetryItemLoad: 'Повторити спробу',
  labelMaxFileSizeExceeded: 'Файл занадто великий',
  labelMaxFileSize: 'Максимальний розмір - {filesize}',
});
