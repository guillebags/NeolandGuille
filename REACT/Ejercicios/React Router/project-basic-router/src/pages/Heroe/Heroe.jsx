import { useParams, useNavigate } from "react-router-dom";
import { getHeroe, deleteHeroe } from "../../data/data";
import Listado from "../../components/Listado/Listado";

export default function Heroe() {
  const params = useParams();
  const navigate = useNavigate();
  const heroe = getHeroe(params.id);

  if (!heroe) return <p>No existe el héroe que buscas 😭</p>;

  return (
    <div>
      <h1>My heroes 🦸‍♂️🦸‍♀️</h1>
      <Listado heroe={heroe} />
      <button
        onClick={() => {
          deleteHeroe(heroe.id).then(() => {
            navigate("/heroes");
          });
        }}
      >
        Borrar a {heroe.name}
      </button>
    </div>
  );
}
