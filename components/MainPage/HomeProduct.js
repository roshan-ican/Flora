import react from 'react'
import HStyle from '../../styles/HomeProduct.module.css'

const HomeProduct = () => {

  let pName = "Product name"
    return(<div>

      <div className={HStyle.proCard}>
        <a href="#">
          <img src="/images/demoPla.png" className={HStyle.proImg} />
          <span className={HStyle.proHeading}>{
           pName.length > 40? pName.substring(0, 44) + "..." : pName
            
          }</span>
          <span className={HStyle.proPrize} >Rs. 599.00</span>
          <div className={HStyle.proBut}>Add to cart</div>
          


          {/* <img
            src="/images/outdoor.png"
            sizes="(min-width: 1400px) 317px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
            alt=""
            loading="lazy"
            class="motion-reduce"
            width="1000"
            height="1100"
          /> */}
          </a>
      </div>
       
        <section id={HStyle.body} className={HStyle.section}>
  <div className={HStyle.content}>
    <p className={HStyle.p}>Our Indoor Plants</p>
    <div className={HStyle.proBody}>
      {/*  */}

      <div className={HStyle.proCard}>
        <a href="#">
          <img src="/images/demoPla.png" className={HStyle.proImg} />
          <span className={HStyle.proHeading}>{
           pName.length > 40? pName.substring(0, 44) + "..." : pName
            
          }</span>
          <span className={HStyle.proPrize} >Rs. 599.00</span>
          <div className={HStyle.proBut}>Add to cart</div>
          


          {/* <img
            src="/images/outdoor.png"
            sizes="(min-width: 1400px) 317px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
            alt=""
            loading="lazy"
            class="motion-reduce"
            width="1000"
            height="1100"
          /> */}
          </a>
      </div>

      
{/*  */}
    </div>
  </div>
</section>
    </div>)
}

export default HomeProduct;