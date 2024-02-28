import { useGetMessagesQuery } from '../api/messageApi';

const ProvaApi = () => {
  const { data: messages, error, isError, isLoading } = useGetMessagesQuery();


  return (
    <>
      <h3>ProvaApi GET</h3>
      { isLoading && <div>Loading...</div> }
      { isError && <div>Error: { error.message }</div> }
      { messages && messages.map( message =>
        <p key={ message.id }>{ message.id } - { message.name } da: { message.email }</p> ) }
      <hr />
      <h3>ProvaApi POST</h3>

    </>
  );
};

export default ProvaApi;