import react from 'react'
import CateStyle from '../../styles/Categories.module.css'
import Link from 'next/link'


const Categories = () =>{
    return(<div>

        <p className={CateStyle.heading}>What are you looking for ?</p>

        <div className={CateStyle.imageCard}>

           
        <div className={CateStyle.imgWrapper}>
    <a href="/plants"><img className={CateStyle.innerImg} src="/images/pots.png" sizes="(min-width: 1400px) 433px,
                    (min-width: 750px) calc((100vw - 10rem) / 2),
                    calc(100vw - 3rem)" 
                    height="1600"
                    width="1066"/>
    Indoor Plants</a>
</div>


<div className={CateStyle.imgWrapper}>
    <a href="/plants"><img className={CateStyle.innerImg} src="/images/pots.png" sizes="(min-width: 1400px) 433px,
                    (min-width: 750px) calc((100vw - 10rem) / 2),
                    calc(100vw - 3rem)" 
                    height="1600"
                    width="1066"/>
   Outdoor Plants</a>
</div>


<div className={CateStyle.imgWrapper}>
    <a href="/plants"><img className={CateStyle.innerImg} src="/images/seeds.png" sizes="(min-width: 1400px) 433px,
                    (min-width: 750px) calc((100vw - 10rem) / 2),
                    calc(100vw - 3rem)" 
                    height="1600"
                    width="1066" />
    Seeds</a>
</div>
<div className={CateStyle.imgWrapper}>
    <a href="/plants"><img className={CateStyle.innerImg} src="/images/seeds.png" sizes="(min-width: 1400px) 433px,
                    (min-width: 750px) calc((100vw - 10rem) / 2),
                    calc(100vw - 3rem)" 
                    height="1600"
                    width="1066"/>
    Pots</a>
</div>

<div className={CateStyle.imgWrapper}>
    <a href="/plants"><img className={CateStyle.innerImg} src="/images/pots.png" sizes="(min-width: 1400px) 433px,
                    (min-width: 750px) calc((100vw - 10rem) / 2),
                    calc(100vw - 3rem)" 
                    height="1600"
                    width="1066"/>
    Manure</a>
</div>


        </div>

    </div>)
}

export default Categories;