import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { serviceValues } from '../servizi';
import FormModal from '../components/FormModal';


const Contacts = () => {
  const { register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,

  } = useForm( {
    defaultValues: {
      condizioniduso: true,
    }
  } );
  console.log( errors );
  const [formData, setFormData] = useState( { fotoprofilo: [] } );
  const [showModal, setShowModal] = useState( false );

  const onSubmit = handleSubmit( ( data, event ) => {
    console.log( data );
    setFormData( data );

    if ( Object.keys( errors ).length === 0 ) {
      setShowModal( true );
    }

    // const ulElement = event.target.parentNode.querySelector( ' ul' );
    // ulElement.innerHTML = '';
    // const fileInput = event.target.parentNode.querySelector( 'input[type="file"]' );
    // fileInput.value = '';
    // reset();

  } );
  // useEffect( () => {
  //   setFormData( watch() );
  // }, [watch] );
  const message = watch( 'messaggio', '' );
  const trimmedLength = message.trim().length;

  const handleFileChange = ( event ) => {
    const fileList = event.target.files;
    const fileNames = Array.from( fileList ).map( file => file.name );
    const ulElement = event.target.parentNode.querySelector( ' ul' );
    ulElement.innerHTML = fileNames.map( name => `<li class='file-list'>${name}</li>` ).join( '' );
  };
  const handleModalClose = () => {
    setShowModal( false );
    setFormData( {} );
  };



  return (
    <div className='container'>
      <h1>
        CONTATTI <hr />
      </h1>
      <p>LINK</p>
      <div className='d-flex justify-content-center gap-4'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
      <br /><br /><br /><br />
      <hr />
      <p>NAVLINK</p>
      <div className='d-flex justify-content-center gap-4'>
        <NavLink className={ ( { isActive } ) => isActive ? 'active-link' : 'null' } to="/">Home</NavLink>
        <NavLink className={ ( { isActive } ) => isActive ? 'active-link' : 'null' } to="/about">About</NavLink>
        <NavLink className={ ( { isActive } ) => isActive ? 'active-link' : 'null' } to="/contacts">Contacts</NavLink>

      </div>
      <hr />
      <div>
        <form className='d-flex flex-column' onSubmit={ onSubmit }>
          {/* nome */ }
          <label htmlFor="nome">Nome</label>
          <input type="text" className={ errors.nome && "input-error" }
            { ...register( "nome", {
              required: {
                value: true,
                message: "Il nome è richiesto"
              },
              validate: ( value ) => {
                if ( value.trim().length < 2 ) {
                  return "Il nome è troppo corto, min 2 caratteri";
                } else if ( value.trim().length > 20 ) {
                  return "Il nome è troppo lungo, max 20 caratteri";
                }
                return true;
              }
            } ) }
          />
          { errors.nome && <p className='form-error'>{ errors.nome.message }</p> }


          {/* email */ }
          <label htmlFor="email">Email</label>
          <input type="email" className={ errors.email && "input-error" }
            { ...register( "email", {
              required: {
                value: true,
                message: "L'email è richiesta"
              },
              pattern: {
                value: /^[a-zA-Z0-9\._%+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/
                ,
                message: "Inserisci un'email valida"
              },
            } ) }
          />
          { errors.email && <p className='form-error'>{ errors.email.message }</p> }


          {/* password */ }
          <label htmlFor="password">Password</label>
          <input type="password" className={ errors.password && "input-error" }
            { ...register( "password", {
              required: {
                value: true,
                message: "La password è richiesta"
              },
            } ) }
          />
          { errors.password && <p className='form-error'>{ errors.password.message }</p> }


          {/* conferma password */ }
          <label htmlFor="confermaPassword">Conferma Password</label>
          <input type="password" className={ errors.confermaPassword && "input-error" }
            { ...register( "confermaPassword", {
              required: {
                value: true,
                message: "La conferma della password è richiesta"
              },
              validate: ( value ) => {
                if ( value !== watch( "password" ) ) {
                  return "Le password non corrispondono";
                }
                return true;
              }
            } ) }
          />
          { errors.confermaPassword && <p className='form-error'>{ errors.confermaPassword.message }</p> }


          {/* data di nascita */ }
          <label htmlFor="dataDiNasita">Data di Nascita</label>
          <input type="date" className={ errors.dataDiNasita && "input-error" }
            { ...register( "dataDiNasita", {
              required: {
                value: true,
                message: "La data di nascita è richiesta"
              },
              validate: ( value ) => {
                const nascita = new Date( value );
                const anni = ( Math.floor( ( Date.now() - nascita ) / ( 1000 * 60 * 60 * 24 * 365.25 ) ) );


                if ( nascita > new Date() ) {
                  return "Non puoi inserire date future";
                } else if ( anni < 18 ) {
                  return `Spiacente... Ad oggi hai solo ${anni} anni e per registrarti devi averne almeno 18`;
                }

              }
            } ) }
          />
          { errors.dataDiNasita && <p className='form-error'>{ errors.dataDiNasita.message }</p> }


          {/* nazione */ }
          <label htmlFor="nazione">Nazione</label>
          <select className={ errors.nazione && "input-error" }
            { ...register( "nazione" ) }
          >
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
            <option value="es">Spagna</option>
          </select>
          {
            watch( "nazione" ) === "es" && (
              <input
                type="text"
                className={ errors.regione && "input-error" }
                placeholder="Inserisci la regione"
                { ...register( "regione", {
                  required: {
                    value: true,
                    message: "La regione è richiesta"
                  }
                } ) }
              />
            )
          }
          { errors.nazione && <p className='form-error'>{ errors.nazione.message }</p> }
          { errors.regione && <p className='form-error'>{ errors.regione.message }</p> }


          {/* foto profilo */ }
          <div className={ errors.fotoprofilo && "input-error" }>
            <label htmlFor="fotoprofilo">Foto profilo <span>(supporta il caricamento multiplo)</span></label> <br />
            <input
              type="file"
              multiple
              { ...register( "fotoprofilo", {
                required: {
                  value: true,
                  message: "Devi selezionare almeno un file"
                },
                validate: ( value ) => {

                  if ( value.length > 3 ) {
                    return "Puoi selezionare al massimo 3 file";
                  }
                  for ( let file of value ) {
                    if ( file.size > ( 2 * 1024 * 1024 ) ) {
                      return "Il file è troppo grande, massimo 2MB consentito";
                    }
                    if ( file.type !== "image/jpeg" && file.type !== "image/png" ) {
                      return "Puoi caricare solo immagini";
                    }
                  }
                  return true;
                }
              } ) }
              onChange={ handleFileChange }
            />
            <div>
              <ul></ul>
            </div>
          </div>

          { errors.fotoprofilo && <p className='form-error'>{ errors.fotoprofilo.message }</p> }




          {/* servizi */ }

          <label htmlFor="servizi" className='mb-2'>Servizi</label>
          <div className={ errors.servizi && "input-error" }>
            { serviceValues.map( ( service ) => (
              <div key={ service.id } >
                <label className='check-space' htmlFor={ `service-${service.id}` }>{ service.id }</label>
                <input type="checkbox" { ...register( "servizi", {
                  required: {
                    value: true,
                    message: "Il servizio è richiesto"
                  },
                  validate: ( value ) => {
                    const selectedServices = value.filter( ( v ) => v !== false );
                    return selectedServices.length <= 2 || "Puoi selezionare al massimo 2 servizi";
                  }
                } ) }
                  id={ `service-${service.id}` }
                  value={ service.value }
                />
              </div>
            ) ) }
          </div>
          { errors.servizi && <p className='form-error'>{ errors.servizi.message }</p> }



          {/* text area */ }

          <label htmlFor="messaggio">
            Messaggio <span className={ trimmedLength > 20 ? 'text-danger' : '' }> { trimmedLength }</span> </label>
          <textarea className={ errors.messaggio && "input-error" || trimmedLength > 20 && "input-error" } rows={ 25 } style={ { resize: "none", padding: "15px" } } placeholder="Inserisci il tuo messaggio"
            { ...register( "messaggio", {
              validate: ( value ) => {
                if ( value.trim().length === 0 ) {
                  return "Il testo è richiesto";
                } else if ( value.trim().length < 2 ) {
                  return "Il nome è troppo corto, min 2 caratteri";
                } else if ( value.trim().length > 20 ) {
                  return "Il nome è troppo lungo, max 20 caratteri";
                }
                return true;
              }

            } ) }
          />
          { errors.messaggio && <p className='form-error'>{ errors.messaggio.message }</p> }




          {/* condizione d'uso */ }
          <label htmlFor="condizioniduso">Condizione d'uso</label>
          <input type="checkbox" className={ errors.condizioniduso && "input-error" }
            { ...register( "condizioniduso", {
              required: {
                value: true,
                message: "Devi accettare la condizione d'uso"
              },
            } ) }
          />
          { errors.condizioniduso && <p className='form-error'>{ errors.condizioniduso.message }</p> }


          {/* submit */ }

          <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onSubmit={ handleSubmit }>
            INVIA
          </button>

          <FormModal formData={ formData } showModal={ showModal } handleModalClose={ handleModalClose } />





          <pre>{ JSON.stringify( watch(), null, 2 ) }</pre>
        </form>
      </div >

    </div >
  );
};

export default Contacts;

