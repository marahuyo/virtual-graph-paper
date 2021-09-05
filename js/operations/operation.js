class Operation {
  static statusMessage = '[LMB] to draw';

  /**
   * Creates an instance of Operation.
   *
   * @param {import('../operation-history.js').default} operationHistory
   * @param {import('../cartesian-graph.js').default} cartesianGraph
   * @memberof Operation
   */
  constructor(operationHistory, cartesianGraph) {
    /** @type {import('../operation-history.js').default} */
    this.operationHistory = operationHistory;
    /** @type {import('../cartesian-graph.js').default} */
    this.cartesianGraph = cartesianGraph;
  }

  onMousedown() {}

  onMousemove() {}

  onMouseup() {}

  onKeydown() {}

  onKeyup() {}

  render() {}
}

export default Operation;
