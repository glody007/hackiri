import React, { useState }  from 'react';
import './Registration.css';
import NavBar from "../../components/Header/NavBar";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { registrationApi } from '../../api';

function Registration() {

    const [loading, setLoading] = useState(false),
          [postError, setPostError] = useState(false);
    const history = useHistory();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
      setLoading(true);
      setPostError(false);
      data.numero = data.number
      data.nom = data.name
      registrationApi.post('/', {
        data: data
      })
      .then(function (response) {
        setLoading(false);
        history.push('/home');
      })
      .catch(function (error) {
        setLoading(false);
        setPostError(true);
      });
    };

    return (
        <div className="">
            <header>
                <NavBar />
            </header>

            <div className="Main colums">
              <div className="column is-4 is-offset-4">
                <h2 className="is-size-4 subtitle">
                   <strong>Inscrivez-vous pour devenir un hackirien</strong>
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="field">
                    <label class="label">Nom et post-nom</label>
                    <div class="control">
                      <input class="input"
                             type="text"
                             placeholder="Madara Uchiha"
                             {...register("name", { required: true })}/>
                    </div>
                    <p class="help is-danger">{errors.name && "Nom obligatoire"}</p>
                  </div>

                  <div class="field">
                    <label class="label">Numero</label>
                    <div class="control">
                      <input class="input"
                             type="number"
                             placeholder="+243997000000"
                             {...register("number", { required: true, pattern: /^!*([0-9]!*){10,}/ })}/>
                    </div>
                    <p class="help is-danger">{errors.number && "Le numéro de téléphone doit avoir plus de 9 chiffres"}</p>
                  </div>

                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                      <input class="input"
                             type="email"
                             placeholder="Alan@turing.com"
                             {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
                    </div>
                    <p class="help is-danger">{errors.email && "Email obligatoire"}</p>
                  </div>

                  <div class="field">
                    <label class="label">Ville</label>
                    <div class="control">
                      <input class="input"
                             type="text"
                             placeholder="Lubumbashi"
                             {...register("ville", { required: true })}/>
                    </div>
                    <p class="help is-danger">{errors.ville && "Ville obligatoire"}</p>
                  </div>

                  <div class="field">
                    <label class="label">Sexe</label>
                    <div class="control">
                      <div class="select">
                        <select {...register("sexe", { required: true })}>
                          <option>Homme</option>
                          <option>Femme</option>
                        </select>
                      </div>
                    </div>
                    <p class="help is-danger">{errors.email && "Genre obligatoire"}</p>
                  </div>

                  <div class="control">
                    <button className={`button is-danger is-fullwidth is-medium ${loading ? 'is-loading' : ''}`} type="submit">S'inscrire</button>
                    <p class="help is-danger">{postError && "Erreur pendant l'enregistrement veuillez réessayer"}</p>
                  </div>
                </form>
              </div>
            </div>
        </div>
    );
}

export default Registration;
