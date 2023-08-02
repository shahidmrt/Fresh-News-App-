import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spner from './Spner';

  export default function News(props) {
            const [articles,setArticles]=useState([]);
            const[loading,setLoading]=useState(true)
            const[page,setPage]=useState(1)
            const[totalResults,setTotalResults]=useState(0)


            const update= async()=>{
              let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
              let data = await fetch(url);
              let parseData= await data.json();
              setArticles(parseData.articles);
              setTotalResults(parseData.totalResults);
              setLoading(false);
            }

            useEffect(()=>{
              update();
              document.title=capitalizer(props.category) + "News";

            }, []);

           const fetchMoreData = async () => {
              let url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
              setPage(page + 1);
                    let data = await fetch(url);
                    let parseData= await data.json();
                    setArticles(articles.concat(parseData.articles));
                    setTotalResults(parseData.totalResults)
            };


      const capitalizer =(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1); 
  }





  
  return (
    <>
      <div className="container my-32 d-flex flex-column align-items-center justify-content-center" style={{height: '250px'}}>
      <h2 style={{ fontSize:'4s5px', textShadow: '10px 10px 30px black', color:'purple'}} className='shadow-5 text-center fw-bolder '>News: Top {capitalizer(props.category)} Headlines </h2>
        </div>
      {/* npm install react-infinite-scroll-component */}  
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spner/>}
      >
        <div className="container">
              <div className="row">
                    {/* {!this.state.loading && this.state.articles.map((element)=>{  ye hum tab use krty hai jab hum spinner (loading ko show krty hai..)*/}
                    {articles.map((element)=>{           
                      return <div className="col-md-4 my-2 " key={element.url} >
                        {/* <NewsItem title={element.title.slice(0,30)} description={element.description.slice(0, 50)} imgUrl={element.urlToImage} newsUrl={element.url} /> */}
                        <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                      </div>
                    })}
              </div>
      </div>
      </InfiniteScroll>

       
    </>
  )
}
// News.defaultProps = {
  //   country: 'stranger',
  //   pageSize: 8,
  //   category: 'general'

  // }

  // News.propTypes = {
  //   country: PropTypes.string,
  //   pageSize:PropTypes.number,
  //   category: PropTypes.string,
  // }


















//CLASS BASE COMPONENT BANAYA THA.


// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import InfiniteScroll from 'react-infinite-scroll-component';
// import Spner from './Spner';
// import PropTypes from 'prop-types'




// export default class News extends Component {
  // static defaultProps = {
  //   country: 'stranger',
  //   pageSize: 8,
  //   category: 'general'

  // }

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize:PropTypes.number,
  //   category: PropTypes.string,
  // }

  // constructor(props){
  //   super(props);
  //   // console.log("hello i am a constructor" 
  //   console.log(props) 
  //   this.state={     
  //     articles: [],
  //     loading: true,
  //     page:1,
  //     totalResults: 0
  //   }
  //   document.title=this.capitalizer(this.props.category) + "News";
  // };

  // async update(){

  //   let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   let data = await fetch(url);
  //   // console.log(data)
  //   let parseData= await data.json();
  //   // console.log(parseData)
  //     this.setState({articles: parseData.articles, 
  //                    totalResults: parseData.totalResults, 
  //             //  loading: false
  //             })

  // }

  // async  componentDidMount(){
  //   // console.log("componentDidMOuntt")
  //   // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&apiKey=82f127589ffc4243b56d94ea757d756b&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // // console.log(data)
  //   // let parseData= await data.json();
  //   // // console.log(parseData)
  //   //   this.setState({articles: parseData.articles,
  //   //      totalResults: parseData.totalResults,
  //   //     loading: false
  //   //  })
  //   this.update();

  // }

  //   // handleClickPrevious= async()=>{
  //     // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82f127589ffc4243b56d94ea757d756b&page=${this.state.page -1 }&pageSize=${this.props.pageSize}`;
  //     // this.setState({loading:true})
  //     // let data = await fetch(url);
  //     // let parseData= await data.json();
  //     //   this.setState({articles: parseData.articles,
  //     //                  page: this.state.page-1,
  //     //                  loading: false})
  // //     this.setState({page: this.state.page - 1})
  // //     this.update();
  // //  };

  // //  handleClickNext = async ()=>{
  //   // if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){       
  //   // }
  //   // else{
  //         // let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82f127589ffc4243b56d94ea757d756b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //         // this.setState({loading:true})
  //         // let data = await fetch(url);
  //         // let parseData= await data.json();
  //         // // console.log(parseData)
  //         // this.setState({articles: parseData.articles,
  //         //                page: this.state.page + 1,
  //         //               loading: false })
  // //  }
  // //        this.setState({page: this.state.page + 1})
  // //        this.update();
  // // }


  //           fetchMoreData = async () => {
  //             this.setState({page:this.state.page + 1})
  //             let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //                   let data = await fetch(url);
  //                   // console.log(data)
  //                   let parseData= await data.json();
  //                   // console.log(parseData)
  //                     this.setState({
  //                      articles: this.state.articles.concat(parseData.articles), 
  //                    totalResults: parseData.totalResults, 
  //                    })
  //           };


  //      capitalizer =(string)=> {
  //     return string.charAt(0).toUpperCase() + string.slice(1); 
  // }




  // render() {
    // console.log("News page render")
    // return (
    //   <>
    //     <div className="container my-32 d-flex flex-column align-items-center justify-content-center" style={{height: '250px'}}>
    //     <h2 style={{ fontSize:'4s5px', textShadow: '10px 10px 30px black', color:'purple'}} className='shadow-5 text-center fw-bolder '>News: Top {this.capitalizer(this.props.category)} Headlines </h2>
    //     {/* <h3>{this.capitalizer(this.props.category)} News</h3> */}
    //       </div>
    //     {/* {this.state.loading && <Spner/>} */}

    //     {/* npm install react-infinite-scroll-component */}  
    //     <InfiniteScroll
    //       dataLength={this.state.articles.length}
    //       next={this.fetchMoreData}
    //       hasMore={this.state.articles.length !== this.state.totalResults}
    //       loader={<Spner/>}
    //     >
    //       <div className="container">
    //             <div className="row">
    //                   {/* {!this.state.loading && this.state.articles.map((element)=>{  ye hum tab use krty hai jab hum spinner (loading ko show krty hai..)*/}
    //                   { this.state.articles.map((element)=>{           
    //                     return <div className="col-md-4 my-2 " >
    //                       {/* <NewsItem title={element.title.slice(0,30)} description={element.description.slice(0, 50)} imgUrl={element.urlToImage} newsUrl={element.url} /> */}
    //                       <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
    //                     </div>
    //                   })}
    //             </div>
    //     </div>
    //     </InfiniteScroll>

    //       {/* <div className='container d-flex justify-content-between my-2'>
    //       <button disabled={this.state.page<= 1} onClick={this.handleClickPrevious} type="button" className="btn btn-dark"> &larr; Previous</button>
    //       <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleClickNext} type="button" className="btn btn-dark">Next &rarr;</button>
    //       </div> */}
    //   </>
    // )
//   }
// }
