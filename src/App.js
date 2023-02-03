import { useState, useEffect } from 'react'
function App() {


  const [counts, setCount] = useState([])
  const [visible, setVisible] = useState(3);

  function showMeals() {
    setVisible(item => item += 3)
  }

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=british').then(res => {
      return res.json()
    }).then(data => {
      setCount(data.meals)
    })
  }, [])


  return (
    <div className='bg-red-400'>
      <h2 className='flex justify-center items-center text-5xl gap-[2rem] text-white'>Britsh Meals  <img className='w-[80px] h-[80px] rounded-[50%]' src='./image/Flag.png' alt="" /></h2>

      <div className='container grid grid-cols-3 m-w-[80%] m-auto gap-[2rem] mt-[2rem]'>

        {counts.slice(0, visible).map(count => (
          <div className='card flex flex-col items-center justify-center bg-blue-500 rounded'>
            <div className='max-w-[21rem] mt-[2rem]'>
             <a href="#"><img className='rounded' src={count.strMealThumb} alt="" /></a> 
            </div>
            <p className='text-white text-[1.5rem] mt-[2rem] mb-[2rem]'>{count.strMeal}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <button onClick={showMeals} className=' flex justify-center bg-blue-500 px-8 py-3 text-white rounded mt-[2rem] mb-[2rem] hover:bg-blue-700 hover:duration-700 text-[18px] '>Add Meals</button>

      </div>
    </div>
  )
}
export default App

