import { Component, Components, Circuit } from "./Component"


let res: Components.Ressistor = {res: 60}
let vcc: Components.VoltageSource = {voltage: 5, bias: 2}
let wire: Components.Wire = {}

const circuit = new Circuit([{vcc}])

const node1: Component[] = [{res}, {wire}]

circuit
    .connect({wire})
    .connect({res})
    .connect({wire})
    .connectNode(node1)
    .closeNode()
    .closeCircuit()

    console.log(circuit.components)

