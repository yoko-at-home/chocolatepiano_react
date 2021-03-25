import React from 'react';
import './styles.css';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('送信しました'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
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
              <form onSubmit={this.handleSubmit}>
                <p className='form__group'>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    className='form__input'
                    onChange={this.handleChange}
                    placeholder={'お名前'}
                  />
                </p>
                <p className='form__group'>
                  <input
                    type='email'
                    name='email'
                    className='form__input'
                    value={email}
                    onChange={this.handleChange}
                    placeholder={'メールアドレス'}
                  />
                </p>
                <p className='form__group'>
                  <textarea
                    className='form__input'
                    rows='7'
                    name='message'
                    value={message}
                    onChange={this.handleChange}
                    placeholder={'メッセージ'}
                  />
                </p>
                <p className='form__group form-submit'>
                  <div class='form__group'>
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
