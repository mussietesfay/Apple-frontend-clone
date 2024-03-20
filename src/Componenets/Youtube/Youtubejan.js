import React,{useState, useEffect} from 'react'

function Youtubejan() {
    const [Youtubevideos, setvideo]=useState([]);
useEffect(()=>{
    fetch ("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBbJJibQ6YMBKobpsTZa924EU1jrISLd-E&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6" )
    .then((response)=>response.json())
    .then((data)=> {
        const youtubvideoedata=data.items;
        setvideo(youtubvideoedata);

    })
    ;

},[])
    // console.log(Youtubevideos);

  return (
    <div className="allVideosWrapper">
        <div className="container">   
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            
               
            <div key="#"className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href="#" target="_blank">
                        <img src="#" />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href="#" target="_blank">
                          some title
                        </a>
                      </div>
</div>



          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  
  
}

export default Youtubejan;