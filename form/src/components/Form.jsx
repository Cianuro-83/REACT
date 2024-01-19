import React, { useState, useRef } from 'react';
import FormUiHeader from './formUi/FormUiHeader';
import FormUiInput from './formUi/FormUiInput';
import FormUiTextArea from './formUi/FormUiTextArea';
import FormUiSelect from './formUi/FormUiSelect';
import FormUiGroupCheckbox from './formUi/FormUiGroupCheckbox';
import FormUiGroupRadio from './formUi/FormUiGroupRadio';
import FormUiFiles from './formUi/FormUiFiles/FormUiFiles';
import FormResetButton from './formUi/FormResetButton';
import { selectValues, formUIGroupCheckboxValues, formUIGroupRadioValues } from './formUi/formUtility/formData';
import { handleSubmit } from './formUi/formUtility/formSubmit';
import { validateFirstName, validateTextArea } from './formUi/formUtility/validateForm';


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

  const handleFormSubmit = ( e ) => {
    const fields = {
      firstname: validateFirstName,
      lastname: validateFirstName,
      description: validateTextArea
      // ... altri campi e funzioni di validazione ...
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
