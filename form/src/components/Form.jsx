import { useState } from 'react';
import FormUiHeader from './formUi/FormUiHeader';
import FormUiInput from './formUi/FormUiInput';
import FormUiTextArea from './formUi/FormUiTextArea';
import FormUiSelect from './formUi/FormUiSelect';
import FormUiGroupCheckbox from './formUi/FormUiGroupCheckbox';


// MESSO QUI PER TEST, SICURAMENTE SINO VALORI DI API
const selectValues = [
  { value: '1', label: 'Italia' },
  { value: '2', label: 'Usa', },
  { value: '3', label: 'Cina' },
  { value: '4', label: 'Russia' },
  { value: '5', label: 'Grecia' },
];
// MESSO QUI PER TEST, SICURAMENTE SINO VALORI DI API
const formUIGroupCheckboxValues = [
  { value: '1', label: 'Comments', description: 'Descrizione', },
  { value: '2', label: 'Newsletters', description: 'Descrizione', },
  { value: '3', label: 'Offers', description: 'Descrizione', },
  { value: '4', label: 'Promotions', description: 'Descrizione', },
  { value: '5', label: 'Other', description: 'Descrizione', },
  { value: '6', label: 'All', description: 'Descrizione', },
  { value: '7', label: 'None', description: 'Descrizione', },

];

const Form = () => {
  const defaultValue = selectValues.find( ( item ) => item.default ) ? selectValues.find( ( item ) => item.default ).value : 1;
  const [form, setForm] = useState( {
    firstname: '',
    lastname: '',
    description: '',
    country: defaultValue,
    notificationPush: [],
  } );
  return (
    <>
      <form className='container'>
        <h3 className=' text-center'>Form</h3>
        <FormUiHeader title="Titolo form " subtitle=" Sottotitolo form" />
        <div className='scb-form-grid'>
          <FormUiInput
            id="firstname"
            label="First Name"
            placeholder={ 'Inserisci il tuo nome' }
            value={ form.firstname }
            onChange={ ( e ) => {
              const val = e.target.value;
              setForm( { ...form, firstname: val } );
            } } />
          <FormUiInput
            id="lastname"
            label="Last Name"
            placeholder={ 'Inserisci il tuo cognome' }
            value={ form.lastname }
            onChange={ ( e ) => {
              const val = e.target.value;
              setForm( { ...form, lastname: val } );
            } } />
        </div>

        <FormUiTextArea
          id="description"
          label="Description"
          rows={ 10 }
          placeholder="Inserisci una descrizione"
          value={ form.description }
          onChange={ ( e ) => {
            const val = e.target.value;
            setForm( { ...form, description: val } );
          } }
        />

        <FormUiSelect
          id="country"
          label="Country"
          values={ selectValues }
          defaultValue={ defaultValue }
          onChange={ ( e ) => {
            const val = e.target.value;
            setForm( { ...form, country: parseInt( val, 0 ) } );
          } }
        />

        <FormUiGroupCheckbox
          title="Notification"
          values={ formUIGroupCheckboxValues }
          onChange={ ( selected ) => {
            setForm( { ...form, notificationPush: selected } );
          } }
        />



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

export default Form

