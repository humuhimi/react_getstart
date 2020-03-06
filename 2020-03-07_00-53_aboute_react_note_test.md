
・handleCnhangeについて

```javascript
    handleChange(event){
        const {name,value} = event.target
        this.setState({
            [name] : value
        })

<input
    name="firstName"
    value={this.state.firstName}
    onChange={this.handleChange}
    placeholder="First Name"

name→event.target.name
value→event.target.value

['Firstname'] : "書き込んだ値"
```

```javascript
// 複数のclassを定義して、個別にimport場合
import React from 'react';

export class Comp1 extends React.Component {
  render() {
    return (...
    );
  }
}

export class Comp2 extends React.Component {
  render() {
    return (...
    );
  }
}
--- 
import {Comp2} from './comp/comps';
```


・アロー関数を使うと関数のbindを必要としなくなる

```javascript

     this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,value,type,checked} = event.target
        type === "checkbox" ?
            this.setState({
                    [name] : checked
            })
            :
        this.setState({
            [name] : value
        })
    }
↓↓↓
//  eventに入って関数化される時にbindされるので、constoructor内で宣言を必要としない
handleChange = (event) => {
        const {name,value,type,checked} = event.target
        type === "checkbox" ?
            this.setState({
                    [name] : checked
            })
            :
        this.setState({
            [name] : value
        })
    }
```
