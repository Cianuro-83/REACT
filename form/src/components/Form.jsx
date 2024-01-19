import React, { useState, useRef } from 'react';
import FormUiHeader from './formUi/FormUiHeader';
import FormUiInput from './formUi/FormUiInput';
import FormUiTextArea from './formUi/FormUiTextArea';
import FormUiSelect from './formUi/FormUiSelect';
import FormUiGroupCheckbox from './formUi/FormUiGroupCheckbox';
import FormUiGroupRadio from './formUi/FormUiGroupRadio';
import FormUiFiles from './formUi/FormUiFiles/FormUiFiles';
import FormResetButton from './formUi/FormResetButton';
import { validateFirstName } from './formUi/validateForm';

// questi valori sono d'esempio... i dati arriveranno da api
const selectValues = [
  { value: '1', label: 'Italia' },
  { value: '2', label: 'Usa' },
  { value: '3', label: 'Cina' },
  { value: '4', label: 'Russia' },
  { value: '5', label: 'Grecia' },
];

// questi valori sono d'esempio... i dati arriveranno da api
const formUIGroupCheckboxValues = [
  { value: '1', label: 'Comments', description: 'Descrizione' },
  { value: '2', label: 'Newsletters', description: 'Descrizione' },
  { value: '3', label: 'Offers', description: 'Descrizione' },
  { value: '4', label: 'Promotions', description: 'Descrizione' },
  { value: '5', label: 'Other', description: 'Descrizione' },
  { value: '6', label: 'All', description: 'Descrizione' },
  { value: '7', label: 'None', description: 'Descrizione' },
];

// questi valori sono d'esempio... i dati arriveranno da api
const formUIGroupRadioValues = [
  { label: "Everything", id: "everything", value: "1", description: 'Descrizione' },
  { label: "Newsletters", id: "newsletters", value: "2", description: 'Descrizione' },
  { label: "Offers", id: "offers", value: "3", description: 'Descrizione' },
  { label: "Promotions", id: "promotions", value: "4", description: 'Descrizione' },
  { label: "Other", id: "other", value: "5", description: 'Descrizione' },
];

const Form = () => {
  const defaultValue = selectValues.find( item => item.default )?.value || '1';
  const [form, setForm] = useState( {
    firstname: '',
    lastname: '',
    description: '',
    country: defaultValue,
    notificationType: [],
    notificationPush: null,
    files: null
  } );
  const [errors, setErrors] = useState( {
    firstname: null,
    lastname: null,
  } );
  const fileInputRef = useRef( null );
  const handleReset = () => {
    setForm( {
      firstname: '',
      lastname: '',
      description: '',
      country: defaultValue,
      notificationType: [],
      notificationPush: null,
      files: null
    } );
  };

  const isFormEmpty = Object.entries( form ).every( ( [key, value] ) => {
    if ( key === 'country' ) {
      return value === defaultValue;
    }
    return value === '' || value === null || ( Array.isArray( value ) && value.length === 0 );
  } );

  const handleSubmit = ( e ) => {
    e.preventDefault();

    // Definisci un oggetto con i campi e le rispettive funzioni di validazione
    const fields = {
      firstname: validateFirstName,
      // lastname: validateLastName,
      // Aggiungi gli altri campi e le relative funzioni di validazione
    };

    // Oggetto per contenere gli errori dei campi
    const fieldErrors = {};

    // Verifico e aggiorno lo stato degli errori per ogni campo
    let hasError = false;
    for ( const field in fields ) {
      const error = fields[field]( form[field] );
      fieldErrors[field] = error; // Aggiorno lo stato degli errori per il campo corrente
      if ( error !== null ) {
        console.log( `Form non inviato a causa di un errore nel campo ${field}.` );
        hasError = true;
      }
    }

    // Aggiorna lo stato degli errori con l'oggetto contenente gli errori dei campi
    setErrors( fieldErrors );

    // Se ci sono errori, interrompi l'invio del modulo
    if ( hasError ) {
      return;
    }

    // INVIO IL FORM
    console.log( "Form inviato con successo!", form );
  };

  return (
    <>
      <form className='container' onSubmit={ handleSubmit }>
        <h3 className='text-center'>Form</h3>
        <FormUiHeader title="Titolo form" subtitle="Sottotitolo form" />

        <div className='scb-form-grid'>
          <FormUiInput
            id="firstname"
            label="First Name"
            placeholder={ 'Inserisci il tuo nome' }
            value={ form.firstname }
            onChange={ ( e ) => setForm( { ...form, firstname: e.target.value } ) }
            error={ errors.firstname }
          />

          <FormUiInput
            id="lastname"
            label="Last Name"
            placeholder={ 'Inserisci il tuo cognome' }
            value={ form.lastname }
            onChange={ ( e ) => setForm( { ...form, lastname: e.target.value } ) }
            error={ errors.lastname }
          />
        </div>

        <FormUiTextArea
          id="description"
          label="Description"
          rows={ 10 }
          placeholder="Inserisci una descrizione"
          value={ form.description }
          onChange={ ( e ) => setForm( { ...form, description: e.target.value } ) }
        />

        <FormUiSelect
          id="country"
          label="Country"
          values={ selectValues }
          defaultValue={ defaultValue }
          onChange={ ( e ) => setForm( { ...form, country: parseInt( e.target.value, 10 ) } ) }
        />

        <FormUiGroupCheckbox
          title="Notification"
          values={ formUIGroupCheckboxValues }
          onChange={ ( selected ) => setForm( { ...form, notificationType: selected } ) }
        />

        <FormUiGroupRadio
          nameGroup="push-notifications"
          title="Push Notifications"
          values={ formUIGroupRadioValues }
          onChange={ ( e ) => setForm( { ...form, notificationPush: parseInt( e.target.value, 10 ) } ) }
        />

        <FormUiFiles
          id="myfile"
          label="UploadFile"
          multiple={ false }
          onAddFiles={ ( files ) => setForm( { ...form, files } ) }
        // ref={ fileInputRef }
        />
        {/* BLOCCO BOTTONE SVUOTA E SUBMIT */ }
        <div>
          { !isFormEmpty && (
            <div className="scb-form-button">
              <FormResetButton
                onReset={ handleReset }
                defaultValue={ defaultValue }
                fileInputRef={ fileInputRef }
                formUIGroupRadioValues={ formUIGroupRadioValues }
                formUIGroupCheckboxValues={ formUIGroupCheckboxValues }
              />
              <button className="btn btn-success text-uppercase fw-bold" type="submit">
                Submit
              </button>
            </div>
          ) }
        </div>







      </form>

      <div className='container bg-primary text-dark fw-bolder fs-4'>
        <pre className='mt-5'>
          <code>
            { JSON.stringify( form, undefined, 2 ) }
          </code>
        </pre>
      </div>
    </>
  );
};

export default Form;
