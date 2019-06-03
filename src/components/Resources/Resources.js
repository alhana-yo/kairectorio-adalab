import React from 'react';

class Resources extends React.Component {
  render(){
    const {kairos} = this.props;

    return(
      <ul className="resources__list">
        {kairos.map((item,index) => {
          return(
            <li className="list__item" key={index}>
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
              <a href={item.url} className="button">{item.url}</a>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Resources;