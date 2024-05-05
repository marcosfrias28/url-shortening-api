import { useEffect, useState } from 'react'
import axios from 'axios'
import { Toaster, toast } from 'sonner'

export function Form () {
  const [url, setUrl] = useState('')

  function fetchData (url) {
    axios
      .get(`https://isaaa.gd/create.php?format=json&url=${url}`)
      .then(({ data }) => {
        console.log(data.shorturl)
      })
      .catch(error => {
        toast.error(error)
      })
  }

  function handleSubmit (event) {
    event.preventDefault()
    const regExp =
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    if (regExp.test(url)) {
      fetchData(url)
    } else {
      toast.error('Incorrect url, please write a correct one')
    }
  }

  return (
    <div
      id='get-started'
      className="relative p-6 md:p-5 mx-auto bg-DarkViolet rounded-xl bg-[url('/images/bg-shorten-mobile.svg')] md:bg-[url('/images/bg-shorten-desktop.svg')] bg-contain md:bg-cover bg-right bg-no-repeat w-full md:max-w-[1110px] h-[160px] md:h-auto min-w-[330px]"
    >
      <Toaster className='absolute bottom-24 left-0' richColors />
      <form
        onSubmit={e => handleSubmit(e)}
        className='flex flex-col md:flex-row gap-5 h-full justify-center items-center border-rose-50'
        action=''
      >
        <input
          onChange={e => setUrl(e.target.value)}
          className='bg-white border border-white rounded-md w-full h-1/2 px-4 py-3 outline-Cyan md:flex-grow'
          type='text'
          placeholder='Shorten a link here... (www.example.com or example.com or https://www.example.com)'
        />
        <button
          type='submit'
          className='bg-Cyan rounded-md w-full md:w-auto text-nowrap h-1/2 px-7 py-3 font-bold hover:scale-105 transition-all'
        >
          shorten It!
        </button>
      </form>
    </div>
  )
}
