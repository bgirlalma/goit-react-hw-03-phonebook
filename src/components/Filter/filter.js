import { Component } from "react";
import {LabelFilter, FilterWrapper, FilterInput} from './filter.styled';

export class FilterContacts extends Component {
render() {
    const {value, onChange} = this.props;
return (
<FilterWrapper>
<LabelFilter htmlFor="filter">Find contacts by name</LabelFilter>  
<FilterInput type="text" name="filter" value={value} onChange={(e) => onChange(e.target.value)}/>
</FilterWrapper>
)


}
}