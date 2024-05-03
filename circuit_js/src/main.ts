import { Ressistor, VoltageSource, Wire, Circuit, Component } from "./Component"


let res: Ressistor = {res: 60}
let vcc: VoltageSource = {voltage: 5, bias: 2}
let wire: Wire = {}

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


