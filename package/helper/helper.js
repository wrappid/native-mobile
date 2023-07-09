function getFullName(data) {
  var n = "";
  if (data?.firstName) {
    n += data?.firstName;
  }
  if (data?.middleName) {
    n += " " + data?.middleName;
  }
  if (data?.lastName) {
    n += " " + data?.lastName;
  }
  return n && n.length > 0 ? n : "Unnamed";
}

function queryBuilder(url, query) {
  var newUrl = url;
  if (
    query &&
    Object.keys(query).length > 0 /* &&
    Object.values(query).find((v) => v && v !== "") */
  ) {
    newUrl += "?";
    var keys = Object.keys(query);
    for (var index = 0; index < keys.length; index++) {
      var q = keys[index];

      // not needed below if statement,
      // because it is not considering the value 0 i.e.treated as false
      // although 0 should be as a parameter value for api query params
      /* if (query[q]) {
      } */
      if (index > 0 && newUrl.charAt(newUrl.length - 1) !== "?") {
        newUrl +=
          "&" +
          q +
          "=" +
          (typeof query[q] === "object" ? JSON.stringify(query[q]) : query[q]);
      } else {
        newUrl += q + "=" + query[q];
      }
    }
  }
  return newUrl;
}

function createFormData(files, body) {
  //console.log(file, field, body);
  const data = new FormData();
  //console.log("IN form data", file, body);
  if (file) {
    for (var i = 0; i < files.length; i++) var file = files[i];
    data.append(file.name, file.data);
  }
  //console.log("IN form data", data);
  Object.keys(body).forEach((key) => {
    //console.log(body[key]);
    data.append(key, body[key]);
  });
  console.log("data inside foreach", data);
  return data;
}

function clearValidatePhoneEmail(text) {
  var t = text;
  if (!text || (text && text.length === 0)) return false;
  if (t[0] === "'") {
    t = t.slice(1);
    t = t.toLowerCase();
  }
  var f = String(t).match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (f) {
    return f;
  } else if (!f) {
    f = String(t).match(
      /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/
    );

    return f;
  }

  return f;
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

export {
  getFullName,
  queryBuilder,
  createFormData,
  clearValidatePhoneEmail,
  nativeFilterOptions,
};
