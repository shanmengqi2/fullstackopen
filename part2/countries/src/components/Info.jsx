import CountryDetail from './CountryDeail'
import Button from './Button'
import { useState } from 'react'
const Info = ({ type, data }) => {
  const [visible, setVisible] = useState(false)
  const handleShow = () => {
    // control the visible of CountryDetail component
    setVisible(true)
  }
  if (type === 'tooMany') {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else if (type === 'multiple') {
    return (
      // if the API can return multiple countries...data is supposed to be an array
      /**
       *       <div>
       *         {data.map(country => (country.name.official + '<br />'))}
       *       </div>
       *       {visible && <CountryDetail country={data} />}
       */


      // codes below just for tests, only demonstrate the visible of CountryDetail component
      // infomation is same as single, just for test
      <div>
        Finland <Button text='show' onClick={handleShow}></Button> <br />
        Sweden <Button text='show' onClick={handleShow}></Button><br />
        Norway <Button text='show' onClick={handleShow}></Button><br />
        Denmark <Button text='show' onClick={handleShow}></Button><br />
        Japan <Button text='show' onClick={handleShow}></Button><br />
        {visible && <CountryDetail country={data} />}
      </div>
    )

  } else if (type === 'single') {
    return (
      <div>
        <CountryDetail country={data} />
      </div>
    )
  } else {
    return (<div>Please input a country name</div>)
  }

}

export default Info