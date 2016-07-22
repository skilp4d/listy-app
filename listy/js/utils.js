var ListyDB = function() {};
ListyDB.addList = function(listname, data) {
    var nlistname = "dbpfix-" + listname;
    if (localStorage[nlistname]) {
        return false;
    } else {
        localStorage[nlistname] = JSON.stringify(data);
    }
};

ListyDB.getList = function(listname) {
    var nlistname = "dbpfix-" + listname;
    if (!localStorage[nlistname]) {
        return false;
    } else {
        console.log(localStorage.getItem(nlistname));
        return JSON.parse(localStorage.getItem(nlistname));
    }
};

ListyDB.updateList = function(listname, data) {
    console.log(data);
    var nlistname = "dbpfix-" + listname;
    if (!localStorage[nlistname]) {
        return false;
    } else {
        localStorage.setItem(nlistname,JSON.stringify(data));
    }
};

ListyDB.removeList = function(listname) {
    var nlistname = "dbpfix-" + listname;
    localStorage.removeItem(nlistname);
}

ListyDB.getAllListNames = function() {
    var keys = Object.keys(localStorage);
    var names = [];
    keys.forEach(function(key) {
        console.log(key);
        if (key.substr(0, 7) == "dbpfix-") {
            names.push(key.substr(7));
        }
    });
    return names;
}

ListyDB.setCurrentList = function(name) {
    localStorage["current_list_13cefq34hqcfhl;skncd8q34"] = name;
}

ListyDB.getCurrentList = function() {
    return localStorage["current_list_13cefq34hqcfhl;skncd8q34"];
}
