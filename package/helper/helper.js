function nativeFilterOptions(options, params) {
  /**
   * @todo have to build async select filtering function
   */
  // console.log('OPTIONS:', options, params);
  let filteredOptions = options;
  if (params?.inputValue && params?.inputValue?.length > 0) {
    if (params?.getOptionLabel) {
      filteredOptions = options.filter((op) =>
        params?.getOptionLabel(op)?.includes(params?.inputValue)
      );
    } else if (options && options[0] && options[0].label) {
      filteredOptions = options.filter((op) =>
        op?.label?.includes(params?.inputValue)
      );
    } else if (options && options[0] && options[0].name) {
      filteredOptions = options.filter((op) =>
        op?.name?.includes(params?.inputValue)
      );
    }
  }

  // console.log('params.value', params?.value);
  if (params?.value && Array.isArray(params?.value)) {
    let values = [];
    values = params.value?.map((v) => {
      return getValue(params, v);
    });
    // console.log('\tvalue', values);

    filteredOptions = filteredOptions.filter(
      (op) => !values.includes(getValue(params, op))
    );
  } else if (params?.value) {
    filteredOptions = filteredOptions.filter(
      (op) => getValue(params, op) !== getValue(params, params?.value)
    );
  }
  return filteredOptions;
}

function getValue(params, ob) {
  if (params.getOptionValue) {
    return params.getOptionValue(ob);
  } else if (ob?.value) {
    return ob.value;
  } else if (ob?.id) {
    return ob.id;
  }  
}  

export {
  nativeFilterOptions,
};
