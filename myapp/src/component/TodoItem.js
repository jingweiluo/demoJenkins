import React, { Component } from 'react'


class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionList: ["https://www.amazon.com", "https://www.netflix.com", "https://www.ted.com/#/", "https://www.youtube.com/"],
            selectedOption: undefined,
            newUrl: '',
            newInterval: undefined,
            displayInterval: undefined,
            myWindow: null,
            loop: 0
        };
    }

    moveUpOption = () => {
        const index = this.state.optionList.indexOf(this.state.selectedOption);
        if (index > 0) {
            let nextOptionList = [...this.state.optionList];
            const temp = nextOptionList[index - 1];
            nextOptionList[index - 1] = nextOptionList[index];
            nextOptionList[index] = temp;
            this.setState({
                optionList: nextOptionList
            });
        }
    }

    moveDownOption = () => {
        const index = this.state.optionList.indexOf(this.state.selectedOption);
        if (index < this.state.optionList.length - 1) {
            let nextOptionList = [...this.state.optionList];
            const temp = nextOptionList[index + 1];
            nextOptionList[index + 1] = nextOptionList[index];
            nextOptionList[index] = temp;
            this.setState({
                optionList: nextOptionList
            });
        }
    }

    deleteOption = () => {
        const index = this.state.optionList.indexOf(this.state.selectedOption);
        let nextOptionList = [...this.state.optionList];
        if (index >= 0) {
            nextOptionList.splice(index, 1);
            this.setState({
                optionList: nextOptionList,
                selectedOption: undefined
            })
        }
    }

    addUrl = () => {
        let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(this.state.newUrl)) {
            let nextOptionList = [...this.state.optionList];
            nextOptionList.push(this.state.newUrl);
            this.setState({
                optionList: nextOptionList,
                newUrl: ""
            })
        } else {
            alert("Wrong URL format")
        }
        this.setState({ newUrl: "" })
    }


    setPlayInterval = () => {
        let temp = this.state.newInterval;
        this.setState({
            displayInterval: temp,
        })
        console.log(this.state.displayInterval);
    }

    
    launchNavigate = () => {
        let i = 0;
        let urlList = [...this.state.optionList];
        if (this.state.myWindow != null) {
            this.state.myWindow.close();
            clearInterval(this.state.loop);
        }

        this.state.myWindow = window.open(urlList[0], "_blank")



        let that = this;

        console.log("Is myWindow null: " + (that.state.myWindow.location));

        this.state.loop = setInterval(function () {
            i++;
            //console.log("this.state.myWindow.location: " + this.state.myWindow);
            if (i >= urlList.length) {
                i = 0;
            }
            console.log(i);
            that.state.myWindow.location = urlList[i];
        }, this.state.displayInterval * 1000);
    }
    
    /*
    navigate = () => {
        let index = 0;
        const urlList = [...this.state.optionList];
        if (this.state.myWindow != null) {
            this.state.myWindow.close();
            clearInterval(this.state.loop);
        }

        const loop = setInterval(() => {
            index++;
            if(index >= urlList.length){
                index = 0;
            }
            this.state.myWindow.location.replace(urlList(index));
        }, this.state.playInterval * 1000);

        this.setState({
            myWindow: window.open(urlList[0], "_blank"),
            loop,
        });
        //console.log(myWindow);
    } */






    handleChangeUrl = (event) => {
        this.setState({ newUrl: event.target.value });
    }

    handleChangeInterval = (event) => {
        this.setState({ newInterval: event.target.value });
    }

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value });
    }


    render() {
        return (
            <div>
                <div>{this.props.show}</div>
                <div className="row">
                    <div className="col-11">
                        <select
                            className="custom-select"
                            size="10"
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                        >
                            {this.state.optionList.map((option) => {
                                return <option key={option} value={option}>{option}</option>
                            })}
                        </select>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.moveUpOption}>Up</button>
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.deleteOption}> Delete</button >
                        <button className="btn btn-light" style={{ marginTop: "30px" }} onClick={this.moveDownOption}> Down</button >
                    </div >
                </div >

                <br></br>
                <br></br>

                <div className="row">

                    <div className="col-5">
                        <div className="form-group">
                            <input
                                type="url"
                                className="form-control"
                                id="new-option"
                                aria-describedby="emailHelp"
                                placeholder="Add a new url"
                                onChange={this.handleChangeUrl}
                            />
                        </div>
                    </div>

                    <div className="col-2">
                        <button className="btn btn-light btn-block" onClick={this.addUrl}>Add URL</button>
                    </div>

                    <div className="col-1">
                        <button className="btn btn-light btn-block" onClick={this.setPlayInterval}>Set</button>
                    </div>

                    <div className="col-2">
                        <input
                            type="text"
                            className="form-control mb-2 mr-sm-2"
                            id="interval"
                            placeholder="Set Interval"
                            onChange={this.handleChangeInterval}
                        />
                    </div>

                    <div className="col-2">
                        <p>current interval:{this.state.displayInterval}s</p>
                    </div>
                </div>

                <br></br>

                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-light btn-block">Save List</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-light btn-block">Load list</button>
                    </div>
                </div>
                <br />
                <button className="btn btn-dark btn-lg btn-block" onClick={this.launchNavigate} >Launch</button>
            </div >
        );
    }
}


export default TodoItem;