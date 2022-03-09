const Singleton = (function () {
    let instance = undefined;

    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    const instance1 = Singleton.getInstance()
    const instance2 = Singleton.getInstance()

    console.log("Same instance? " + (instance1 === instance2))

}; run();