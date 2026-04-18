import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="breadcrumb-sep">›</span>}
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span style={{ color: '#374151' }}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
