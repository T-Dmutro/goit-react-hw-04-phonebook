import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
// import { Formik , Form , Field , ErrorMessage } from 'formik';
import { Input , Label, AddButton, Forma} from "./InputForm.styled";
class InputForm extends React.Component{
state = {
        name: '',
        number:"",
        id: ""
}
//Універсальна функція для обробки інпут та роботи з state
handInputChache = e =>{
    const {name, value} = e.currentTarget;
        // console.log(e.currentTarget.value)
        this.setState({[name]:value, id:nanoid()})  
}

//для роботи кнопки submit
handContactNameSubmit = e=>{
    e.preventDefault();
    // console.log(this.state.name)
    this.props.onSubmit(this.state);
    this.resetForm();
    
}
resetForm=()=>this.setState({name: '',number: "", id:""});
    render(){
        // console.log(this.generateId)
        return(
            <Forma onSubmit={this.handContactNameSubmit}>
            <Label> Name:
                <Input
                type="text"
                name="name"
                value={this.state.name}
                id={1}
                onChange={this.handInputChache}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </Label>
        <Label> Number
        <Input
            type="tel"
            name="number"
            value={this.state.number}
            id={2}
            onChange={this.handInputChache}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </Label>
<AddButton  type ="submit">add contact</AddButton>
</Forma>
    )
}
}

Forma.propTypes = {
    value:PropTypes.string,
    onChange:PropTypes.func,
}

export default InputForm;