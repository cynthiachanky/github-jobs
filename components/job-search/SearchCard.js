import {useState} from 'react';
import {Button, Card, CardImg, CardImgOverlay, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import {Icon} from '../common';

const SearchCard = ({callback}) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = e => setInputValue(e.target.value);

  const onClick = () => callback(inputValue);

  return (
    <Card className={'search-card'}>
      <CardImg src={'/background-image.png'} alt={'Background Image'}/>

      <CardImgOverlay>
        <InputGroup>
          <InputGroupAddon addonType={'prepend'}>
            <InputGroupText>
              <Icon type={'work_outline'}/>
            </InputGroupText>
          </InputGroupAddon>

          <Input placeholder={'Title, companies, expertise or benefits'} value={inputValue} onChange={onChange}/>

          <InputGroupAddon addonType={'append'}>
            <Button onClick={onClick}>Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </CardImgOverlay>
    </Card>
  );
};

export default SearchCard;
