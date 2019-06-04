import React from 'react';
import './Resources.scss';
import CardResource from '../CardResource/CardResource';
import BackButton from "../BackButton/BackButton";
import PropTypes from 'prop-types';

class Resources extends React.Component {
  componentDidMount() {
    const {match} = this.props;
    const category = match.params.category;
    this.props.fetchResources(category);
  }

  render(){
    const {kairos, laboral, desarrollo, agile, identifyCategory, match} = this.props;
    const category = match.params.category;
    const chooseCategory = () => {
      const {match} = this.props;
      const category = match.params.category;
      if(category === 'kairos') {
        return kairos;
      } else if (category === 'laboral'){
        return laboral;
      } else if (category === 'desarrollo'){
        return desarrollo;
      } else {
        return agile;
      }
    }

    const chosenCategory = chooseCategory();
    return(
      <React.Fragment>
        <BackButton route="/" />
        <ul className="resources__list">
          {chosenCategory
          .filter(item => item.url !== '' ? item : false)
          .map((item,index) => {
            return (
            <li key={index}>
              <CardResource title={item.title} category={category} identifyCategory={identifyCategory}/>
            </li>
            )
          })}
        </ul>
      </React.Fragment>

    )
  }
}

Resources.propTypes = {
  kairos: PropTypes.array,
  laboral: PropTypes.array,
  desarrollo: PropTypes.array,
  agile: PropTypes.array,
  identifyCategory: PropTypes.func,
  match: PropTypes.object
}

export default Resources;
