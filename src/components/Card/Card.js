import React from "react";
import "./Card.scss";
import CardDetail from "../CardDetail/CardDetail";
import BackButton from "../BackButton/BackButton";

class Card extends React.Component {
  render () {
    const {kairos, laboral, desarrollo, agile, match, chosenCategory, fetchResources} = this.props;
    const id = match.params.id;
    
    const chooseCategory = (id) => {
      if(id === 'kairos') {
        return kairos;
      } else if (id === 'laboral'){
        return laboral;
      } else if (id === 'desarrollo'){
        return desarrollo;
      } else {
        return agile;
      }
    }

    const isCategory = (chosenCategory) => {
      if(chosenCategory !== '') {
        fetchResources(chosenCategory);
        const array = chooseCategory(chosenCategory);
        return array;
      } else {
        const array = [];
        return array;
      }
    }

    const array = isCategory(chosenCategory);

    return (
      <div className="main__directory--wrapper">
        {array.length > 0 ?
          array
          .filter(item => (item.title.includes(id) ? item : false))
          .map((item, index) => {
            return (
              <div className="card__container" key={index}>
                <h3 className="card__title">{item.title}</h3>
                <CardDetail
                  description={item.description}
                  url={item.url}
                />
              </div>
            );
          })
        :
        <p>No hay datos</p>
        }
         <BackButton route={`/resources/${chosenCategory}`} />

      </div>
    );
  }
}

export default Card;
