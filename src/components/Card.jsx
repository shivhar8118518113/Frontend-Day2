// [NEW FILE] src/components/Card.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ title, description, category }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>        {/* NEW */}
          <p className="card-text">{description}</p>     {/* NEW */}
          <span className="badge bg-primary">{category}</span> {/* NEW */}
        </div>
      </div>
    </div>
  );
}

export default Card;
