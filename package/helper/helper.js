function nativeFilterOptions(options, params) {
  /**
   * @todo have to build async select filtering function
   */
  let filteredOptions = options;

  if (params?.inputValue && params?.inputValue?.length > 0) {
    if (params?.getOptionLabel) {
      filteredOptions = options.filter((oop) =>
        params?.getOptionLabel(oop)?.includes(params?.inputValue)
      );
    } else if (options && options[0] && options[0].label) {
      filteredOptions = options.filter((oop) =>
        oop?.label?.includes(params?.inputValue)
      );
    } else if (options && options[0] && options[0].name) {
      filteredOptions = options.filter((oop) =>
        oop?.name?.includes(params?.inputValue)
      );
    }
  }

  if (params?.value && Array.isArray(params?.value)) {
    let values = [];

    values = params.value?.map((val) => {
      return getValue(params, val);
    });

    filteredOptions = filteredOptions.filter(
      (oop) => !values.includes(getValue(params, oop))
    );
  } else if (params?.value) {
    filteredOptions = filteredOptions.filter(
      (oop) => getValue(params, oop) !== getValue(params, params?.value)
    );
  }
  return filteredOptions;
}

function getValue(params, oob) {
  if (params.getOptionValue) {
    return params.getOptionValue(oob);
  } else if (oob?.value) {
    return oob.value;
  } else if (oob?.id) {
    return oob.id;
  }  
}  

export { nativeFilterOptions };
