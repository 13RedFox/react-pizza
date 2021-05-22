import React from 'react';

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (idx) => {
    setActiveItem(idx);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, idx) => (
            <li
              className={activeItem === idx ? 'active' : ''}
              onClick={() => onSelectItem(idx)}
              key={`${name}_${idx}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

// class Categories extends React.Component {
//   state = {
//     activeItem: 3,
//   };

//   onSelectItem = (idx) => {
//     this.setState({
//       activeItem: idx,
//     });
//     this.forceUpdate();
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, idx) => (
//             <li
//               className={this.state.activeItem === idx ? 'active' : ''}
//               onClick={() => this.onSelectItem(idx)}
//               key={`${name}_${idx}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
