import { LabelContact, InputContact} from "./Filter.styled";
import PropTypes from 'prop-types';
import React from "react";
export const Filter =({value, onChange})=>(
    <LabelContact >Find contact by name<InputContact type="text" value={value} onChange={onChange} /> </LabelContact>
)

Filter.propTypes = {
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}








// import { Input } from 'components/Form/InputForm.styled';
// import React from 'react';
// class Filter extends React.Component {
// state = {
//     value: ' ',
// };

// handInputFilter=e=>{
//     const name= e.currentTarget.value;
//     this.setState({value: name});
// };

// filterSubmit=e=>{
// this.props.onFilterSubmit(this.state);

// };

// render() {
//     return (
//         <div onFilterSubmit={this.filterSubmit}>
//                 <Input
//                     type="text"
//                     name="filter"
//                     value={state.filter}
//                     id={3}
//                     onChange={this.handInputFilter}
//                 />
//         </div>
// );
// }
// }
// export default Filter