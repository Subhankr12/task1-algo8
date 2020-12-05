const config = {
    production: {
        mongo: {
            billing: "****",
        }
    },
    default: {
        mongo: {
            billing: "****",
        }
    }
}

exports.get = function get(env){
    return config[env] || config.default;
}