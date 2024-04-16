// import React, { Component } from "react";
// import NewItem from "../NewItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { render } from "react-dom";

// export default class News extends Component {
//   // Static Default Prop

//   static defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };
//   capitilizeFirstLetter = (srting) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   constructor() {
//     super();
//     console.log("hello i am constructor");

//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults: 0,
//     };

//     document.title = `${this.capitilizeFirstLetter(
//       this.props.category
//     )} - NEWS`;
//   }
//   async updateNews() {
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88c835e58b0b41538400e9a6162cb33e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     console.log(parsedData);

//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//   }
//   async componentDidMount() {
//     console.log("cdm");

//     this.updateNews();
//   }

//   // Prev

//   handlePrevClick = async () => {
//     console.log("previous");

//     // let url = `https://newsapi.org/v2/top-headlines?country=${
//     //   this.props.country
//     // }&category=${
//     //   this.props.category
//     // }&apiKey=88c835e58b0b41538400e9a6162cb33e&page=${
//     //   this.state.page - 1
//     // }&pageSize=${this.props.pageSize}`;
//     // this.setState({ loading: true });
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // console.log(parsedData);

//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false,
//     // });
//     // this.setState({ });

//     this.setState({ page: this.state.page - 1 });
//     this.updateNews();
//   };

//   //next button

//   handleNextClick = async () => {
//     console.log("Next");

//     // if (
//     //   !(
//     //     this.state.page + 1 >
//     //     Math.ceil(this.state.totalResults / this.props.pageSize)
//     //     )
//     //     ) {
//     //       // console.log("next");
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${
//     //     this.props.country
//     //   }&category=${
//     //     this.props.category
//     //   }&apiKey=88c835e58b0b41538400e9a6162cb33e&page=${
//     //     this.state.page + 1
//     //   }&pageSize=${this.props.pageSize}`;
//     //   this.setState({ loading: true });
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();
//     //   console.log(parsedData);
//     //   this.setState({
//     //     page: this.state.page + 1,
//     //     articles: parsedData.articles,
//     //     loading: false,
//     //   });
//     this.setState({ page: this.state.page + 1 });
//     this.updateNews();
//   };

//   // this.setState({  });
// }

// fetchMoreData = async () => {
//   this.setState({ page: this.state.page + 1 });

//   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88c835e58b0b41538400e9a6162cb33e&page=1&pageSize=${this.props.pageSize}`;
//   this.setState({ loading: true });
//   let data = await fetch(url);
//   let parsedData = await data.json();
//   console.log(parsedData);

//   this.setState({
//     articles: this.state.articles.concat(parsedData.articles),
//     totalResults: parsedData.totalResults,
//     // loading: false,
//   });
// };

// // render() {

// //   console.log("hihi error")

// //   return (
// //     // <>

// //     //   {/* <h2 className="text-center">
// //     //     News Headlines {this.capitilizeFirstLetter(this.props.category)}
// //     //   </h2>

// //     //   // {this.state.loading && <Spinner />}
// //     //   <InfiniteScroll
// //     //     dataLength={this.state.articles.length}
// //     //     next={this.fetchMoreData}
// //     //     // hasMore={this.state.articles.length !== this.state.totalResults}
// //     //     hasMore={true}
// //     //     loader={<Spinner />} */}
// //     //   {/* > */}
// //     //     <div className="container">
// //     //       <div className="row">
// //     //         {this.state.articles.map((element) => {
// //     //           <div className="col-md-3" key={element.url}>
// //     //             <NewItem
// //     //               title={element.title ? element.title : ""}
// //     //               description={element.description ? element.description : ""}
// //     //               imageUrl={
// //     //                 element.urlToImage
// //     //                   ? element.urlToImage
// //     //                   : "https://images.moneycontrol.com/static-mcnews/2024/02/sensex_nifty_market-770x433.jpg"
// //     //               }
// //     //               newsUrl={element.url}
// //     //               author={element.author}
// //     //               date={element.publishedAt}
// //     //             />
// //     //           </div>;
// //     //         })}
// //     //       </div>
// //     //     </div>
// //     //   {/* </InfiniteScroll> */}
// //     // </>
// //   );
// // }
