import React, { useEffect, useState } from 'react'
import LatestnewList from './LatestnewList'
import logo from '../logo.svg'
import LoadingSpinner from '../components/Loader'
import CategoryNews from "./CategoryNews"
import PropTypes from 'prop-types'

export default function Latestnews(props) {
    let [item, setItem] = useState([])
    let [page, setpage] = useState(1)
    let [totalResults, setTotalResults] = useState()
    let [loader, setLoader] = useState(true)
    let apiUrl = "https://newsapi.org/v2";
    let apiKey = "4ccd45cda894441c8a3637b72bf978ca"
    let pageSize = 15;

    let fetchData = async () => {
        try {
            props.currentProgress(40);
            setLoader(true);
            let apiFullurl = `${apiUrl}/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
            let req = await fetch(apiFullurl);
            let data = await req.json();
            setItem(data);
            setLoader(false);
            setTotalResults(data.totalResults)
            props.currentProgress(100);
        } catch (e) {
            console.log(e, "failed")
            setLoader(false);
        }
    }
    let handleNext = async () => {
        setpage(page + 1);
    }
    let handlePrev = async () => {
        setpage(page - 1);
    }

    useEffect(() => {
        fetchData();
    }, [page, props.category])
    return (
        <>
            <div className='container'>
                <div className='row my-4'>
                    <CategoryNews />
                </div>
                {loader ? <LoadingSpinner /> :
                    <>
                        <div className='row'>
                            <h2>Top Headlines</h2>
                            {item.articles && item.articles.map((value, index) => {
                                return <div key={index} className="col-md-4">
                                    <LatestnewList newsUrl={value.url} imgUrl={value.urlToImage === null ? logo : value.urlToImage} desp={value.description !== null ? (value.description.length >= 75 ? value.description.slice(0, 75) + "...." : value.description) : "Null"} title={value.title !== null ? (value.title.length >= 60 ? value.title.slice(0, 60) : value.title) : ""} />
                                </div>
                            })
                            }
                        </div>
                        <div className='row my-5'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button disabled={page === 1} onClick={handlePrev} type="button" className="btn btn-info me-3">&larr; Previous</button>
                                <button type="button" disabled={page >= (Math.ceil(totalResults / pageSize))} onClick={handleNext} className="btn btn-info">Next &rarr;</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
Latestnews.defaultProps = {
    category: "general",
    country: "in",
}

Latestnews.propTypes = {
    category: PropTypes.string
};