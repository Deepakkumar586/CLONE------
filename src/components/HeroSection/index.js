import React from 'react'
import Button from '../common/Button'
import './heroSection.css'

function HeroSection() {
    return (
        <div className='hero-section-wrapper'>
            {/* create-label */}
            <div className='flex absolute-center hero-claim'>
                <div>pay credit card bill. earn guranted ₹200 back.</div>
                <div className='claim-text'>
                    claim now
                    {/* <img src='' className="claim-arrow/> */}
                </div>

            </div>
            <div className="flex absolute-center flex-col hero-section max-width">
                <div className='hero-heading'>
                    rewards for paying credit card bills.
                </div>
                <div className='hero-subheading'>
                    join 9M+ members who win rewards and cashbacks everyday
                </div>
                <Button buttonText='Download CRED' />

            </div>

        </div>
    )
}

export default HeroSection
