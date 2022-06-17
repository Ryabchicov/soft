import React from 'react';
import MenuItem from '../menu-item/menu-item';
import Icons from '../icons/icons';

import classes from './header.module.scss';

import avatar from '../../img/avatar.jpg'
import cap from '../../img/cap.svg'


const Header = () => {      
      
      const {
            header,
            menu,
            tools
      } = classes;

      const [state] = React.useState([
            {ico: <img src={cap} alt="cap" />, 
            text: 'Обучение',
            isActive: false},
            {ico: <Icons 
            size='24'
            name='stars' />, 
            text: 'Оценка',
            isActive: false},
            {ico: <Icons 
            size='24'
            name='bag' />, 
            text: 'Карьера',
            isActive: false},
            {ico: <Icons 
            size='24'
            name='idea' />, 
            text: 'Адаптация',
            isActive: false},
            {ico: <Icons 
            size='24'
            name='chart' />, 
            text: 'Аналитика',
            isActive: true},
            {ico: <Icons 
            size='24'
            name='peoples' />, 
            text: 'Сотрудники',
            isActive: false},
      ])

      const menuItems = state.map(({text, isActive, ico}) => {
            return <MenuItem text = {text} isActive = {isActive} key={text}>
                        {ico}
                  </MenuItem>
      })

      return (
            <header className={header}>
                  <img src={avatar} alt="avatar" />
                  <ul className={menu}>
                        {menuItems}
                  </ul>
                  <div className={tools}>
                        <button>
                              <Icons 
                                    size='14'
                                    name='call' />
                        </button>
                        <button>
                              <Icons 
                                    size='14'
                                    name='exit' />
                        </button>
                  </div>
            </header>
      )
}

export default Header;