import {Button, Card, CardImg, CardImgOverlay, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

const SearchCard = () => (
  <Card>
    <CardImg src={'/background-image.png'} alt={'Background Image'}/>
    <CardImgOverlay>
      <InputGroup>
        <InputGroupAddon addonType={'prepend'}>
          <InputGroupText>
            <i className={'material-icons'}>work_outline</i>
          </InputGroupText>
        </InputGroupAddon>

        <Input placeholder={'Title, companies, expertise or benefits'}/>

        <InputGroupAddon addonType={'append'}>
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </CardImgOverlay>
  </Card>
);

export default SearchCard;
