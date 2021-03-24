import React from 'react'

function Contact() {
  return (
    <section className="section-book" id="book-now">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary" style={{fontSize:'4rem'}}>
                                        お問い合わせ
                                    </h2>
                                </div>
                            <form name="contact" method="POST" data-netlify="true">
                                <div className="form__group" style="display:none">
                                    <label for="subject" className="form__label">ショコラピアノ教室ホームページからの問い合わせ
                                    <input type="subject" subject="subject" id="subject"/>
                                    </label>
                                </div>
                                <div className="form__group">
                                    <input type="text" name="name" className="form__input" placeholder="お名前" id="name" required/>
                                    <label for="name" className="form__label">お名前
                                    </label>
                                </div>

                                <div className="form__group">
                                    <input type="email" name="email" className="form__input" placeholder="メールアドレス" id="email" required/>
                                    <label for="email" className="form__label">メールアドレス
                                    </label>
                                </div>
                                <div className="form__group">
                                    <label for="message" className="form_label">メッセージ
                                    <textarea name ="message" className="form__input" placeholder="メッセージ" id="message" required rows="7"></textarea>
                                    </label>
                                </div>
                                <div className="field">
                                    <div data-netlify-recaptcha="true"></div>
                                </div>
                                <div className="form__group"><br/>
                                    <button type="submit" className="btn btn--green">送信</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Contact
