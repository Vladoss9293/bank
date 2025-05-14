import universalCard from '../../../../shared/assets/Universal-card.webp'
import payoutCard from '../../../../shared/assets/Payout-card.webp'
import juniorCard from '../../../../shared/assets/Junior-card.webp'

export interface ICardsList {
  title: string,
  description: string[],
  img: string,
}

export const cardList: ICardsList[] = [
    {
      title: 'Універсальна',
      description: [
        'Кредитний ліміт до 200 тис. грн та до 55 днів без відсотків',
        'Персональні кешбеки в програмі лояльності «Привіт»',
        '«Оплата частинами» та «Миттєва розстрочка»: купуйте зараз – платіть потім',
      ],
      img: universalCard
    },
    {
      title: 'Для виплат',
      description: [
        'Для вашої зарплати, пенсії чи стипендії',
        'Оформимо за 15 хв.',
        'Зняття готівки без комісії в банкоматі, що точно є поблизу вас',
      ],
      img: payoutCard,
    },
    {
      title: 'Юніорам',
      description: [
        'Доросла картка для наймолодших клієнтів',
        'Самостійне оформлення з 14 років',
        'Сервіс «Зробив – заробив». Грошова винагорода від батьків за виконані завдання 💪',
      ],
      img: juniorCard,
    },
  ];
  