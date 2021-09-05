import React from 'react'
import { ArrowDownward, ArrowUpward} from '@material-ui/icons'
import './featuredInfo.css'

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featureditem">
                <span className="featuredtitle">
                    Revenue
                </span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,425</span>
                    <span className="featuredmoneyrate">$-11.4 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredsub">
                    Compared to last month
                </span>
            </div>


        <div className="featureditem">
                <span className="featuredtitle">
                    Sales
                </span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,425</span>
                    <span className="featuredmoneyrate">$-11.4 <ArrowDownward className='featuredIcon negative'/></span>
                </div>
                <span className="featuredsub">
                    Compared to last month
                </span>
            </div>
        
        <div className="featureditem">
                <span className="featuredtitle">
                    Cost
                </span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">$2,425</span>
                    <span className="featuredmoneyrate">$-11.4 <ArrowUpward  className='featuredIcon'/></span>
                </div>
                <span className="featuredsub">
                    Compared to last month
                </span>
            </div>

        



            
        </div>
    )
}
