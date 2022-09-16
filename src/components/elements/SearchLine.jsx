import Form from 'react-bootstrap/Form';

export default function SearchLine( props) {
    function searchSchangeHandle(e){
        console.log(e.target.value);
        console.log(props.dataInf);
        props.setSearchData(props.dataInf);
    }
    return (
      <Form>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Where is" onChange={searchSchangeHandle}/>
        </Form.Group>
      </Form>
    );
  }