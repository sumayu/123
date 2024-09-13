import './style.css'
export function Victory() {
    return(<> 
    <html>
    <div className="header"> 
            <div className="header-container"> 
                <a href="/" className="logo-link"> 
                    <img alt="" src="./public/logo.webp"
                    width='125px' /> 
                </a> 
                <nav> 
                    <ul className="nav-list"> 
                        <li className="nav-item"> 
                            <a href="/" className="nav-link"> TG</a> 
                        </li> 
                        <li className="nav-item"> 
                            <a href="/" className="nav-link"> VK</a> 
                        </li> 
                        <li className="nav-item"> 
                            <a href="/" className="nav-link">YouTube</a> 
                        </li> 
                    </ul> 
                </nav> 
            </div> 
            </div>

<div className="hover">Викторина
  <div className="tooltip">Выбери правильный вариант

  </div>
</div>
<div className='voprosi'>Какой язык программирования чаще всего используется для написания кода роботов?</div>
<div className='container'></div>
<div className='answer'>
<div className='answers'> 
  <div className='picture'>
 <a href="/asm"> <img  src="asm.webp" alt="Картинка" width="300"
  height="250"/></a>
  </div>
  <h3 className='textAnswer'></h3>
</div>
<div className='answers'> 
  <div className='picture'>
  <a href='/go'><img  src="go.webp" width="300"
  height="250" alt="Картинка" /></a>
  </div>
  <h3 className='textAnswer'></h3>
</div>
<div className='answers'> 
  <div className='picture'>
 <a href='/javascript'> <img src="js.webp"width="300"
  height="250" alt="Картинка" /></a>
  </div>
  <h3 className='textAnswer'></h3>
</div>
<div className='answers'> 
  <div className='picture'>
<a href='/php'>  <img src="php.webp"width="300"
  height="250" alt="Картинка" />  </a>
  </div>
  <h3 className='textAnswer'></h3>
</div>
<div className='answers'> 
  <div className='picture'>
<a href='/python'>  <img src="python.webp"width="300"
  height="250" alt="Картинка" /></a>
  </div>
  <h3 className='textAnswer'></h3>
</div>
<div className='container'>
<div className='answers'> 
  <div className='picture'>
<a href='/rust'>  <img src="rust.webp" alt="Картинка"width="300"
  height="250" /></a>
  </div>
  <h2 className='textAnswer'> </h2>
</div>
</div>
</div>
</html>
</>)

}
