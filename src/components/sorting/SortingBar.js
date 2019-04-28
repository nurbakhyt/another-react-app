import React from 'react';
import SortingField from './SortingField';
import SortingDirection from './SortingDirection';
import './sorting_bar.css';

class SortingBar extends React.Component {

  selectField(sortField) {
    const {
      navParams,
      changeSortField
    } = this.props;
    if (navParams.sortField !== sortField) {
      changeSortField({
        ...navParams,
        sortField
      });
    }
  }

  selectDirect(sortDirection) {
    const {
      navParams,
      changeSortDirection
    } = this.props;
    if (navParams.sortDirection !== sortDirection) {
      changeSortDirection({
        ...navParams,
        sortDirection
      });
    }
  }

  render() {
    const sortFieldTypes = ['id', 'username', 'email', 'status'];
    const sortFieldDirections = ['asc', 'desc'];

    const {
      sortField,
      sortDirection
    } = this.props.navParams;

    return (
      <section className="sorting-bar">
        <div className="sort-types">
          {sortFieldTypes.map(type => (
            <SortingField
              key={type}
              sortField={sortField}
              type={type}
              selectField={this.selectField.bind(this)}
            />
          ))}
        </div>
        <div className="sort-types">
          {sortFieldDirections.map(type => (
            <SortingDirection
              key={type}
              sortDirection={sortDirection}
              type={type}
              selectDirect={this.selectDirect.bind(this)}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default SortingBar;
