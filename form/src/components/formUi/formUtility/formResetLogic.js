export const resetForm = ( defaultValue, fileInputRef, formUIGroupRadioValues, formUIGroupCheckboxValues, handleReset, ) => {
  handleReset();

  document.getElementById( 'country' ).value = defaultValue;

  formUIGroupRadioValues.forEach( ( radio ) => {
    document.getElementById( radio.id ).checked = false;
  } );

  formUIGroupCheckboxValues.forEach( ( checkbox ) => {
    document.getElementById( checkbox.value ).checked = false;
  } );

  // if ( fileInputRef.current ) {
  //   fileInputRef.current.value = '';
  // }
};
