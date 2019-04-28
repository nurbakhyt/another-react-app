import React from 'react';
import './pagination.css';

export default function Paginator({navParams, pages, goToPage}) {
  return (
    <footer className="paginator">
      {pages.map((_, i) => (
        <a
          key={i.toString()}
          href="#"
          className={i + 1 === navParams.page ? 'paginator__item paginator__item--current' : 'paginator__item'}
          onClick={e => {e.preventDefault(); goToPage({...navParams, page: i + 1})}}
        >
          {i + 1}
        </a>)
      )}
    </footer>
  )
}