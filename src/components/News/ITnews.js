import React from 'react'
import { useState, useEffect } from 'react'

const ITnews = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchITnews = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        `http://newsapi.org/v2/everything?q=technology&apiKey=${API_KEY}`
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setNews((data.articles || []).slice(0, 4))
    } catch (error) {
      console.error('Error fetching IT news:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchITnews()
  }, [])

  if (loading) {
    return (
      <div id="projects" className="mx-auto px-10 pt-28 mt-52 pb-48 text-white">
        <h2 className="text-4xl text-[#00b4d8] justify-start font-bold">
          Latest IT News
        </h2>
        <div className="flex justify-center pt-10">
          <div className="text-white">Loading news...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div id="projects" className="mx-auto px-10 pt-28 mt-52 pb-48 text-white">
        <h2 className="text-4xl text-[#00b4d8] font-bold text-left">
          Latest IT News
        </h2>
        <div className="flex justify-center pt-10">
          <div className="text-red-400">Error: {error}</div>
        </div>
      </div>
    )
  }

  return (
    <div id="projects" className="mx-auto px-10 pt-28 mt-52 pb-48 text-white">
      <h2 className="text-4xl text-[#00b4d8] font-bold text-left mb-12">
        Latest IT News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.length > 0 ? (
          news.map((article, index) => (
            <div
              key={index}
              className="bg-none rounded-lg p-4 hover:bg-[#00b4d8] transition-all duration-300 hover:scale-105 h-full flex flex-col"
            >
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              )}
              <h3 className="text-lg font-semibold mb-2 line-clamp-2 flex-grow">
                {article.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {article.description}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-400 mt-auto">
                <span className="truncate max-w-20">
                  {article.source?.name}
                </span>
                <span>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
              {article.url && (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[#7f999e] hover:text-[#000000] transition-colors text-sm font-medium"
                >
                  Read more →
                </a>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center text-white py-8">
            No news articles found.
          </div>
        )}
      </div>
    </div>
  )
}

export default ITnews
