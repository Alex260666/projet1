import React from 'react';

const Liste = (props)=> {

    return (
        
        <table className="table table-striped">
            <thead className='thead-dark'>
                <tr>
                    <th>Id</th><th>Marque</th><th>Modele</th><th>Pays</th><th>Image</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.voitures ?
                props.voitures.map((voiture, index) =>{
                    return(
                        <tr key={index}>
                            <td>{voiture.id}</td>
                            <td>{voiture.marque}</td>
                            <td>{voiture.modele}</td>
                            <td>{voiture.pays}</td>
                            <td> 
                                <img src={process.env.PUBLIC_URL + '/images/'+voiture.image} width="80" alt={voiture.image}/> 
                            </td>

                            <td>
                                <button className="btn btn-danger" 
                                onClick={() =>{if(window.confirm('Etes vous sûr de  supprimer'))
                                                {props.deleteVoiture(index)
                                              };
                                        }}>
                                    <i className="fa fa-trash"> Supprimer</i>
                                </button>
                            </td>
                        </tr>
                    )
                })
                
                 : "Pas de donnees" }
            </tbody>

        </table>

        
     );
    
}
 
export default Liste;