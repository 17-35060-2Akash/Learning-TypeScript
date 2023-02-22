//numeric enum
var RequestType1;
(function (RequestType1) {
    RequestType1[RequestType1["readData"] = 1] = "readData";
    RequestType1[RequestType1["SaveData"] = 2] = "SaveData";
    RequestType1[RequestType1["deleteData"] = 3] = "deleteData";
})(RequestType1 || (RequestType1 = {}));
// console.log(RequestType1);
//string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["saveData"] = "SAVE_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
;
// console.log(RequestType2.readData);
// console.log(RequestType1.readData);
//heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3[RequestType3["id"] = 101] = "id";
    RequestType3["readData"] = "READ_DATA";
    RequestType3["saveData"] = "SAVE_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
})(RequestType3 || (RequestType3 = {}));
;
