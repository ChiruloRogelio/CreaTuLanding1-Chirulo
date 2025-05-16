import { useParams } from "react-router-dom";
export default function ProductDetail(){
    const { itemId  } = useParams();
    return (
        <div>
            <h1>Producto detail: {itemId }</h1>
        </div>
    )
}