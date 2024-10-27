import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [form, setForm] = useState({ site: '' });
  const [passwordArray, setPasswordArray] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch saved numbers from the backend API
    axios.get('https://backend-airforshare.vercel.app/api/numbers')
      .then(res => setPasswordArray(res.data))
      .catch(err => console.error(err));
  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 6000);
      })
      .catch(err => console.error('Error copying text: ', err));
  };

  const savePassword = () => {
    if (form.site.length > 3) {
      // Save the number to the backend
      axios.post('https://backend-airforshare.vercel.app/api/numbers', { site: form.site })
        .then(res => setPasswordArray([...passwordArray, res.data]))
        .catch(err => console.error(err));

      setForm({ site: '' });
    } else {
      alert('Site User name and password should be greater than 3 letters');
    }
  };

  const deletePassword = (id) => {
    let confirmDelete = confirm('Do you really want to delete the number?');
    if (confirmDelete) {
      axios.delete(`https://backend-airforshare.vercel.app/api/numbers/${id}`)
        .then(() => setPasswordArray(passwordArray.filter(item => item._id !== id)))
        .catch(err => console.error(err));
    }
  };

  const editPassword = (id) => {
    console.log('Editing password with this ID:', id);
    const selectedPassword = passwordArray.filter(item => item._id === id)[0];
    setForm(selectedPassword);
    setPasswordArray(passwordArray.filter(item => item._id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mx-auto max-w-4xl min-h-[84vh] flex-col">
        <h1 className='text-4xl text font-bold text-center'>
          <span className='text-blue-700'>&lt;</span>
          <span className='text-black '>Save</span> <span className='text-blue-700'>Number&gt;</span>
        </h1>
        <div className="flex flex-col p-4 text-black gap-4 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder='Enter Your Number'
            className='border border-black rounded-md w-full h-8 text-3xl p-4 py-8'
            type="number"
            name="site"
            id="site"
          />
          <div className='flex flex-row'>
            <button onClick={savePassword} className='flex justify-center items-center bg-blue-600 hover:bg-blue-300 rounded-full px-3 py-2 w-fit gap-3'>
              <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover" />
              Save Number
            </button>
          </div>
        </div>

        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Saved Number</h2>
          {passwordArray.length === 0 && <div>No Saved Numbers To Show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full">
              <thead className='bg-blue-800 text-white'>
                <tr>
                  <th className='py-2'>Numbers</th>
                  <th className='py-2'>Actions</th>
                </tr>
              </thead>
              <tbody className='bg-blue-100'>
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className='border border-white py-4 text-center min-w-32 flex flex-row items-center justify-center font-bold'>
                        <a href={item.site} target='_blank' rel="noreferrer">{item.site}</a>
                        <div className="size-7 cursor-pointer flex flex-row" onClick={() => copyText(item.site)}>
                          <lord-icon src="https://cdn.lordicon.com/depeqmsz.json" trigger="hover" />
                        </div>
                        {copied && (
                          <span className="absolute left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white p-2 rounded">
                            Copied!
                          </span>
                        )}
                      </td>

                      <td className='py-2 border border-white text-center min-w-32 font-bold'>
                        <span className='cursor-pointer mx-2' onClick={() => editPassword(item._id)}>
                          <lord-icon src="https://cdn.lordicon.com/pflszboa.json" trigger="hover" />
                        </span>
                        <span className='cursor-pointer mx-2' onClick={() => deletePassword(item._id)}>
                          <lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
