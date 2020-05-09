import React from 'react'
import Form from './../components/Form'
import ListTable from '../components/ListTable'
import {Layout} from 'antd'


class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            list : [],
            taskEditing : null
        }
    }
    componentDidMount(){
        var {list} = this.state
        if(list.length === 0){
            const data = JSON.parse(localStorage.getItem('LIST')) || [];
            this.setState({
                list : data
            })
        }
    }
    onChange = objectForm => {
        // console.log(objectForm)
        var {list} =this.state
        list.push({
            ...objectForm,
            key : list.length
        })
        // console.log('h ia zai')
        // console.log('list', list)
        // var key = list.length
        // list = [...list, objectForm, key]
        this.setState({
            list : list
        })
        localStorage.setItem('LIST', JSON.stringify(this.state.list));   
     
    }

    onDelete = key => {
        var {list} = this.state
        const newList = list.filter(item => item.key !== key)
        this.setState({
            list : newList
        }, () => {
            localStorage.setItem('LIST', JSON.stringify(this.state.list));  
        })
         
    }
    // onReset = () => {
    //     this.setState({

    //     })
    // }
    findIndexInList = key => {
        const {list} = this.state
        var result = -1

        list.forEach((listItem, index) => {
            if(listItem.key === key){
                result = index
            }
        })
        return result
    }
    
    onUpdate = key => {
        var {list} = this.state
        const index = this.findIndexInList(key)
        var taskEditing = list[index]
        this.setState({
            taskEditing : taskEditing
        })
    }
  

    render() {
        var {list, taskEditing}= this.state
        // console.log(list)

        return (
            <Layout>
                <Form onChange={this.onChange} task = {taskEditing}/>
                
                <ListTable data = {list} onDelete = {this.onDelete} onReset = {this.onReset} onUpdate = {this.onUpdate}/>
            </Layout>

        )
    }
}

export default Home