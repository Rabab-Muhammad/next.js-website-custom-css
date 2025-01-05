import React from 'react'
import cssStyle from "./watches.module.css"

const Watches = () => {
    const watchDetails = [
        {id:1,name:`Eterna Classic`,description:`Timeless Elegance`, price:`1,299`,image:`./watch1.jpg` },
        {id:2,name:`Velocia Chronograph`,description:`Sporty Precision`, price:`2,499`,image:`./watch2.jpg`},
        {id:3,name:`Aurum Royale`,description:` Golden Opulence`, price:`5,999`,image:`./watch3.jpg`},
        {id:4,name:`Lumeo Phantom`,description:`Sleek Sophistication`, price:`899`,image:`./watch4.webp`},
        {id:5,name:`Obsidian Zenith`,description:`Bold Luxury`, price:`4,299`,image:`./watch5.webp`},
        {id:6,name:`Celestia Prime`,description:`Stellar Craftsmanship`, price:`3,699`,image:`./watch6.webp`},
    ]
  return (
    <div>
      <div className={cssStyle.watches}>
        {watchDetails.map((watch)=>(
            <div key={watch.id} className={cssStyle.watchCard}>
                <img src={watch.image} alt={watch.name} />
                <h3>{watch.name}</h3>
                <p>{watch.description}</p>
                <div className={cssStyle.price}>${watch.price}</div>
                <button>Add to Cart</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Watches
