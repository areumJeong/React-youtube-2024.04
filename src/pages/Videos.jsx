import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(`/data/${keyword ? 'search' : 'popular'}.json`)
      .then(res => {}
      .then(data => {setVideos(data.items)})
        setVideos(data.items);
        console.log(videos);
  }, []);
  return (
    <>
    <div>Videos {keyword ? `${keyword}로 검색` : 'Hot Trend'}</div>
    <ul>
      {videos.map(video => {
        <li key={video.id}>{video.snippet.title}</li>
      })}

      </ul>
    </>
  )
}