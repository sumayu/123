import { Link } from 'react-router-dom'
import './App.css'

export function App() {
  return (
    <>
<div className='header'>
  <h1>
  Занимательная информатика
  </h1>
  <div className='line'></div>
<div>электронный образовательный ресурс по информатике для 5 класса</div>
</div>
<div className='middle_info'>
    </div> 
          <Link to='/lessons1'>lessons1</Link>
    </>
  )
}