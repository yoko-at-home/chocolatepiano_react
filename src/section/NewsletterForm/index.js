import React from 'react';
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from 'react-netlify-forms';
import { useForm } from 'react-hook-form';
import './styles.css';

function NewsletterForm() {
  const { register, handleSubmit, reset, errors } = useForm({ mode: 'onBlur' });
  const netlify = useNetlifyForm({
    name: 'react-hook-form',
    action: '/thanks',
    honeypotName: 'bot-field',
    onSuccess: (response, context) => {
      console.log('Successfully sent form data to Netlify Server');
    },
  });
  const onSubmit = (data) => netlify.handleSubmit(null, data);

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

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
            {/* <form
              onSubmit={handleSubmit(onSubmit)}
              name='Contact'
              method='POST'
              netlify-honeypot='bot-field'
              data-netlify='true'
              action='/'
            > */}
            <NetlifyFormProvider {...netlify}>
              <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                <Honeypot />
                <p className='form__group'>
                  <input
                    className='form__input'
                    type='text'
                    name='name'
                    placeholder={'お名前'}
                    ref={register({
                      required: true,
                      max: 255,
                      min: 3,
                      maxLength: 80,
                    })}
                  />
                  {errors.name && '名前を入力してください'}
                </p>
                <p className='form__group'>
                  <input
                    className='form__input'
                    type='email'
                    name='email'
                    placeholder={'メールアドレス'}
                    ref={register({
                      required: true,
                      max: 41,
                      min: 4,
                      maxLength: 255,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email && 'メールアドレスを入力してください'}
                </p>
                <p className='form__group'>
                  <textarea
                    className='form__input'
                    rows='7'
                    name='message'
                    placeholder={'メッセージ'}
                    ref={register({
                      required: true,
                      max: 1000,
                      min: 10,
                      maxLength: 7,
                    })}
                  />
                  {errors.message && 'メールアドレスを入力してください'}
                </p>
                <p className='form__group form-submit'>
                  <div className='form__group'>
                    <button
                      type='submit'
                      sx={{ variant: 'buttons.success' }}
                      className='btn btn--green'
                    >
                      送信
                    </button>
                  </div>
                </p>
              </NetlifyFormComponent>
            </NetlifyFormProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterForm;
