// FIRSTNAME E LAST NAME
export const validateFirstName = ( firstName ) => {
  const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  if ( firstName.trim() === '' ) {
    return 'Dato Richiesto.';
  } else if ( !nameRegex.test( firstName ) ) {
    return 'Il dato inserito non è valido e/o contiene numeri.';
  } else if ( firstName.length < 2 ) {
    return 'Il capo è troppo corto: deve avere almeno 2 caratteri.';
  } else if ( firstName.length > 30 ) {
    return 'Il capo è troppo lungo: può avere al massimo 30 caratteri.';
  }
  return null;
};

// TEXT AREA
export const validateTextArea = ( text ) => {
  if ( text.trim() === '' ) {
    return 'Dato Richiesto.';
  } else if ( text.length < 5 ) {
    return 'Il testo è troppo corto: deve avere almeno 5 caratteri.';
  } else if ( text.length > 1000 ) {
    return 'Il testo è troppo lungo: è possibile avere al massimo 1000 caratteri.';
  }
  return null;
};

// SELECT
export const validateSelect = ( value ) => {
  if ( value === 0 ) {
    return 'Dato Richiesto.';
  }
  return null;
};

// CHECKBOX
export const validateCheckbox = ( value ) => {
  if ( value.length < 1 ) {
    return 'Dato Richiesto.';
  } else if ( value.length > 3 )
    return 'Puoi selezionare al massimo 3 opzioni.';
  return null;
};
