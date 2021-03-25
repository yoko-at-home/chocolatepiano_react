import React from 'react';
import './styles.css';

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'contactForm', ...this.state }),
    };

    fetch('/', options)
      .then(function (response) {
        window.location.assign('/contact-thanks/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <section className='section-book' id='book-now'>
        <div className='row'>
          <div className='book'>
            <div className='book__form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary' style={{ fontSize: '4rem' }}>
                  お問い合わせ
                </h2>
              </div>

              <form
                name='contactForm'
                data-netlify='true'
                id='contact-form'
                className='contact-form'
                onSubmit={this.handleSubmit}
              >
                <p className='form__group'>
                  <label htmlFor='name' className='form_label'></label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='form__input'
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    placeholder={'お名前'}
                  />
                </p>
                <p className='form__group'>
                  <label
                    htmlFor='contant-form-email'
                    className='form_label'
                  ></label>
                  <input
                    type='email'
                    name='email'
                    id='contant-form-email'
                    className='form__input'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder={'メールアドレス'}
                  />
                </p>
                <p className='form__group'>
                  <label htmlFor='message' className='form_label'></label>
                  <textarea
                    name='message'
                    id='message'
                    className='form__input'
                    rows='7'
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    placeholder={'メッセージ'}
                  />
                </p>
                <p className='form__group form-submit'>
                  <div class="form__group">
                  <button type='submit' className='btn btn--green'>
                    送信
                  </button>
                  </div>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
