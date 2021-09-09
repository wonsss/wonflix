import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "", //searchTerm을 input받아서 update하는 함수는 만들 예정임
        error: null,
        loading: false
    };

    handleSubmit = () => {
        const {searchTerm} = this.state;
        if(searchTerm !== "") {
            this.searchByTerm();
        }
    }

    searchByTerm = async() => {
        const {searchTerm} = this.state;
        this.setState({loading:true});
        try {
            const {data:{results: movieResults}} = await moviesApi.search(searchTerm);
            const {data:{results: tvResults}} = await tvApi.search(searchTerm);
            this.setState({
                movieResults, tvResults
            })
        } catch {
            this.setState({error: "Can't find results"});
        } finally {
            this.setState({loading:false});
        }
    }

    render() {
        console.log(this.state);
        const {movieResults, tvResults, searchTerm, error, loading} = this.state;
        return <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} error={error} loading={loading} handleSubmit={this.handleSubmit}/>
    };
}
