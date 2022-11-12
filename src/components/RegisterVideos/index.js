import { useState } from 'react';

import { StyledRegisterVideo } from '../../style/RegisterVideos';
import useForm from '../../hooks/useForm';

export default function RegisterVideo() {
  const formCadastro = useForm({ initialValues: { titulo: '', url: '' } });
  const [formVisivel, setFormVisivel] = useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel && (
        <form
          onSubmit={(evento) => {
            evento.preventDefault();
            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
              X
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input placeholder="URL" name="url" value={formCadastro.values.url} onChange={formCadastro.handleChange} />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
