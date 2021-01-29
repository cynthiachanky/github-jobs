import {CustomInput, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label} from 'reactstrap';

const locations = ['London', 'Amsterdam', 'New York', 'Berlin'];

const FilterForm = () => (
  <Form>
    <CustomInput type={'checkbox'} label={'Full Time'}/>

    <FormGroup>
      <Label>Location</Label>
      <InputGroup>
        <InputGroupAddon addonType={'prepend'}>
          <InputGroupText>
            <i className={'material-icons'}>public</i>
          </InputGroupText>
        </InputGroupAddon>

        <Input placeholder={'City, state, zip code or country'}/>
      </InputGroup>
      {locations.map(location => <CustomInput key={location} type={'radio'} label={location}/>)}
    </FormGroup>
  </Form>
);

export default FilterForm;