import React from 'react'

export default function NewsItem({source,imgUrl,title,description,date,author,newsUrl}) {  //ye hum ny props pass kiye hai .... ya pir yaha pr props likengy aur neechy props.title aisa likengy. us tara bi hum likh skty hai...
  return (
    <div>
      <div className="card" style={{width:"18rem", margin:'px', boxShadow: '10px 10px 30px black' }}>
      <span style={{left: '86%', zIndex:'1'}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{source}
       {/* <span className="visually-hidden">unread messages</span> */}
         </span>
          <img style={{height:"200px"}} src={imgUrl?imgUrl:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N7FNFCVS6EPV5Q2CPNGZDEKGJE.jpg&w=1440"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title" style={{maxWidth: '100%',display: '-webkit-box',WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden',textOverflow: 'ellipsis'}}>{title}</h5>
            <p className="card-text" style={{maxWidth: '100%',display: '-webkit-box',WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden',textOverflow: 'ellipsis'}}>{description}</p>
            <div className='container d-flex justify-content-between'>
              <div>

            <p style={{fontSize:'12px', alignItems:'end', justifyContent:'end', color:'blue'}} > {new Date(date).toUTCString()}</p>
            {/* {new Date(date).toLocaleDateString()} */}
            <p style={{fontSize:'12px', alignItems:'end', justifyContent:'end'}} > {author?author:"Unknown"}</p>

              </div>
            {/* <p className="card-text"><small className="text-body-secondary text-muted"></small>{date}</p> */}
            </div>
            <a href={newsUrl} target='_blank'  className="btn btn-sm btn-dark">read more</a>
          </div>
        </div>
        <div>

        </div>
    </div>
  )
}








/// YE CLASS BASE BANAYA THA.... 

// import React, { Component } from 'react'

// export default class NewsItem extends Component {

 

  // render() {
    // let {title, description, imgUrl, newsUrl,date,author,source}=this.props;
    // return (
    //   <div>
    //     <div className="card" style={{width:"18rem", margin:'px', boxShadow: '10px 10px 30px black' }}>
    //     <span style={{left: '86%', zIndex:'1'}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">{source}
    //      {/* <span className="visually-hidden">unread messages</span> */}
    //        </span>
    //         <img style={{height:"200px"}} src={imgUrl?imgUrl:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/N7FNFCVS6EPV5Q2CPNGZDEKGJE.jpg&w=1440"} className="card-img-top" alt="..."/>
    //         <div className="card-body">
    //           <h5 className="card-title" style={{maxWidth: '100%',display: '-webkit-box',WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden',textOverflow: 'ellipsis'}}>{title}</h5>
    //           <p className="card-text" style={{maxWidth: '100%',display: '-webkit-box',WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden',textOverflow: 'ellipsis'}}>{description}</p>
    //           <div className='container d-flex justify-content-between'>
    //             <div>

    //           <p style={{fontSize:'12px', alignItems:'end', justifyContent:'end', color:'blue'}} > {new Date(date).toUTCString()}</p>
    //           {/* {new Date(date).toLocaleDateString()} */}
    //           <p style={{fontSize:'12px', alignItems:'end', justifyContent:'end'}} > {author?author:"Unknown"}</p>

    //             </div>
    //           {/* <p className="card-text"><small className="text-body-secondary text-muted"></small>{date}</p> */}
    //           </div>
    //           <a href={newsUrl} target='_blank'  className="btn btn-sm btn-dark">read more</a>
    //         </div>
    //       </div>
    //       <div>

    //       </div>
    //   </div>
    // )
//   }
// }
