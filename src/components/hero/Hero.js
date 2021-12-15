import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById";


export const Hero = () => {

    const { heroeId } = useParams();

    const navigate = useNavigate();

    const hero = useMemo (() => getHeroById(heroeId), [heroeId]);
    
    if(!hero) {
        return <Navigate to = '/' />
    }

    const handleReturn = () => {
        navigate(-1);
    }    

    const { 
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const imgPath = `/assets/${ id }.jpg`;

    return (
        <div className="row mt-5">
            <div className = "col-4 animate__animated animate__fadeInLeft">
                <img 
                    src = { imgPath } 
                    alt = { superhero }
                    className = "img-thumbnail"
                />
            </div>

            <div className = 'col-8 animate__animated animate__fadeIn'>
                <h3 className = 'text-center'>{ hero.superhero }</h3>
                <ul className = 'list-group'>
                    <li className = 'list-group-item'><b>Alter ego: </b> { alter_ego }</li>
                    <li className = 'list-group-item'><b>publisher: </b> { publisher }</li>
                    <li className = 'list-group-item'><b>first appearance: </b> { first_appearance }</li>            
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{ characters }</p>
                <button
                    className="btn btn-primary animate__animated animate__bounce"
                    onClick={ handleReturn }>
                    Regresar
                </button>
            </div>
            
        </div>
    )
}
