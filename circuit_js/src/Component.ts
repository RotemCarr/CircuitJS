export type Component = {
    [key: string]: Components.Wire | Components.VoltageSource | Components.Ressistor | Components.Capacitor
}

export module Components {

    export type Wire = {
        voltage?: number,
        current?: number
    }

    export type VoltageSource = {
        voltage: number,
        current?: number,
        bias?: number
    }

    export type Ressistor = {
        res: number,
        voltage?: number,
        current?: number
    }

    export type Capacitor = {
        cap: number,
        voltage?: number,
        current?: number
    }
}

export class Circuit {
    components: Component[]

    constructor(comp: Component[]) {
        this.components = comp
    }

    connect(comp: Component) {
        this.components.push(comp)
        return new Circuit(this.components)
    }

    connectNode(node: Component[], _connection1?: Component, _connection2?: Component) {
        this.components.push(...node)
        return new Circuit(this.components)
    }

    closeNode(_node1?: Component) {
        return new Circuit(this.components)
    }

    closeCircuit() {
        return null
    }
}