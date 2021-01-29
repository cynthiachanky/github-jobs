import {useState} from 'react';
import {CustomInput, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label} from 'reactstrap';

const locations = ['London', 'Amsterdam', 'New York', 'Berlin'];

const FilterForm = ({callback}) => {
  const [form, setForm] = useState({isFullTime: false, location: ''});

  const onChange = (key, value) => {
    const newForm = {...form, [key]: value};
    setForm(newForm);
    callback(newForm);
  };

  return (
    <Form className={'filter-form'}>
      <FormGroup>
        <CustomInput id={'is-full-time'} type={'checkbox'} label={'Full Time'}
                     value={form.isFullTime} onChange={() => onChange('isFullTime', !form.isFullTime)}/>
      </FormGroup>

      <FormGroup>
        <Label className={'category'}>Location</Label>
        <InputGroup>
          <InputGroupAddon addonType={'prepend'}>
            <InputGroupText>
              <i className={'material-icons'}>public</i>
            </InputGroupText>
          </InputGroupAddon>

          <Input id={'location-input'} placeholder={'City, state, zip code or country'}
                 value={form.location} onChange={e => onChange('location', e.target.value)}/>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        {locations.map((location, index) => {
          const name = 'location-option';
          const key = `${name}-${index}`;
          return <CustomInput key={key} id={key} name={name} type={'radio'} label={location}
                              value={form.location === location}
                              onChange={() => onChange('location', location)}/>;
        })}
      </FormGroup>
    </Form>
  );
};

export default FilterForm;