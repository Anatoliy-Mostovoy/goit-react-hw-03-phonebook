import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

export class Form extends Component {
  static propTypes = {
    submitMethod: PropTypes.func.isRequired,
  };

  state = { name: '', number: '', id: '' };

  uniqId = uuidv4();

  handleClick = event => {
    const { value, name, id } = event.target;
    this.setState({ [name]: value, id: id });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitMethod(this.state);
    this.resetState();
  };

  resetState = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={s.Container}>
        <form className={s.Form} onSubmit={this.handleSubmit}>
          <label className={s.Label} htmlFor={this.uniqId}>
            Name
            <input
              className={s.Input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handleClick}
              id={uuidv4()}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              className={s.Input}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleClick}
              value={number}
              id={uuidv4()}
            />
          </label>
          <button type="submit" className={s.Button}>
            Отправить
          </button>
        </form>
      </div>
    );
  }
}
