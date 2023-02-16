export default function Card (props){
    let badge
    if(props.item.openspots === 0){
        badge = 'SOLD OUT'
    }else if(props.item.location === "Online") {
        badge ="Online"
    }
    return(
        
        <div className="card">
            {/* The JSX expression uses the logical && operator to conditionally render the div element. If badgeText is truthy (i.e. not undefined), the expression will render the div element with the text contained inside. If badgeText is falsy (i.e. undefined), the expression will not render anything. */}
           {badge && <div className="card--badge">
                {badge}
            </div>}
            <img className="card--img" src={`../images/${props.item.coverImg}`} alt="" />
            {/* <img className="card--sold" src="images/Group 80.png" alt="" /> */}
        <div className="card--description">
                <img className="card--star" src="images/star.png" alt="" />
                <p className="card--rating">{props.item.stats.rating}<span className="card--rating-country">({props.item.stats.reviewCount}).{props.location}</span></p>
          </div >

            <p className="card--name">{props.item.title} </p>
            <p className="card--price">From ${props.item.price} / <span className="card--price_person">person</span> </p>

            </div>
       
       
//  <div className="card">
//             <img src={`../images/${props.img}`} className="card--image" />
//             <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.rating}</span>
//                 <span className="gray">({props.reviewCount}) • </span>
//                 <span className="gray">{props.location}</span>
//             </div>
//             <p className="card--title">{props.title}</p>
//             <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
//         </div>

    )
}