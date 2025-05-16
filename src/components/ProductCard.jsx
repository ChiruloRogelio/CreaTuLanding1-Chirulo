
import { Link } from "react-router-dom";

export default function ProductCard({ title, price, image , id}) {

  
  return (
    <div className="card rounded shadow-sm p-3 h-100 text-center hover-shadow">
      <img
        src={image}
        alt={title}
        className="card-img-top mx-auto"
        style={{ height: '160px', width: '160px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="text-primary fw-bold mt-2">${price}</p>
      </div>
      <Link className="btn btn-success" to={'/item/'+id}>Ver mas</Link>
    </div>
  );
}
