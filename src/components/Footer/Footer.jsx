import React from 'react'
import s from './Footer.module.css'
import heart from '../../images/heart.png'
import telegram from '../../images/telegram.png'
import email from '../../images/email.png'

export const Footer = () => {
  return (
    <div className={s.footer}>
        <div className={s.container}>
          <div className={s.content}>
          <div className={s.footer__info}>
            <div className={s.partner}><img src={heart} alt="" /><span>LovePartners</span></div>
            <div className={s.rights}>©  2022 LovePartners   Все права защищены</div>
          </div>
          <div className={s.center}>
            <span>возникли вопросы?</span>
            <span>пишите - все расскажем!</span>
          </div>
          <div className={s.social}>
            <div className={s.telegram}><img src={telegram} alt="" />@lovepartnersbiz</div>
            <div className={s.email}><img src={email} alt=""/> support@lovepartners.biz</div>
          </div>
        </div>
        </div>
    </div>
  )
}
