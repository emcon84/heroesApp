import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../../src/hooks/useForm';
import { getHeroByName } from '../../helpers/getHeroByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = ''} = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchText: q 
    })

    const { searchText } = formValues;
    const heroFiltered = useMemo(() => getHeroByName(q), [q]);   
   

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Busquedas</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar por nombre</h4>
                    <hr />
                    <form onSubmit= {handleSearch}>                        
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Buscar heroe' 
                            name='searchText'
                            autoComplete='off'
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button 
                            type='submit'
                            className='btn btn-outline-primary mt-2'>
                            Buscar
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultado de la busqueda</h4>
                    <hr />

                    {
                        (q === '') 
                            ? <div className='alert alert-info'>Buscar un heroe</div>
                            : (heroFiltered.length === 0) 
                                && <div className='alert alert-danger'>No hay resultados</div>
                    }

                    {
                        heroFiltered.map(hero =>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))                        
                    }
                </div>
            </div>
        </>
    )
}
