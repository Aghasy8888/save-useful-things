import { useState } from 'react';
import PropTypes from 'prop-types';
import { arrow as DropDownArrow, russianFlag } from '../assets';
import useCloseModal from '../hooks/useCloseModal';
import DropDownOptions from './DropDownOptions';

const DropDown = ({
  options,
  initiallySelectedOption,
  makeTheChange,
  disabled,
  styles,
}) => {
  const {
    option: optionClass,
    disabled: disabledClass,
    container,
    open,
    closed,
    header,
    options: optionsClass,
    arrow,
  } = styles;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initiallySelectedOption);
  const handleOptionChange = (option) => {
    makeTheChange && makeTheChange(option);
    setSelectedOption(option);

    setDropdownOpen(false);
  };
  // const selectedOptionIndex = options.findIndex(
  //   (option) => option.value === selectedOption.value
  // );

  useCloseModal(dropdownOpen, setDropdownOpen, 'dialog');

  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleDropdownOpenState();
      event.preventDefault();
    }
  };

  const handleDropdownOpenState = (e) => {
    e.stopPropagation();
    if (disabled) return;
    console.log('dropdownOpen', dropdownOpen);

    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={dropdownOpen ? 'true' : 'false'}
      className={`${container} ${disabled ? disabledClass : ''}  ${
        dropdownOpen ? open.container : closed
      }`}
      onClick={handleDropdownOpenState}
      onKeyDown={onKeyDown}
    >
      <div className={`${header} ${dropdownOpen ? open.header : ''}`}>
        <img src={russianFlag} alt="russianFlag" />{' '}
        <span>{selectedOption?.label.substring(0, 2)}</span>
      </div>

      {dropdownOpen && (
        <DropDownOptions
          handleOptionChange={handleOptionChange}
          options={options}
          styles={{ optionClass, optionsClass }}
        />
      )}

      <img
        src={DropDownArrow}
        alt="arrow"
        className={dropdownOpen ? arrow.rotated : arrow.default}
      />
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  initiallySelectedOption: PropTypes.object,
  makeTheChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  optionsTitle: PropTypes.string,
  styles: PropTypes.object,
};

export default DropDown;
