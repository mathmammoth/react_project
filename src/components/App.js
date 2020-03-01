import React, {PureComponent} from "react";
import ArticleList from "./ArticleList/index";
import articles from "../fixtures"
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'


    class App extends PureComponent{
        state = {
            reverted: false
    };



        revert = () => {
            this.setState({
                reverted: !this.state.reverted
            });
        };



    render() {
        console.log('---', 1);
            return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3" style={{textAlign: "center"}}>
                        Articles
                        <button id="seth" className="btn btn-lg" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }




    }
export default App