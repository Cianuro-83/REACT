export const validateFirstName = ( firstName ) => {
  const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  if ( firstName.trim() === '' ) {
    return 'Il nome è obbligatorio.';
  } else if ( !nameRegex.test( firstName ) ) {
    return 'Il nome non è valido.';
  } else if ( firstName.length < 2 ) {
    return 'Il nome è troppo corto: deve avere almeno 2 caratteri.';
  } else if ( firstName.length > 30 ) {
    return 'Il nome è troppo lungo: deve avere massimo 30 caratteri.';
  }

  return null;
};