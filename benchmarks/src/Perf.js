const median = sequence => sequence.sort()[Math.ceil(sequence.length / 2)];

export default class Perf {
  static afterEach = () => {};

  static measure = ({
    setup = () => {},
    fn = () => {},
  }) => {
    let setupCode = setup.toString();
    setupCode = setupCode
                  .substring(setupCode.indexOf('{') + 1, setupCode.lastIndexOf('}'))
                  .replace(/var /g, 'window.');
    // eslint-disable-next-line
    eval(setupCode);

    const measures = [];
    let i = 10;
    while (i--) {
      const start = performance.now();
      fn();
      const end = performance.now();
      measures.push(end - start);
    }
    Perf.afterEach();

    return median(measures).toFixed(4);
  };

  static suite = (config) => {
    // eslint-disable-next-line
    console.log('Running tests...');

    const results = {};
    Object.keys(config).forEach((row) => {
      results[row] = Object.keys(config[row]).reduce((acc, cur) => ({
        ...acc,
        [config[row][cur].message]: Perf.measure(config[row][cur]),
      }), {});
    });

    // eslint-disable-next-line
    console.table(results);
  }
}
