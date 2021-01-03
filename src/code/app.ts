class App {

  name : String; times : Array<String> = []

  constructor() {
    
    document.getElementById('submit').addEventListener("click", () => {
        let _name = (<HTMLSelectElement>document.getElementById('right-label')).value
        let _time = (<HTMLSelectElement>document.getElementById('time')).value
        if(_name != '' && _time != '') this.getSubmit(_name, _time)
    })

    document.getElementById('clear').addEventListener("click", () => this.getClear())

    document.getElementById('calcTable').addEventListener("click", () => this.getCalc())

    document.getElementById('calcDelete').addEventListener("click", () => this.deleteRow('tableCalc', 1))
    
    document.getElementById('resultDelete').addEventListener("click", () => this.deleteRow('tableResult', 1))
    
    window.onload = () => { this.closeByButton() }
  
    document.getElementById('time').addEventListener("focus", () => this.getKey())

  }

  public getSubmit(_name : String, _time : String) {
    (<HTMLSelectElement>document.getElementById('time')).value = null
    document.getElementById('time').blur()
    document.getElementById('time').focus()
   
    if(_name == "") {
      alert('This name is empty!')
      this.getClear()
    } 
    else {
      if(_name == this.name || this.name == undefined) {
        this.name = _name
        this.times.push(_time)
        this.setTable(_name, _time, null)
      }    
      else {
        (<HTMLSelectElement>document.getElementById('right-label')).value = this.name.toString()
        alert('This name is different of table!')        
      }
    }
  }

  public setTable(_name : String, _time : String , _text : string) {
    try {
      let newRow = document.createElement('tr')

      if(_text != null) {        
        newRow.insertCell(0).innerHTML = this.name.toString() + " " + _text     
        document.getElementById('tableResult').appendChild(newRow);
        this.deleteRow('tableCalc', this.times.length)
      } else {      
        newRow.insertCell(0).innerHTML = this.name.toString()
        newRow.insertCell(1).innerHTML = this.times[this.times.length - 1].toString()
        document.getElementById('tableCalc').appendChild(newRow);
      }
    } catch (error) { null }
  }

  public deleteRow(id : string, num : number) {    
    try {
      let scrollUp = window.scrollY;
      for (let index = 0; index < num; index++) {
        document.getElementById(id).lastElementChild.remove()
        if(id == "tableCalc") this.times.pop()
        if(this.times.length == 0) this.name = undefined
        window.scrollBy(0, scrollUp - window.scrollY);
      }                  
    } catch (error) { this.getClear() }    
  }

  public getCalc() {    
    let timeHour : Array<number> = []; let timeMinute : Array<number> = []

    for (let index = 0; index < this.times.length; index++) {
      if(!(parseInt(this.times[index].split(':')[0]) < 22 && parseInt(this.times[index].split(':')[0]) > 9)) {
        if(parseInt(this.times[index].split(':')[0]) == 22 || parseInt(this.times[index].split(':')[0]) == 23) 
          { timeHour.push(parseInt(this.times[index].split(':')[0]) - 22) }
        else if((parseInt(this.times[index].split(':')[0]) >= 5 && parseInt(this.times[index].split(':')[0]) <= 9)) 
          { timeHour.push(7) }
        else { timeHour.push(parseInt(this.times[index].split(':')[0]) + 2) } 
        timeMinute.push(parseInt(this.times[index].split(':')[1]))
      }
    }

    let sum = timeMinute.reduce((timeMinutes, value) => timeMinutes + value, 0) + 
      ((timeHour.reduce((timeHours, value) => timeHours + value, 0)) * 60)

    let hours = sum / 60      
    let resthour = Math.floor(hours)

    let minutes = (hours - resthour) * 60
    let restMinutes = Math.round(minutes)

    timeHour = []; timeMinute = []; 
    
    this.getClear()
    this.deleteRow("calcTable", this.times.length)    
    this.setTable(null, null, resthour + " hour(s) and " + restMinutes + " minute(s).")
  }

  public getClear() {
    document.getElementById('right-label').focus();
    (<HTMLSelectElement>document.getElementById('right-label')).value = null;
    (<HTMLSelectElement>document.getElementById('time')).value = null;
  }

  public closeByButton() {
    window.setTimeout(() => { document.getElementById('btBy').click()
    }, 12000)
  }

  public getKey() {
    document.addEventListener("keyup", (e : KeyboardEvent) => { if(e.key == 'Enter' && 
      (<HTMLSelectElement>document.getElementById('time')).value.length == 5) 
        this.getSubmit((<HTMLSelectElement>document.getElementById('right-label')).value, 
        (<HTMLSelectElement>document.getElementById('time')).value)        
    });
  }
}
new App()