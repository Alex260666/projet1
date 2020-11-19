import React from 'react';

const Recherche = (props) => {
    const {recup, requete, req} = props;
    return ( 
        <form onSubmit={(e) =>{
            e.preventDefault();
            requete()
         }}> 
            <div className="input-group pt-3">
                <input type="text" onChange={recup} className="form-control" placeholder="Search"/>
                <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                    <i className="fa fa-search"></i>
                </button> 
                </div>
            </div>
        </form>
     );
}
 
export default Recherche;