const Icon = ({type}) => <i className={'material-icons'}>{type}</i>;

const DatetimeIcon = () => <Icon type={'schedule'}/>;
const LocationIcon = () => <Icon type={'public'}/>;

export default Icon;
export {DatetimeIcon, LocationIcon};