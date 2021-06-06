import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Collapse, UncontrolledTooltip } from 'reactstrap';
import DownIcon from 'mdi-react/ChevronDownIcon';
import ReactTableCustomizerToggle from './ReactTableCustomizerToggle';

const ReactTableCustomizer = ({
  handleClickIsSortable,
  handleClickWithPagination,
  handleClickWithSearchEngine,
  isSortable,
  withPagination,
  withSearchEngine,
}) => {
  const arrayTableCustomizerSingleToggle = [
    {
      id: 0, text: 'Filtration mode', func: handleClickWithSearchEngine, isChecked: withSearchEngine,
    },
    {
      id: 1, text: 'Sortable mode', func: handleClickIsSortable, isChecked: isSortable,
    },
    {
      id: 2, text: 'Pagination mode', func: handleClickWithPagination, isChecked: withPagination,
    },
  ];
  const [collapse, setCollapse] = useState(false);

  const handleOpen = () => {
    setCollapse(!collapse);
  };

  return (
    <Row className="react-table__customizer">
      <div className="table__collapse">
        <button className="table__btn" type="button" onClick={handleOpen}>
          <h5>Apply filters</h5>
          <DownIcon className="table__icon" />
        </button>
        {collapse && (
          <button
            className="table__collapse-back"
            aria-label="table__collapse-back"
            type="button"
            onClick={handleOpen}
          />
        )}
        <Collapse
          isOpen={collapse}
          className="table__collapse-content"
        >
          <div className="table__collapse-title-wrap">
            <p>This customizer allows you to see the different variations of the table.</p>
          </div>
          <div className="table__collapse-item">
            {arrayTableCustomizerSingleToggle.map(item => (
              <ReactTableCustomizerToggle
                key={item.id}
                text={item.text}
                handleClick={item.func}
                isChecked={item.isChecked}
              />
            ))}
          </div>
        </Collapse>
      </div>
    </Row>
  );
};

ReactTableCustomizer.propTypes = {
  handleClickIsEditable: PropTypes.func,
  handleClickIsResizable: PropTypes.func,
  handleClickIsSortable: PropTypes.func.isRequired,
  handleClickWithDragAndDrop: PropTypes.func,
  handleClickWithPagination: PropTypes.func.isRequired,
  handleClickWithSearchEngine: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
  isResizable: PropTypes.bool,
  isSortable: PropTypes.bool.isRequired,
  isDisabledDragAndDrop: PropTypes.bool,
  isDisabledEditable: PropTypes.bool,
  isDisabledResizable: PropTypes.bool,
  withDragAndDrop: PropTypes.bool,
  withPagination: PropTypes.bool.isRequired,
  withSearchEngine: PropTypes.bool.isRequired,
  fullCustomizer: PropTypes.bool,
};

ReactTableCustomizer.defaultProps = {
  handleClickIsEditable: () => { },
  handleClickIsResizable: () => { },
  handleClickWithDragAndDrop: () => { },
  isEditable: false,
  isResizable: false,
  isDisabledDragAndDrop: false,
  isDisabledEditable: false,
  isDisabledResizable: false,
  withDragAndDrop: false,
  fullCustomizer: false,
};

export default ReactTableCustomizer;
