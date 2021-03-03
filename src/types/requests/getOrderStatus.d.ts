import { ErrorResponse } from '../common'

/** Запрос состояния заказа */
export interface Status {
  /** Номер заказа в платежной системе. Уникален в пределах системы */
  orderId: string

  /** Язык в кодировке ISO 639-1. Если не указан, считается, что язык – русский. Сообщение ошибке будет возвращено именно на этом языке. */
  language?: string
}

export interface StatusResponse extends ErrorResponse {
  /** По значению этого параметра определяется состояние заказа в платежной системе. Список возможных значений приведен в таблице ниже. Отсутствует, если заказ не был найден. */
  OrderStatus?: number

  /** Номер (идентификатор) заказа в системе магазина */
  OrderNumber: string

  /** Маскированный номер карты, которая использовалась для оплаты. Указан только после оплаты заказа. */
  Pan?: number

  /** Срок истечения действия карты в формате YYYYMM. Указан только после оплаты заказа. */
  expiration?: number

  /** Имя держателя карты. Указан только после оплаты заказа. */
  cardholderName?: string

  /** Сумма платежа в копейках (или центах) */
  Amount: number

  /** Код валюты платежа ISO 4217. Если не указано, то используется значение по умолчанию. */
  currency?: number

  /** Код авторизации МПС. Поле фиксированной длины (6 символов), может содержать цифры и латинские буквы. */
  approvalCode?: string

  /** Это поле является устаревшим. Его значение всегда равно "2", независимо от состояния заказа и кода авторизации процессинговой системы. */
  authCode?: number

  /** IP-адрес пользователя, который оплачивал заказ. */
  Ip?: string
}
