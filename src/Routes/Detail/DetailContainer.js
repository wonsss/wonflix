import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;
    const { isMovie } = this.state;
    this.isMovie = pathname.includes("/movie/");
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    console.log(this.state);
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
