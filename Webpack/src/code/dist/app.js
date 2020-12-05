var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.times = [];
        document.getElementById('submit').addEventListener("click", function () {
            var _name = document.getElementById('right-label').value;
            var _time = document.getElementById('time').value;
            if (_name != '' && _time != '')
                _this.getSubmit(_name, _time);
        });
        document.getElementById('clear').addEventListener("click", function () { return _this.getClear(); });
        document.getElementById('calcTable').addEventListener("click", function () { return _this.getCalc(); });
        document.getElementById('calcDelete').addEventListener("click", function () { return _this.deleteRow('tableCalc', 1); });
        document.getElementById('resultDelete').addEventListener("click", function () { return _this.deleteRow('tableResult', 1); });
        window.onload = function () { _this.closeByButton(); };
        document.getElementById('time').addEventListener("focus", function () { return _this.getKey(); });
    }
    App.prototype.getSubmit = function (_name, _time) {
        document.getElementById('time').value = null;
        document.getElementById('time').blur();
        document.getElementById('time').focus();
        if (_name == "") {
            alert('This name is empty!');
            this.getClear();
        }
        else {
            if (_name == this.name || this.name == undefined) {
                this.name = _name;
                this.times.push(_time);
                this.setTable(_name, _time, null);
            }
            else {
                document.getElementById('right-label').value = this.name.toString();
                alert('This name is different of table!');
            }
        }
    };
    App.prototype.setTable = function (_name, _time, _text) {
        try {
            var newRow = document.createElement('tr');
            if (_text != null) {
                newRow.insertCell(0).innerHTML = this.name.toString() + " " + _text;
                document.getElementById('tableResult').appendChild(newRow);
                this.deleteRow('tableCalc', this.times.length);
            }
            else {
                newRow.insertCell(0).innerHTML = this.name.toString();
                newRow.insertCell(1).innerHTML = this.times[this.times.length - 1].toString();
                document.getElementById('tableCalc').appendChild(newRow);
            }
        }
        catch (error) {
            null;
        }
    };
    App.prototype.deleteRow = function (id, num) {
        try {
            for (var index = 0; index < num; index++) {
                document.getElementById(id).lastElementChild.remove();
                if (id == "tableCalc")
                    this.times.pop();
                if (this.times.length == 0)
                    this.name = undefined;
            }
        }
        catch (error) {
            this.getClear();
        }
    };
    App.prototype.getCalc = function () {
        var timeHour = [];
        var timeMinute = [];
        for (var index = 0; index < this.times.length; index++) {
            if (!(parseInt(this.times[index].split(':')[0]) < 22 && parseInt(this.times[index].split(':')[0]) > 9)) {
                if (parseInt(this.times[index].split(':')[0]) == 22 || parseInt(this.times[index].split(':')[0]) == 23) {
                    timeHour.push(parseInt(this.times[index].split(':')[0]) - 22);
                }
                else if ((parseInt(this.times[index].split(':')[0]) >= 5 && parseInt(this.times[index].split(':')[0]) <= 9)) {
                    timeHour.push(7);
                }
                else {
                    timeHour.push(parseInt(this.times[index].split(':')[0]) + 2);
                }
                timeMinute.push(parseInt(this.times[index].split(':')[1]));
            }
        }
        var sum = timeMinute.reduce(function (timeMinutes, value) { return timeMinutes + value; }, 0) +
            ((timeHour.reduce(function (timeHours, value) { return timeHours + value; }, 0)) * 60);
        var hours = sum / 60;
        var resthour = Math.floor(hours);
        var minutes = (hours - resthour) * 60;
        var restMinutes = Math.round(minutes);
        timeHour = [];
        timeMinute = [];
        this.getClear();
        this.deleteRow("calcTable", this.times.length);
        this.setTable(null, null, resthour + " hour(s) and " + restMinutes + " minute(s).");
    };
    App.prototype.getClear = function () {
        document.getElementById('right-label').focus();
        document.getElementById('right-label').value = null;
        document.getElementById('time').value = null;
    };
    App.prototype.closeByButton = function () {
        window.setTimeout(function () {
            document.getElementById('btBy').click();
        }, 12000);
    };
    App.prototype.getKey = function () {
        var _this = this;
        document.addEventListener("keyup", function (e) {
            if (e.key == 'Enter' &&
                document.getElementById('time').value.length == 5)
                _this.getSubmit(document.getElementById('right-label').value, document.getElementById('time').value);
        });
    };
    return App;
}());
new App();
