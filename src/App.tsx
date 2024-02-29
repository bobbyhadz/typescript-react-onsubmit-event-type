import React, {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  // 👇️ type event as React.FormEvent<HTMLFormElement>
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    // 👇️ prevent page refresh
    event.preventDefault();

    console.log(event.currentTarget.elements);
    console.log(event.currentTarget.elements[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
