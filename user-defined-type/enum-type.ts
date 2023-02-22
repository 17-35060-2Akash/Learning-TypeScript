//numeric enum

enum RequestType1 {
    readData = 1,
    SaveData,
    deleteData,
}

// console.log(RequestType1);

//string enum
enum RequestType2 {
    readData = "READ_DATA",
    saveData = "SAVE_DATA",
    deleteData = "DELETE_DATA"

};

// console.log(RequestType2.readData);
// console.log(RequestType1.readData);

//heterogenous enum

enum RequestType3 {
    id = 101,
    readData = "READ_DATA",
    saveData = "SAVE_DATA",
    deleteData = "DELETE_DATA"

};