import PropTypes from 'prop-types';

const DropDownOptions = ({
  options,
  handleOptionChange,
  styles: { optionsClass = '', optionClass = '' },
}) => {
  return (
    <dialog className={optionsClass}>
      {options.map((option) => (
        <div
          key={option.value}
          className={optionClass}
          onClick={() => handleOptionChange(option)}
        >
          {option.label}
        </div>
      ))}
    </dialog>
  );
};

DropDownOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  styles: PropTypes.object,
};

export default DropDownOptions;
