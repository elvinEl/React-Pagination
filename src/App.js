import { useState, useEffect, useContext } from 'react'
import FadeLoader from "react-spinners/FadeLoader";
import { darkMode } from './Context';
import DarkMode from './components/DarkMode';
import './tailwind.css'
import { FaBeer } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'
import { withTranslation } from 'react-i18next'


function App({ t, i18n }) {

  const [loading, setLoading] = useState(false)
  const [counts, setCount] = useState([])
  const [visible, setVisible] = useState(3);
  const { mode } = useContext(darkMode)


  function showMeals() {
    setVisible(item => item += 3)
  }


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=british').then(res => {
      return res.json()
    }).then(data => {
      setCount(data.meals)
    })
  }, [])


  const clickHandle = lang => {
    i18n.changeLanguage(lang)
  }

  return (

    <div className={mode === true ? 'dark' : 'light'}>

      <div>
        Language : {i18n.language}<br />

        <button className='border-[1px] bg-gray-500 px-5 hover:bg-gray-700 hover:duration-700' onClick={() => clickHandle('az')}>Az</button>
        <button className='border-[1px] bg-gray-500 px-5 hover:bg-gray-700  hover:duration-700' onClick={() => clickHandle('en')}>En</button>
      </div><br />

      {loading ?
        <FadeLoader color={'#fff'} loading={loading} size={150} /> :
        <div className='min-h-[100vh]'>
          <DarkMode />
          <h2 className='flex justify-center items-center text-5xl gap-[2rem] '> {t('Britsh Meals')}  <img className='w-[80px] h-[80px] rounded-[50%]' src='./image/Flag.png' alt="" /></h2>

          <div className='container grid grid-cols-3 m-w-[80%] m-auto gap-[2rem] mt-[2rem]'>

            {counts.slice(0, visible).map(count => (
              <div className='card flex flex-col items-center justify-center bg-blue-500 rounded'>
                <div className='max-w-[21rem] mt-[2rem]'>
                  <a href="#"><img className='rounded' src={count.strMealThumb} alt="" /></a>
                </div>
                <p className=' text-[1.5rem] mt-[2rem] mb-[2rem]'>{count.strMeal}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-center'>
            <button onClick={showMeals} className=' flex justify-center bg-blue-500 px-8 py-3 text-white rounded mt-[2rem] mb-[2rem] hover:bg-blue-700 hover:duration-700 text-[18px] '>Add Meals</button>

          </div>
        </div>
      }

    </div>
  )
}
export default withTranslation()(App)

