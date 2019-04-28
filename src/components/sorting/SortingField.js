import React from 'react';

export default function SortingField({sortField, type, selectField}) {
  return (
    <a
      href="#"
      className={sortField === type ? 'sort-types__item sort-types__item--selected' : 'sort-types__item'}
      onClick={e => {e.preventDefault(); selectField(type)}}
    >{type}</a>
  )
}