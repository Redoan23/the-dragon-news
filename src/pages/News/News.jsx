import { Link } from "react-router-dom"


export default function News({ news }) {

    const { _id, thumbnail_url, image_url, details, title } = news

    return (
      
            
            <div className="card card-compact mt-5 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ?
                            <p> {details.slice(0, 200)}
                                <Link to={`/newsdetails/${_id}`} className=" text-red-400"> Read more</Link></p>
                            :
                            <p>{details}</p>
                    }
                </div>
            </div>

    )
}