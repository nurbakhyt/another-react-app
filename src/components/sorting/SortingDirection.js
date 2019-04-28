import React from 'react';

export default function SortingDirection({sortDirection, type, selectDirect}) {
  return (
    <a
      href="#"
      className={sortDirection === type ? 'sort-types__item sort-types__item--selected' : 'sort-types__item'}
      onClick={e => {e.preventDefault(); selectDirect(type)}}
    >{type}</a>
  )
}