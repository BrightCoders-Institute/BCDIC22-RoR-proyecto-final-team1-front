import { useRef, useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import './Phonenumber.css';

const Phonenumber = (props) => {
  const formRef = useRef();
  const history = useNavigate();
  const [userData, setUserData] = useState(null);
  const [phone, setPhone] = useState('')

  function handleClick() {
    props.onStateChange(false);
  }

  //Funtion to get current user data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://earthbnd.onrender.com/current_user', {
          headers: {
            "content-type": 'application/json',
            "authorization": localStorage.getItem("token")
          },
        });
        let data = await response.json()
        setUserData(data)
      } catch (error) {
        history('/');
        console.log(error);
        return null;
      }
    };
    fetchUserData()
  }, [history, userData]);

  //Function handle input to be 10 char with no special char
  const handleInputChange = (event) => {
    // const value = event.target.value.slice(0, 10);
    const value = event.target.value;
    // if (/^[0-9]+$/.test(value)) {
    setPhone(value);
    // }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updatedPhone = {
      phone_number: phone
    }

    const response = await fetch(`https://earthbnd.onrender.com/users/users/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPhone),
    });

    if (response.ok) {
      window.alert('Editado exitosamente')
      props.onStateChange(false);
      history('/');
      return null;
    } else {
      window.alert('Hubo un error')
    }
  }

  return (
    <div className='background'>
      <div className="phoneCard box-login flex flex-col overflow-scroll bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-lg h-3/6">
        <div className="font-bold flex justify-center align-middle pb-4 w-full text-gray-800 border-b-gray-300 border-b-2">
          <AiOutlineClose className="closeBtn" onClick={handleClick} />
          <h1 className="text-center">Agrega o cambia tu numero telefonico</h1>
        </div>
        <div className="mt-10">
          <form className="space-y-4 md:space-y-6" action="#" ref={formRef} onSubmit={handleUpdate}>
            <div>
              <label for="phone" className="block mb-2 text-md font-bold text-dark dark:text-dark">Num. de telefono</label>
              <input type="text" name="phone" id="phone" value={phone} onChange={handleInputChange} className="bg-white border border-gray-700 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button type="submit" value="Submit" className="w-full text-white bg-[#E00B41] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center dark:bg-[#E00B41] dark:hover:bg-[#EE0B41] dark:focus:ring-primary-800">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Phonenumber
