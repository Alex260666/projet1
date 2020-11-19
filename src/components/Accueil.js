import React, { Fragment } from 'react';
import Meteo from './Meteo';

const Accueil = () => {
    const voitures  = JSON.parse(localStorage.getItem('datas'));
    //let test =  (voitures!=="" && voitures.length > 0);
    let test = false ;
    let testV = false;
    if(voitures){
        test = true;
    }
    if(test && voitures.length > 0){

        testV = true;
    }

    console.log(voitures);
    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">Concessionnaire de voitures</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                <div className="row">
                {testV ? voitures.map((voiture,index) =>{
                    return(
                        <div className="col-md-6">
                            <div className="card mb-3">
                                <img className="card-img-top" src={process.env.PUBLIC_URL + '/images/'+voiture.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Voiture N° 00{voiture.id}</h5>
                                    <ul className="list-group list-group-flush">
                    <li className="list-group-item">Marque: {voiture.marque}</li>
                    <li className="list-group-item">Modele: {voiture.modele}</li>
                    <li className="list-group-item">Pays: {voiture.pays}</li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    );
                })
                : 'Pas de voitures disponibles.'
            }
            </div>
                </div>
                <div className="col-md-4" style={{backgroundColor:"skyblue"}}> 
                <Meteo/>
                </div>
            </div>
            
        </Fragment>
         
     );
}
 
export default Accueil;