import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { PASTOR_APPLICATION, FRIEND_APPLICATION } from '../../utils/routes';
import LinkToClipboard from '../shared/LinkToClipboard';


const pastorApplicationUrl = `${process.env.UI_URL}${PASTOR_APPLICATION}`;
const friendApplicationUrl = `${process.env.UI_URL}${FRIEND_APPLICATION}`;

const Transition = props => (
  <Slide direction="up" {...props}/>
);

const SuccessAlert = ({ showAlert, onClose, studentId }) => (
  <div>
    <Dialog
      open={showAlert}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      keepMounted
      disableBackdropClick
      disableEscapeKeyDown
      TransitionComponent={Transition}
    >
      <DialogTitle>
        Ви успішно зареєструвалися як абітурієнт
        Української Баптистської Теологічної Семінарії! Вітаємо!
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          Для того, щоб завершити подачу документів, пастор вашої церкви та двоє ваших друзів
          (які не є родичами) повинні заповнити та надіслати нам конфіденційні рекомендації
          на навчання.
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          <b>Скопіюйте та надішліть посилання:</b>
          <ol>
            <li>
              Анкета пастора:
              <LinkToClipboard link={`${pastorApplicationUrl}/${studentId}`}/>
            </li>
            <li>
              Анкета друга:
              <LinkToClipboard link={`${friendApplicationUrl}/${studentId}`}/>
            </li>
          </ol>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Для пастора та для друзів відкриється онлайн анкета, заповнення якої займе
          не більше 10 хвилин.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Після отримання нами всіх необхідних рекомендацій ми надішлемо вам запрошення
          на співбесіду на електронну пошту, зазначену в анкеті.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Якщо у вас виникнуть питання щодо вступу, ви можете написати нам:&nbsp;
          <a href="mailto:new.student.ubts@gmail.com">new.student.ubts@gmail.com</a>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрити
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

SuccessAlert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
};

export default SuccessAlert;
