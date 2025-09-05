import React from 'react'

class Movies extends React.Component{
    Movie_Name = 'Coolie';
    Actor = 'Rajini';
    movie_img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05BeRoCoLIMKvrA6swIlHbXB0NbNlSQhstw&s'
    render(){
        return <div>
            <h2>Movie Components</h2>
            <h2>Movie Name : {this.Movie_Name}</h2>
            <img src={this.movie_img} alt="Movie" />
            
        </div>
    }
}

export default Movies;