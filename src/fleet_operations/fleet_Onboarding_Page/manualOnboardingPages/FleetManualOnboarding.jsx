import { useRef } from 'react'
import './styles/FleetManualOnboarding.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import ManualOnboardingFormSlides from './ManualOnboardingFormSlides';
import { PuccDetailsComponents, TaxDetailsComponents, manualOnboardingSlideDetails } from '../../../common/form/FormData';
import ManualOnboardingSubmitSlide from './ManualOnboaringSubmitSlide';
function FleetManualOnboarding() {
    const swiperRef = useRef(null);
    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext(); // Go to the next slide
        }
    };
    const goToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev(); // Go to the previous slide
        }
    };
    return (
        <div className='manual-onboarding-main-container'>
            <div className="manual-onboarding-header">
                Onboarding Fleet
            </div>
            <div className="swiper-container">
                <Swiper slidesPerView={1} spaceBetween={5} pagination={true} modules={[Pagination]} onSwiper={(swiper) => (swiperRef.current = swiper)} className='swiper'>

                    {
                        manualOnboardingSlideDetails.slice(0,4).map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ManualOnboardingFormSlides previous={goToPreviousSlide} onClick={goToNextSlide} buttonText={item.buttonText} pageNo={item.pageNo} header={item.header} fleetData={item.fleetDetail} hasPicture={item.hasPicture} key={index} />
                                </SwiperSlide>
                            )
                        })
                    }
                    <SwiperSlide>
                        <div className="manual-onboarding-page-five">
                            <ManualOnboardingFormSlides fleetData={PuccDetailsComponents} onClick={goToNextSlide} previous={goToPreviousSlide} pageNo={'5'} header={'PUCC Details'} />
                            <ManualOnboardingFormSlides fleetData={TaxDetailsComponents} onClick={goToNextSlide} pageNo={'5'} header={'Tax Details'} buttonText={'Next'} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><ManualOnboardingSubmitSlide previous={goToPreviousSlide} /></SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default FleetManualOnboarding