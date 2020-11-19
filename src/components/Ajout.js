import React, { Component, Fragment } from 'react';

class Ajout extends Component {

    initVoiture = {id:1, marque:"", modele:"", pays:"", image:""};
    state = this.initVoiture;
    modifier = (e) =>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    envoyer = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.ajouter(this.state);
    }
    render(){
        const {marque, modele, pays, image} = this.state;
        return(
            <Fragment>
            {/* <form>
                <div className="form-group col-4 offset-4">
                     <label htmlFor="marque">Marque</label>
                     <input type="text" className="form-control" id="marque" name="marque" value={marque} placeholder="Entrez la marque" onChange={this.modifier}/>
                </div>
                <br/>
                <div className="form-group col-4 offset-4">
                     <label htmlFor="modele">Modèle</label>
                     <input type="text" className="form-control" id="modele" name="modele" value={modele} placeholder="Entrez le modèle" onChange={this.modifier}/>
                </div>
                <br/>
                <div className="form-group col-4 offset-4">
                     <label htmlFor="pays">Pays</label>
                     <input type="text" className="form-control" id="pays" name="pays" value={pays} placeholder="Entrez le pays" onChange={this.modifier}/>
                </div>
                <br/>
                <div className="form-group col-4 offset-4">
                     <label htmlFor="image">Image</label>
                     <input type="text" className="form-control" id="image" name="image" value={image} placeholder="Selectionner l'image" onChange={this.modifier}/>
                </div>
                <br/>
               <button type="button" className="btn btn-primary col-2 offset-5" onClick={this.envoyer}>Submit</button>
            </form> */}
            <div className="text-right">
            
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">
            <i className="fa fa-plus"></i>
            Ajouter
            </button>
            </div>
                                
            <div className="modal" id="myModal">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Ajout d'une voiture</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            <div className="modal-body">
            <form>
                <div className="form-group ">
                     <label htmlFor="marque">Marque</label>
                     <input type="text" className="form-control" id="marque" name="marque" value={marque} placeholder="Entrez la marque" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="modele">Modèle</label>
                     <input type="text" className="form-control" id="modele" name="modele" value={modele} placeholder="Entrez le modèle" onChange={this.modifier}/>
                </div>
                
                <div className="form-group ">
                     <label htmlFor="pays">Pays</label>
                     <input type="text" className="form-control" id="pays" name="pays" value={pays} placeholder="Entrez le pays" onChange={this.modifier}/>
                </div>
               
                <div className="form-group ">
                     <label htmlFor="image">Image</label>
                     <input type="text" className="form-control" id="image" name="image" value={image} placeholder="Selectionner l'image" onChange={this.modifier}/>
                </div>
               
               <button type="button" className="btn btn-primary btn-block" 
               onClick={this.envoyer} data-dismiss="modal">Soumettre</button>
            </form>
            </div>
            <div className="modal-footer">
            {/* <button type="button" className="btn btn-primary" data-dismiss="modal"></button> */}
                        </div>

                        </div>
                    </div>
                    </div>
            </Fragment>
        );
    }
}

export default Ajout;