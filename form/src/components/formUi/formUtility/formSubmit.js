
export const handleSubmit = ( e, form, fields, setErrors ) => {
  e.preventDefault();

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
    return false;
  }

  // INVIO IL FORM
  console.log( "Form inviato con successo!", form );
  return true;
};
