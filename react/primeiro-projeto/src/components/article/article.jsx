import React from "react"
import "./styles.css"

export function Article({title, provides, description }) {
    
        return(
          <article id="article">
            <img src="" alt="" />
            <div className="article-infos">
                <h2>{title}</h2>

                <h3>{provides}</h3>

                <p>{description}</p>
            </div>
          </article>
        )
}
