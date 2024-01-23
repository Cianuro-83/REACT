import React, { useState } from 'react';
import FormUiHeader from './formUi/FormUiHeader';
import FormUiInput from './formUi/FormUiInput';
import FormUiTextArea from './formUi/FormUiTextArea';
import FormUiSelect from './formUi/FormUiSelect';
import FormUiGroupCheckbox from './formUi/formUiCheckbox/FormUiGroupCheckbox';
import FormUiGroupRadio from './formUi/FormUiRadio/FormUiGroupRadio';
import FormUiDropFile from './formUi/FormUiDropFile';
import FormResetButton from './formUi/formUtility/FormResetButton';
import FormSubmitButton from './formUi/formUtility/FormSubmitButton';
import { selectValues, formUIGroupCheckboxValues, formUIGroupRadioValues } from './formUi/formUtility/formData';
import { handleSubmit } from './formUi/formUtility/formSubmit';
import { validateFirstName, validateTextArea, validateSelect, validateCheckbox, validateRadio } from './formUi/formUtility/validateForm';



const Form = () => {
  const defaultValue = selectValues.find( item => item.default )?.value || 0;
  const [form, setForm] = useState( {
    firstname: '',
    lastname: '',
    description: '',
    country: defaultValue,
    notificationType: [],
    notificationPush: null,
    files: []
  } );
  const [errors, setErrors] = useState( {
    firstname: null,
    lastname: null,
    description: null,
    country: null,
    notificationType: null,
    notificationPush: null,
    files: null,
  } );
  const [fileKey, setFileKey] = useState( Date.now() ); // Aggiungo uno stato per forzare la rimontaggio dell'input file
  const handleReset = () => {
    setForm( {
      firstname: '',
      lastname: '',
      description: '',
      country: defaultValue,
      notificationType: [],
      notificationPush: null,
      files: null,
    } );
    setErrors( {
      firstname: null,
      lastname: null,
      description: null,
      country: null,
      notificationType: null,
      notificationPush: null,
      files: null,
    } );
    // Forzo il rimontaggio dell'input file
    setFileKey( Date.now() );
  };

  const handleFormSubmit = ( e ) => {
    const fields = {
      firstname: validateFirstName,
      lastname: validateFirstName,
      description: validateTextArea,
      country: validateSelect,
      notificationType: validateCheckbox,
      notificationPush: validateRadio,

      // ... altri campi da validare
    };

    const success = handleSubmit( e, form, fields, setErrors );

    if ( success ) {
      // Esegui azioni aggiuntive dopo il successo dell'invio del modulo
    }
  };


  return (
    <>
      <form className='container' onSubmit={ handleFormSubmit }>
        <h3 className='text-center'>Form</h3>
        <FormUiHeader title="Titolo form" subtitle="Sottotitolo form" />

        <div className='scb-form-grid'>
          <FormUiInput
            id="firstname"
            label="First Name"
            type={ 'text' }
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
          error={ errors.description }
        />

        <FormUiSelect
          id="country"
          label="Country"
          selectFakeValue="Scegli una nazione"
          values={ selectValues }
          defaultValue={ defaultValue }
          onChange={ ( e ) => setForm( { ...form, country: parseInt( e.target.value, 10 ) } ) }
          error={ errors.country }
        />

        <FormUiGroupCheckbox
          title="Notification"
          values={ formUIGroupCheckboxValues }
          onChange={ ( selected ) => setForm( { ...form, notificationType: selected } ) }
          error={ errors.notificationType }
        />

        <FormUiGroupRadio
          nameGroup="push-notifications"
          title="Push Notifications"
          values={ formUIGroupRadioValues }
          onChange={ ( e ) => setForm( { ...form, notificationPush: parseInt( e.target.value, 10 ) } ) }
          error={ errors.notificationPush }
        />



        <FormUiDropFile
          key={ fileKey } // Aggiungi la chiave per forzare il rimontaggio
          id="myfile"
          label="UploadFile"
          multiple={ true }
          minFiles={ 0 }
          validationFunction={ ( files ) => [minFileValidator( files, 1 )] }
          maxFiles={ 3 }
          maxSize={ 1024 * 1024 }
          accept={ {
            // "image/png": [],
            // "image/svg+xml": []
            "image/*": []
          } }
          info="Campo RICHIESTO: solo un file, png / svg del peso max di 1024kb"
          onAddFiles={ ( files ) => setForm( { ...form, files } ) }
        />


        {/* BLOCCO BOTTONE SVUOTA E SUBMIT */ }
        <div>

          <div className="scb-form-button">
            <FormResetButton
              onReset={ handleReset }
              defaultValue={ defaultValue }
              formUIGroupRadioValues={ formUIGroupRadioValues }
              formUIGroupCheckboxValues={ formUIGroupCheckboxValues }
            />
            <FormSubmitButton />
          </div>

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
