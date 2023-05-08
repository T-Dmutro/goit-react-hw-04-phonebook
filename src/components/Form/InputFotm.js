import { useState , } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
// import { Formik , Form , Field , ErrorMessage } from 'formik';
import { Input , Label, AddButton, Forma} from "./InputForm.styled";
const InputForm=({ onSubmit })=> {
const [name, setName] = useState(' ');
const [number, setNumber] = useState(' ');
const [id, setId] = useState(' ');
//         name: '',
//         number:"",
//         id: ""
// }
//Універсальна функція для обробки інпут та роботи з state
const handInputChache = e =>{
    // const {name, value} = e.currentTarget;
        // console.log(e.currentTarget.value)
        const onName = e.currentTarget.name;
        const value = e.currentTarget.value;

        switch (onName) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
          default:
            return ;
        }
        // setName({name:value});
        // setId({ id:nanoid()})
        // this.setState({[name]:value, id:nanoid()})
}

//для роботи кнопки submit
const handContactNameSubmit = e=>{
    e.preventDefault();
    setId({ id:nanoid()})
    // console.log(this.state.name)
    onSubmit({name, number, id});
    resetForm();

}
const resetForm=()=>{setName(''); setNumber('')};

        // console.log(this.generateId)
        return(
            <Forma onSubmit={handContactNameSubmit}>
            <Label htmlFor={nanoid()}> Name:
                <Input
                type="text"
                name="name"
                value={name}
                id={1}
                onChange={handInputChache}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </Label>
        <Label htmlFor={nanoid()}> Number
        <Input
            type="tel"
            name="number"
            value={number}
            id={2}
            onChange={handInputChache}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </Label>
<AddButton  type ="submit">add contact</AddButton>
</Forma>
    )

}

Forma.propTypes = {
    value:PropTypes.string,
    onChange:PropTypes.func,
}

export default InputForm;
