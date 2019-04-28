import React from 'react';

export default function Paginator ({page, pages, goToPage}) {
  return (
    <footer className="paginator">
      {pages.map((_, i) => (
        <a
          key={i.toString()}
          href="#"
          className={i + 1 === page ? 'paginator__item paginator__item--current' : 'paginator__item'}
          onClick={e => {e.preventDefault(); goToPage(i + 1)}}
        >
          {i + 1}
        </a>)
      )}
    </footer>
  )
}