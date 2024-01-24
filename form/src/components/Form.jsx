import { useState } from 'react';
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
    files: null,
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

  const handleReset = () => {
    setForm( {
      firstname: '',
      lastname: '',
      description: '',
      country: defaultValue,
      notificationType: [],
      notificationPush: null,
    } );
    setErrors( {
      firstname: null,
      lastname: null,
      description: null,
      country: null,
      notificationType: null,
      notificationPush: null,
    } );
  };

  const handleFormSubmit = ( e ) => {
    const fields = {
      // Campi da validare (nomeCampo: funzioneDiValidazione,)
      firstname: validateFirstName,
      lastname: validateFirstName,
      description: validateTextArea,
      country: validateSelect,
      notificationType: validateCheckbox,
      notificationPush: validateRadio,
    };

    const success = handleSubmit( e, form, fields, setErrors );

    if ( success ) {
      // Esegui azioni aggiuntive dopo il successo dell'invio del modulo
    }
  };


  return (
    <>
      <form className='container' onSubmit={ handleFormSubmit }>
        <h3 className='text-center'>Componente Form</h3>
        <FormUiHeader
          classBox=""
          title="Titolo"
          classTitle=""
          subtitle="Sottotitolo"
          classSubtitle=""
        />

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
          maxChars={ 1000 }
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
          id="myfile"
          label="UploadFile"
          multiple={ false }
          minFiles={ 0 }
          maxFiles={ 1 }
          maxSize={ 1024 * 1024 }
          accept={ {
            "application/pdf": []
          } }
          // campoRichiesto="✅"
          campoRichiesto="❌"
          infoNumFiles="1"
          infoTypeFiles="Documenti "
          infoExtFiles=".pdf"
          infoSizeFiles="> ad 1 MB"
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
