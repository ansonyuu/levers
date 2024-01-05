import React from "react";

export default function Sidenote({ children, right, id }) {
    return (
      <div className="hidden md:inline">
        <input
          type='checkbox'
          id={`sn-${id}`}
          className='margin-toggle'
        />
        <span className={right ? 'sidenote-right' : 'sidenote-left'}>
        <span className="sidenote-number">{id}</span>
          {children}
        </span>
      </div>
    );
  }