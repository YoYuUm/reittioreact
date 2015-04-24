module.exports = {
  interpret_jore: function(routeId) {
    // returns [mode, routeType, route]
    if (!routeId){
        throw new Error('Undefined routeId');
    }
    if (routeId.match("/^1019/")){
        return ["FERRY", 4, "Ferry"];
    }
    else if (routeId.match("/^1300/")){
        return ["SUBWAY", 1, routeId.substring(4,5)];
    }
    else if (routeId.match("/^300/")){
        return ["RAIL", 2, routeId.substring(4,5)];
    }
    else if (routeId.match("/^10(0|10)/")){
        return ["TRAM", 0, routeId.replace(/^.0*/,"")];
    }
    else if (routeId.match("/^(1|2|4).../")){
        return ["BUS", 3, routeId.replace(/^.0*/,"")];
    }
    else {
        return ["BUS", 3, routeId];
    }
  }
};

