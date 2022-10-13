import React from 'react'
import s from './MainPay.module.css'
import money from '../../images/money.png'
import qiwi from '../../images/qiwi.png'
import webMoney from '../../images/webMoney.png'
import tether from '../../images/tether.png'
import bitkoin from '../../images/bitcoin.png'
import complete from '../../images/complete.png'
import phone from '../../images/phone.png'

export const MainPay = () => {
  return (
    <div className={s.pay__container}>
      <div className={s.pay__title}>Платежные методы</div>
      <div className={s.pay__content}>
      <ul className={s.pay__cards}>
            <li><span>Банковские карты</span></li>
            <div className={s.pay__images}>
            <li><img className={s.money} src={money} alt=""/></li>
            <li><img className={s.qiwi} src={qiwi} alt=""/></li>
            <li><img className={s.webMoney} src={webMoney} alt=""/></li>
            <li><img className={s.tether} src={tether} alt=""/></li>
            <li><img className={s.bitkoin} src={bitkoin} alt=""/></li>
            </div>
            <span>ИП или ООО</span>
      </ul>
      <div className={s.info}>
      <div className={s.payinfo}>
          <div className={s.info__title}>Быстрая поддержка</div>
          <div className={s.info__subtitle}><img src={complete} alt="" /> Индивидуальные условия</div>
          <div className={s.info__text}>Помогаем с запуском рекламных кампаний, подбираем релевантные промо-материалы. Поможем оптимизировать трафик и увеличить прибыль.</div>
          <div className={s.button__pay}>
            <button><span>Начать зарабатывать</span></button>
            </div>
         
      </div>
      <div className={s.phone}><img src={phone} alt="" /></div>
      </div>
      </div>
    </div>
  )
}
