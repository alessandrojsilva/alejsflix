import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import UseForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = UseForm({
    titulo:  'Video padrão',
    url: 'https://www.youtube.com/watch?v=Usnp2ht_Upg',
    categoria: 'front-end',
  });

    return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          //alert('Video cadastrado com sucesso');
          
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1,
          })
            .then(() => {
              console.log('cadastrou com sucesso!!');
              history.push('/');
            });
          }}
        >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          />

          <FormField
          label="url"
          name="titulo"
          value={values.url}
          onChange={handleChange}
          />

          <FormField
          label="categoria"
          name="titulo"
          value={values.categoria}
          onChange={handleChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
          </form>


        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>

      </PageDefault>
    )
  }

  export default CadastroVideo;