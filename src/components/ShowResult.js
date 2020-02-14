import React from 'react';
import './style.css';

const ShowResult = props => {
    console.log(props.value);
    return (
        <div className="card m-3 mx-auto movie-card">
            {
                props.value !== undefined && props.value.Response !== 'False' ? <img className="card-img-top img-thumbnail rounded mx-auto d-block" src={props.value.Poster} /> : null
            }
            <div className="card-body card-info">
                {
                    props.value !== undefined && props.value.Response !== 'False' ? <h3 className="card-title">{props.value.Title}</h3> : null
                }
                <div>
                    <span className="badge badge-success">Ratings</span>
                    {
                        props.value !== undefined && props.value.Response !== 'False' ? <h5 className="rating">{props.value.Ratings[0].Value}</h5> : null
                    }

                </div>
                <div>
                    <span className="badge badge-success">Genre</span>
                    {
                        props.value !== undefined && props.value.Response !== 'False' ? <h5 className="genre">{props.value.Genre}</h5> : null
                    }
                </div>
                <div>
                    <span className="badge badge-success">Year</span>
                    {
                        props.value !== undefined && props.value.Response !== 'False' ? <h5 className="year">{props.value.Year}</h5> : null
                    }
                </div>
                <div>
                    <span className="badge badge-success">Director</span>
                    {
                        props.value !== undefined && props.value.Response !== 'False' ? <h5 className="director">{props.value.Director}</h5> : null
                    }
                </div>
                <div>
                    <span className="badge badge-success">Awards</span>
                    {
                        props.value !== undefined && props.value.Response !== 'False' ? <h5 className="director">{props.value.Awards}</h5> : null
                    }
                </div>
            </div> 
        </div>
            
    );
};

export default ShowResult;