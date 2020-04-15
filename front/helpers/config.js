import objectPath from 'object-path';

export default {
  get(path) {
    return objectPath.get(APP_CONFIG, path);
  },
};
