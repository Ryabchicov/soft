import classes from './menu-item.module.scss';

const MenuItem = ({children, text, isActive}) => {

      const {
            item,
            active
      } = classes;

      return (
            <li className={`${item} ${isActive? active: ''}`}>
                  {children}
                  <span>
                        {text}                        
                  </span> 
            </li>
      )
}

export default MenuItem;