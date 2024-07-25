import './Authorisation.scss';
import { Button, TextField } from '@mui/material';

export const Authorisation = () => {
  return (
    <>
      <div className="form_auth_block">
        <div className="form_auth_block_content">
          <p className="form_auth_block_head_text">Войти в систему</p>
          <form className="form_auth_style" action="#" method="post">
            <TextField required id="number-field" label="Номер телефона" />
            <TextField required type="password" id="password-field" label="Пароль" />
            <Button type="submit" variant="contained">
              ВОЙТИ В СИСТЕМУ
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
