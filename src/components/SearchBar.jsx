import { Form } from 'react-bootstrap';

const SearchBar = ({handleChange}) => {
  return (
    <div className='bar'>
    <Form.Control
        type='search'
        className='inbar'
        placeholder='Search a Legend'
        onChange={handleChange}/>
        </div>
  )
}

export default SearchBar