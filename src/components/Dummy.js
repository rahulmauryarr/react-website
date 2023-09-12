// import React, { Component } from 'react'
// import Newslist from './Newslist'
// import logo from '../logo.svg'
// import LoadingSpinner from '../components/Loader'

// let apiUrl = "https://newsapi.org/v2";
// let apiKey = "4ccd45cda894441c8a3637b72bf978ca"


// export default class News extends Component {
//     constructor() {
//         super()
//         this.state = {
//             items: [],
//             page: 1,
//             loading: true,
//             title: "Top Headlines"
//         }
//     }

//     handleNext = async () => {
//         if (!(Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1)) {
//             try {
//                 this.setState({
//                     loading: true
//                 })
//                 let apiFullurl = `${apiUrl}/top-headlines?country=in&apiKey=${apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
//                 let req = await fetch(apiFullurl);
//                 let items = await req.json();

//                 this.setState({
//                     page: this.state.page + 1,
//                     items: items.articles,
//                     loading: false
//                 });
//                 window.scrollTo(0, 0)
//             } catch (e) {
//                 console.log(e, "failed")
//             }
//         } else {

//         }
//     }
//     handlePrev = async () => {
//         try {
//             this.setState({
//                 loading: true
//             })
//             let apiFullurl = `${apiUrl}/top-headlines?country=in&apiKey=${apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
//             let req = await fetch(apiFullurl);
//             let items = await req.json();
//             this.setState({
//                 page: this.state.page - 1,
//                 items: items.articles,
//                 loading: false
//             });
//         } catch (e) {
//             console.log(e, "failed")
//         }
//     }

//     componentDidMount = async () => {
//         window.scrollTo(0, 0)
//         try {
//             this.setState({
//                 loading: true
//             })
//             let apiFullurl = `${apiUrl}/top-headlines?country=in&apiKey=${apiKey}&pageSize=${this.props.pageSize}&page=1`;
//             let req = await fetch(apiFullurl);
//             let items = await req.json();

//             this.setState({
//                 items: items.articles,
//                 loading: false,
//                 totalResults: items.totalResults,
//             });
//         } catch (e) {
//             console.log(e, "failed")
//         }
//     }
//     render() {

//         return (
//             <>

//                 <div className='container text-start'>
//                     {this.state.loading ? <LoadingSpinner /> :
//                         <>
//                             <div className='row'>
//                                 <h2>{this.state.title}</h2>
//                                 {this.state.items?.map((value, index) => {
//                                     return <div key={index} className='col-md-4'>
//                                         <Newslist newsUrl={value.url} imgUrl={value.urlToImage == null ? logo : value.urlToImage} desp={value.description !== null ? (value.description.length >= 75 ? value.description.slice(0, 75) + "...." : value.description) : "Null"} title={value.title !== null ? (value.title.length >= 60 ? value.title.slice(0, 60) : value.title) : ""} />
//                                     </div>
//                                 })}
//                             </div>
//                             <div className='row my-5'>
//                                 <div className='d-flex align-items-center justify-content-center'>
//                                     <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrev} className="btn btn-info me-3">&larr; Previous</button>
//                                     <button type="button" disabled={(Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1)} onClick={this.handleNext} className="btn btn-info">Next &rarr;</button>
//                                 </div>
//                             </div>
//                         </>
//                     }
//                 </div>

//             </>
//         )
//     }
// }

