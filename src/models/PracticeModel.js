export default class PracticeModel {
    constructor(name, value, input) {
        this.name = name,
        this.value = value,
        this.input = input
    }

    calcLength(value) {
        this.length = value.toString().length;
    }
};