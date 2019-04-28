export default class QueryBuilder {

  constructor() {
    this.params = [];
  }

  add(key, val) {
    this.params.push({key, val});
    return this;
  }

  build() {
    let result = this.params.map(param => {

      if (param.val === undefined) {
        return param.key;
      }

      return `${param.key}=${param.val}`;
    });

    result = result.join('&');

    return encodeURI(result);
    // return encodeURIComponent(result);
    // return this.encodeStr(result);
  }

  encodeStr(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

};