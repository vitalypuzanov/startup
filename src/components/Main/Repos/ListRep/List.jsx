import React from 'react';
import { Item } from './Item/Item';

const List = ({ repositories }) => {
  return (
    <div>{repositories ? repositories?.map((element) => <Item key={element.id} element={element}></Item>) : <div>Ничего нет</div>}</div>
  );
};

export default List;
